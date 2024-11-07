import { highlightCode } from "@/lib/highlight-code";

export async function Code({ code, lang }: { code: string; lang?: string }) {
  const highlightedCode = await highlightCode(code, lang);
  return (
    <section
      className="max-h-96 overflow-y-scroll rounded-sm overflow-clip [&>pre]:p-4 [&>pre]:text-sm [&>pre]:rounded-none [&>pre]:leading-6 [&>pre]:bg-muted"
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
}
