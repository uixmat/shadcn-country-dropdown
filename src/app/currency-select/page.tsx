import type { Metadata } from "next";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Preview } from "@/components/preview";
import { CodeBlock } from "@/components/code-block";

// Demos
import { Example } from "@/lib/demos/currency-select/example";

export const metadata: Metadata = {
  title: "A currency select for shadcn/ui",
  description: "An ISO 4217 compliant currency select component for shadcn/ui.",
};

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="space-y-2">
        <h1>
          A{" "}
          <a
            href="https://ui.shadcn.com/docs/components/select"
            target="_blank"
          >
            shadcn/ui
          </a>{" "}
          Currency Select
        </h1>
        <p>An ISO 4217 compliant currency select component.</p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview">
          <Preview>
            <Example />
          </Preview>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock>
            test
            {/* <Code code={example} /> */}
            {/* <CopyButton value={example} /> */}
          </CodeBlock>
        </TabsContent>
      </Tabs>

      <div className="space-y-6 mt-12">
        <h2>About</h2>
        <p>
          The <code>PhoneInput</code> component is a compliant phone input with
          international call prefixes. It&apos;s built using the{" "}
          <a
            href="https://gitlab.com/catamphetamine/libphonenumber-js"
            target="_blank"
          >
            <code>libphonenumber-js</code>
          </a>{" "}
          package for parsing and validating phone numbers.
        </p>

        <h3>Info</h3>

        <p>
          The <code>PhoneInput</code> component is built <b>without</b>{" "}
          <a href="https://ui.shadcn.com/" target="_blank">
            shadcn/ui
          </a>{" "}
          dependencies, however is styled to fit seamlessly with the rest of the
          component library. You can fully customize the component to your
          needs.
        </p>
      </div>
    </div>
  );
}
