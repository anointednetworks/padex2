
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { ResourceDocumentProcessor } from '@/components/ResourceDocumentProcessor';

interface AdminTabProps {
  adminPassword: string;
  setAdminPassword: (password: string) => void;
}

export const AdminTab: React.FC<AdminTabProps> = ({ adminPassword, setAdminPassword }) => {
  const [showAdminTools, setShowAdminTools] = useState(false);
  const [inputPassword, setInputPassword] = useState('');

  const handleAdminAuth = () => {
    if (inputPassword === adminPassword) {
      setShowAdminTools(true);
      toast({
        title: "Success",
        description: "Admin access granted"
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive"
      });
    }
  };

  const handleSetPassword = () => {
    if (inputPassword.length >= 4) {
      setAdminPassword(inputPassword);
      setShowAdminTools(true);
      localStorage.setItem('resourceAdminPassword', inputPassword);
      toast({
        title: "Success",
        description: "Admin password set"
      });
    } else {
      toast({
        title: "Error",
        description: "Password must be at least 4 characters",
        variant: "destructive"
      });
    }
  };

  const handleLogout = () => {
    setShowAdminTools(false);
    setInputPassword('');
  };

  return (
    <>
      <Card className="p-6 mb-6">
        {!adminPassword ? <div className="space-y-4">
            <h3 className="text-lg font-medium">Set Admin Password</h3>
            <p className="text-sm text-gray-500">
              Create a password to protect the admin tools. This will be stored locally in your browser.
            </p>
            <div className="flex gap-2">
              <Input type="password" placeholder="Set a password" value={inputPassword} onChange={e => setInputPassword(e.target.value)} />
              <Button onClick={handleSetPassword}>Set Password</Button>
            </div>
          </div> : !showAdminTools ? <div className="space-y-4">
            <h3 className="text-lg font-medium">Admin Login</h3>
            <div className="flex gap-2">
              <Input type="password" placeholder="Enter admin password" value={inputPassword} onChange={e => setInputPassword(e.target.value)} />
              <Button onClick={handleAdminAuth}>Login</Button>
            </div>
          </div> : <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Admin Tools</h3>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Use these tools to manage content. When you're done, click "Logout" to hide the admin tools.
            </p>
            <div className="flex gap-2">
              <Button variant="destructive" size="sm" onClick={() => {
                localStorage.removeItem('resourceAdminPassword');
                setAdminPassword('');
                setShowAdminTools(false);
                toast({
                  title: "Success",
                  description: "Admin access removed"
                });
              }}>
                Delete Admin Access
              </Button>
            </div>
          </div>}
      </Card>
      
      {showAdminTools && <ResourceDocumentProcessor />}
    </>
  );
};
