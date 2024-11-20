interface ConsoleProps {
  children: React.ReactNode;
}

export const Console = ({ children }: ConsoleProps) => {
  return (
    <div className="console w-full border-t dark:bg-zinc-900 text-sm">
      {children}
    </div>
  );
};
