"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

// UI
import { ModeToggle } from "@/components/theme-toggle";

export function Header() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="flex justify-between items-center fixed inset-x-0 top-0 w-full p-4 bg-background/80 backdrop-blur-md z-10">
      <nav className="flex items-center gap-4 text-sm text-muted-foreground/80 font-semibold">
        <Link
          href="/"
          className={cn(
            "hover:text-muted-foreground transition-all",
            pathname === "/" && "text-primary"
          )}
        >
          Country dropdown
        </Link>

        <Link
          href="/currency-select"
          className={cn(
            "hover:text-muted-foreground transition-all",
            pathname === "/currency-select" && "text-primary"
          )}
        >
          Currency Select
        </Link>
        <Link
          href="/phone-input"
          className={cn(
            "hover:text-muted-foreground transition-all",
            pathname === "/phone-input" && "text-primary"
          )}
        >
          Phone input
        </Link>
        <Link
          href="/select-pills"
          className={cn(
            "hover:text-muted-foreground transition-all",
            pathname === "/select-pills" && "text-primary"
          )}
        >
          Select Pills
        </Link>
      </nav>
      <ModeToggle />
    </div>
  );
}
