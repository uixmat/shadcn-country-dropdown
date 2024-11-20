interface ConsoleProps {
  children: React.ReactNode;
}

export const Console = ({ children }: ConsoleProps) => {
  return (
    <div className="console w-full border-t bg-muted/30 dark:bg-zinc-900 text-primary/70 text-sm">
      {children}
    </div>
  );
};
