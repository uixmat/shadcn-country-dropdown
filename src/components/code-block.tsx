export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative rounded-md bg-zinc-900 border [&>section>pre]:p-4">
      {children}
    </div>
  );
};
