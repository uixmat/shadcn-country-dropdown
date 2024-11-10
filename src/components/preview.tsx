interface PreviewProps {
  children: React.ReactNode;
}

export const Preview = ({ children }: PreviewProps) => {
  return (
    <div className="preview flex min-h-[350px] w-full justify-center items-center border rounded-md">
      {children}
    </div>
  );
};
