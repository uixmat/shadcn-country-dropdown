"use client";

import * as React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface CopyButtonProps extends ButtonProps {
  value: string;
  src?: string;
}

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const cleanCodeForCopy = (code: string) => {
    // Split into lines
    const lines = code.trim().split("\n");

    // Remove first line if it contains ```
    if (lines[0].startsWith("```")) {
      lines.shift();
    }

    // Remove last line if it contains ```
    if (lines[lines.length - 1].startsWith("```")) {
      lines.pop();
    }

    return lines.join("\n");
  };

  return (
    <Button
      size="icon"
      variant={variant}
      className={cn(
        "inline-flex absolute right-4 top-4 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:h-3 [&_svg]:w-3",
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(cleanCodeForCopy(value));
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  );
}
