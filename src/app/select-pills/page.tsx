import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// UI
import { Preview } from "@/components/preview";
import { CodeBlock } from "@/components/code-block";

// Demos
import { SelectPillsDemo } from "@/lib/demos/select-pills";
import { PillsFormDemo } from "@/lib/demos/select-pills/pills-form";

export default function SelectPillsPage() {
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
          Multi-select with pills
        </h1>
        <p>Description.</p>
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
            <SelectPillsDemo />
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
        <h2>Examples</h2>

        <h3>Form</h3>

        <Tabs defaultValue="preview" className="w-full">
          <div className="flex items-center justify-between pb-3">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview">
            <Preview>
              <PillsFormDemo />
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
      </div>
    </div>
  );
}
