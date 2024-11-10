interface PreviewProps {
  children: React.ReactNode;
}

export const Preview = ({ children }: PreviewProps) => {
  return (
    <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center border rounded-md">
      {children}
    </div>
  );
};
