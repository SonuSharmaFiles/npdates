"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { SITE_URL } from "@/lib/site";

const SNIPPET = `<iframe
  src="${SITE_URL}/embed"
  title="Nepali Date Converter"
  width="100%"
  height="540"
  style="border: 1px solid rgba(0,0,0,.1); border-radius: 16px; max-width: 480px;"
  loading="lazy"
></iframe>`;

export function EmbedSnippet() {
  const handleCopy = () => {
    navigator.clipboard.writeText(SNIPPET);
    toast.success("Embed code copied");
  };

  return (
    <>
      <pre className="text-xs font-mono bg-muted/30 border rounded-xl p-4 overflow-x-auto">
        <code>{SNIPPET}</code>
      </pre>
      <Button onClick={handleCopy} className="mt-3 gap-2">
        <Copy className="w-4 h-4" /> Copy embed code
      </Button>
    </>
  );
}
