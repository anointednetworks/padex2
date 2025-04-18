
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Upload, FileText, Copy, Download, BookOpen } from "lucide-react";
import { saveAs } from 'file-saver';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import mammoth from 'mammoth';

interface ResourceSection {
  title: string;
  content: string[];
}

export const ResourceDocumentProcessor = () => {
  const [extractedText, setExtractedText] = useState('');
  const [fileName, setFileName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [resourceSections, setResourceSections] = useState<ResourceSection[]>([]);
  const [outputFormat, setOutputFormat] = useState<'jsx' | 'html'>('jsx');
  const [useAutoFormatting, setUseAutoFormatting] = useState(true);

  const extractTextFromDocx = async (arrayBuffer: ArrayBuffer): Promise<string> => {
    try {
      // Use mammoth.js to convert the docx to HTML
      const result = await mammoth.extractRawText({ arrayBuffer });
      return result.value;
    } catch (error) {
      console.error('Error extracting text:', error);
      throw new Error('Failed to extract text from document');
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if file is a Word document
    if (!file.name.endsWith('.docx')) {
      toast({
        title: "Error",
        description: "Please upload a .docx file",
        variant: "destructive"
      });
      return;
    }

    setFileName(file.name);
    setIsProcessing(true);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const text = await extractTextFromDocx(arrayBuffer);
      setExtractedText(text);
      
      // Try to auto-format as resource sections
      if (useAutoFormatting) {
        const sections = parseResourceSections(text);
        setResourceSections(sections);
      }

      toast({
        title: "Success",
        description: "Document processed successfully!"
      });
    } catch (error) {
      console.error('Error processing document:', error);
      toast({
        title: "Error",
        description: "Error processing document. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const parseResourceSections = (text: string): ResourceSection[] => {
    const lines = text.split('\n').filter(line => line.trim());
    const sections: ResourceSection[] = [];
    let currentSection: ResourceSection | null = null;

    // Improved heading detection - look for patterns typical in Word documents
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if this line looks like a heading:
      // 1. Short lines (less than 60 chars)
      // 2. Lines that end with a colon
      // 3. Lines that are all uppercase or title case
      // 4. Lines followed by blank lines
      // 5. Exclude numbered lists
      const isHeading = (
        (line.length < 60 && 
         (/[A-Z]/.test(line[0]) || line.endsWith(':')) && 
         !line.endsWith('.') &&
         !line.match(/^[0-9]+\./)) ||
        (line.toUpperCase() === line && line.length > 3 && line.length < 30) || // ALL CAPS headings
        (i < lines.length - 1 && lines[i+1].trim() === '') // Heading followed by blank line
      );
      
      if (isHeading) {
        // If we were building a section, add it to our list
        if (currentSection && currentSection.content.length > 0) {
          sections.push(currentSection);
        }
        
        // Start a new section
        currentSection = {
          title: line.replace(/:$/, ''), // Remove trailing colon if present
          content: []
        };
      } else if (currentSection) {
        // Add this line to the current section if it's not empty
        if (line.trim() !== '') {
          currentSection.content.push(line);
        }
      } else {
        // No section started yet but we have content
        currentSection = {
          title: 'Introduction',
          content: [line]
        };
      }
    }
    
    // Don't forget to add the last section
    if (currentSection && currentSection.content.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  };

  // Additional function to manually edit a section
  const updateSection = (index: number, updatedSection: ResourceSection) => {
    const updatedSections = [...resourceSections];
    updatedSections[index] = updatedSection;
    setResourceSections(updatedSections);
  };

  // Function to add a new empty section
  const addNewSection = () => {
    setResourceSections([...resourceSections, { title: 'New Section', content: ['Add content here'] }]);
  };

  // Function to remove a section
  const removeSection = (index: number) => {
    const updatedSections = [...resourceSections];
    updatedSections.splice(index, 1);
    setResourceSections(updatedSections);
  };

  const generateResourceJSX = (): string => {
    if (resourceSections.length === 0) return '';
    
    return resourceSections.map(section => (
      `<div className="mb-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">${section.title}</h2>
  ${section.content.map(paragraph => `<p className="text-gray-700 mb-4">${paragraph}</p>`).join('\n  ')}
</div>`
    )).join('\n\n');
  };

  const generateResourceHTML = (): string => {
    if (resourceSections.length === 0) return '';
    
    return `<!DOCTYPE html>
<html>
<head>
  <title>Resource Content</title>
  <style>
    .section {
      margin-bottom: 40px;
    }
    .section-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      color: #1a202c;
    }
    .paragraph {
      margin-bottom: 16px;
      color: #4a5568;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Resource Content</h1>
  ${resourceSections.map(section => `
  <div class="section">
    <h2 class="section-title">${section.title}</h2>
    ${section.content.map(paragraph => `<p class="paragraph">${paragraph}</p>`).join('\n    ')}
  </div>`).join('')}
</body>
</html>`;
  };

  const copyOutput = () => {
    const output = outputFormat === 'jsx' ? generateResourceJSX() : generateResourceHTML();
    navigator.clipboard.writeText(output)
      .then(() => toast({ title: "Success", description: "Output copied to clipboard!" }))
      .catch(() => toast({ 
        title: "Error", 
        description: "Failed to copy text", 
        variant: "destructive" 
      }));
  };

  const downloadOutput = () => {
    const output = outputFormat === 'jsx' ? generateResourceJSX() : generateResourceHTML();
    const blob = new Blob([output], { 
      type: outputFormat === 'jsx' ? 'text/plain' : 'text/html;charset=utf-8' 
    });
    const extension = outputFormat === 'jsx' ? 'jsx' : 'html';
    saveAs(blob, `${fileName.replace('.docx', '')}_resource.${extension}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" /> 
            Resource Document Processor
          </CardTitle>
          <CardDescription>
            Upload a Word document (.docx) to extract resource content and format it for the Resource Center.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="mb-6">
            <label 
              htmlFor="document-upload" 
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-2 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">Word Document (.docx)</p>
              </div>
              <Input 
                id="document-upload" 
                type="file" 
                accept=".docx" 
                className="hidden" 
                onChange={handleFileUpload} 
              />
            </label>
          </div>

          {fileName && (
            <div className="mb-4 flex items-center text-sm text-gray-500">
              <FileText className="mr-2 h-4 w-4" />
              <span>Current file: {fileName}</span>
            </div>
          )}
          
          {isProcessing && (
            <div className="flex justify-center my-4">
              <div className="animate-pulse text-primary">Processing document...</div>
            </div>
          )}

          {extractedText && (
            <Tabs defaultValue="sections">
              <TabsList className="mb-4">
                <TabsTrigger value="sections">Resource Sections</TabsTrigger>
                <TabsTrigger value="raw">Raw Text</TabsTrigger>
                <TabsTrigger value="output">Output Code</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sections" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Extracted Sections: {resourceSections.length}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="auto-format" 
                        checked={useAutoFormatting} 
                        onCheckedChange={setUseAutoFormatting}
                      />
                      <Label htmlFor="auto-format">Auto-format</Label>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={addNewSection}
                    >
                      Add Section
                    </Button>
                  </div>
                </div>
                
                {resourceSections.length > 0 ? (
                  <div className="space-y-4">
                    {resourceSections.map((section, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <Input 
                            className="font-medium w-1/3" 
                            value={section.title}
                            onChange={(e) => {
                              const updatedSection = { ...section, title: e.target.value };
                              updateSection(index, updatedSection);
                            }}
                          />
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            onClick={() => removeSection(index)}
                          >
                            Remove
                          </Button>
                        </div>
                        <Textarea 
                          className="text-gray-600 text-sm min-h-[100px] mt-2"
                          value={section.content.join('\n')}
                          onChange={(e) => {
                            const updatedSection = { 
                              ...section, 
                              content: e.target.value.split('\n')
                                .map(line => line.trim())
                                .filter(line => line.length > 0)
                            };
                            updateSection(index, updatedSection);
                          }}
                        />
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No sections detected. Try adjusting the text format in your document.
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="raw">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Raw Text:</h3>
                </div>
                <Textarea 
                  value={extractedText} 
                  onChange={(e) => setExtractedText(e.target.value)} 
                  className="min-h-[300px] font-mono text-sm"
                />
              </TabsContent>
              
              <TabsContent value="output">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Output Format:</h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="format-jsx">
                        <input
                          type="radio"
                          id="format-jsx"
                          name="format"
                          className="mr-2"
                          checked={outputFormat === 'jsx'}
                          onChange={() => setOutputFormat('jsx')}
                        />
                        JSX
                      </Label>
                      
                      <Label htmlFor="format-html">
                        <input
                          type="radio"
                          id="format-html"
                          name="format"
                          className="mr-2"
                          checked={outputFormat === 'html'}
                          onChange={() => setOutputFormat('html')}
                        />
                        HTML
                      </Label>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={copyOutput}
                        className="flex items-center"
                      >
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm" 
                        onClick={downloadOutput}
                        className="flex items-center"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Textarea 
                  value={outputFormat === 'jsx' ? generateResourceJSX() : generateResourceHTML()} 
                  readOnly
                  className="min-h-[300px] font-mono text-sm"
                />
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
