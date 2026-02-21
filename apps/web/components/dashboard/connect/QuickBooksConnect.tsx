"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, Link2Off, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function QuickBooksConnect() {

  const [connected, setConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  function handleConnect() {
    // Todo: Implement real connection logic with QuickBooks API
    setIsConnecting(true);
    setTimeout(() => {
      setConnected(true);
      setIsConnecting(false);
    }, 1200);
  }

  function handleDisconnect() {
    setConnected(false);
  }

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-foreground">
              QuickBooks Integration
            </CardTitle>
            <CardDescription className="mt-1 text-muted-foreground">
              Connect your QuickBooks Online account to automatically sync invoices, expenses, and financial reports.
            </CardDescription>
          </div>
          <Badge
            variant="secondary"
            className={
              connected
                ? "border-0 bg-accent/10 font-medium text-accent"
                : "border-0 bg-secondary font-medium text-muted-foreground"
            }
          >
            {connected ? "Connected" : "Not Connected"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {!connected ? (
            <Button onClick={handleConnect} disabled={isConnecting}>
              {isConnecting ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin"/>
                  Connecting...
                </>
              ) : (
                <>
                  <Link2 className="mr-2 h-4 w-4"/>
                  Connect to QuickBooks
                </>
              )}
            </Button>
          ) : (
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4"/>
                Sync Now
              </Button>
              <Button variant="outline" size="sm" onClick={handleDisconnect}>
                <Link2Off className="mr-2 h-4 w-4"/>
                Disconnect
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
