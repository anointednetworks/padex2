
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

// Function to extract text from a DOCX file
const extractTextFromDocx = async (arrayBuffer: ArrayBuffer): Promise<string> => {
  try {
    // This is a workaround since we're using browser APIs
    // In a real implementation, we would use docx-parser or mammoth.js
    const text = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string || '';
        // Filter out XML/binary content to get somewhat readable text
        const extractedText = content
          .replace(/<[^>]*>/g, '\n')
          .replace(/[^\x20-\x7E\n]/g, ' ')
          .split('\n')
          .filter(line => line.trim().length > 0)
          .join('\n');
        resolve(extractedText);
      };
      reader.readAsText(new Blob([arrayBuffer]));
    });
    
    return text;
  } catch (error) {
    console.error('Error extracting text:', error);
    throw new Error('Failed to extract text from document');
  }
};

interface GlossaryTerm {
  term: string;
  definition: string;
}

export const GlossaryDocumentProcessor = () => {
  const [extractedText, setExtractedText] = useState('');
  const [fileName, setFileName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [glossaryTerms, setGlossaryTerms] = useState<GlossaryTerm[]>([]);
  const [outputFormat, setOutputFormat] = useState<'jsx' | 'html'>('jsx');
  const [useAutoFormatting, setUseAutoFormatting] = useState(true);

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
      
      // Try to auto-format as glossary terms
      if (useAutoFormatting) {
        const terms = parseGlossaryTerms(text);
        setGlossaryTerms(terms);
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

  const parseGlossaryTerms = (text: string): GlossaryTerm[] => {
    const lines = text.split('\n').filter(line => line.trim());
    const terms: GlossaryTerm[] = [];

    // Try to detect term/definition pairs
    // Assuming format is either:
    // 1. Term: Definition
    // 2. Term (line break) Definition

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check for "Term: Definition" format
      const colonMatch = line.match(/^(.+?):\s*(.+)$/);
      if (colonMatch && colonMatch[1] && colonMatch[2]) {
        terms.push({
          term: colonMatch[1].trim(),
          definition: colonMatch[2].trim()
        });
        continue;
      }
      
      // Check for term followed by definition on next line
      if (i < lines.length - 1 && 
          line.length < 50 && // Term is usually shorter
          !line.endsWith(':') && 
          !line.endsWith('.')) {
        terms.push({
          term: line,
          definition: lines[i + 1].trim()
        });
        i++; // Skip the next line since we've used it
      }
    }

    return terms;
  };

  const generateGlossaryJSX = (): string => {
    if (glossaryTerms.length === 0) return '';
    
    return glossaryTerms.map(item => (
      `<div key="${item.term}" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
  <h3 className="text-lg font-semibold text-gray-900 mb-2">${item.term}</h3>
  <p className="text-gray-600">${item.definition}</p>
</div>`
    )).join('\n\n');
  };

  const generateGlossaryHTML = (): string => {
    if (glossaryTerms.length === 0) return '';
    
    return `<!DOCTYPE html>
<html>
<head>
  <title>Glossary Terms</title>
  <style>
    .term-container {
      margin-bottom: 20px;
      padding: 15px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    .term {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .definition {
      color: #4a5568;
    }
  </style>
</head>
<body>
  <h1>Glossary Terms</h1>
  ${glossaryTerms.map(item => `
  <div class="term-container">
    <div class="term">${item.term}</div>
    <div class="definition">${item.definition}</div>
  </div>`).join('')}
</body>
</html>`;
  };

  const copyOutput = () => {
    const output = outputFormat === 'jsx' ? generateGlossaryJSX() : generateGlossaryHTML();
    navigator.clipboard.writeText(output)
      .then(() => toast({ title: "Success", description: "Output copied to clipboard!" }))
      .catch(() => toast({ 
        title: "Error", 
        description: "Failed to copy text", 
        variant: "destructive" 
      }));
  };

  const downloadOutput = () => {
    const output = outputFormat === 'jsx' ? generateGlossaryJSX() : generateGlossaryHTML();
    const blob = new Blob([output], { 
      type: outputFormat === 'jsx' ? 'text/plain' : 'text/html;charset=utf-8' 
    });
    const extension = outputFormat === 'jsx' ? 'jsx' : 'html';
    saveAs(blob, `${fileName.replace('.docx', '')}_glossary.${extension}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-5 w-5" /> 
            Glossary Document Processor
          </CardTitle>
          <CardDescription>
            Upload a Word document (.docx) to extract glossary terms and definitions.
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
            <Tabs defaultValue="terms">
              <TabsList className="mb-4">
                <TabsTrigger value="terms">Glossary Terms</TabsTrigger>
                <TabsTrigger value="raw">Raw Text</TabsTrigger>
                <TabsTrigger value="output">Output Code</TabsTrigger>
              </TabsList>
              
              <TabsContent value="terms" className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Extracted Terms: {glossaryTerms.length}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="auto-format" 
                        checked={useAutoFormatting} 
                        onCheckedChange={setUseAutoFormatting}
                      />
                      <Label htmlFor="auto-format">Auto-format</Label>
                    </div>
                  </div>
                </div>
                
                {glossaryTerms.length > 0 ? (
                  <div className="space-y-4">
                    {glossaryTerms.map((term, index) => (
                      <Card key={index} className="p-4">
                        <div className="font-medium mb-2">{term.term}</div>
                        <div className="text-gray-600 text-sm">{term.definition}</div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No terms detected. Try adjusting the text format in your document.
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
                  value={outputFormat === 'jsx' ? generateGlossaryJSX() : generateGlossaryHTML()} 
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
