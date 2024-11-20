interface PreviewProps {
  children: React.ReactNode;
}

export const Preview = ({ children }: PreviewProps) => {
  return (
    <div className="preview flex flex-col justify-between min-h-[350px] w-full items-center border rounded-md">
      {children}
    </div>
  );
};
