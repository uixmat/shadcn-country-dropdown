import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// UI
import { Preview } from "@/components/preview";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";

// Code
import { example, installation } from "@/lib/code/select-pills/misc";
import { component } from "@/lib/code/select-pills/component";
import { exampleForm } from "@/lib/code/select-pills/example-form";
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
            <Code code={example} />
            <CopyButton value={example} />
          </CodeBlock>
        </TabsContent>
      </Tabs>

      <div className="space-y-6 mt-12">
        <h2>About</h2>
        <p>
          The <code>SelectPills</code> component is a fast autocomplete search
          with multiple select, displayed as pills. Fully accessible it allows
          you to navigate the list with the keyboard using <kbd>↑</kbd> and{" "}
          <kbd>↓</kbd> keys, and select with <kbd>⮐</kbd> key.
        </p>

        <h3>Dependencies</h3>

        <p>
          The <code>SelectPills</code> is built using out-of-the-box{" "}
          <a href="https://ui.shadcn.com" target="_blank">
            shadcn/ui
          </a>{" "}
          components, including the <code>Popover</code>,<code>Badge</code> and{" "}
          <code>Input</code> components.
        </p>
      </div>

      <div className="space-y-6 mt-12">
        <h2>Installation</h2>
        <p>
          Install the <code>country-dropdown</code> package using your preferred
          package manager:
        </p>
        <CodeBlock>
          <Code code={installation} />
          <CopyButton value={installation} />
        </CodeBlock>
        <p>
          Copy the component below to{" "}
          <code>components/ui/currency-select.tsx</code>.
        </p>
        <CodeBlock>
          <Code code={component} />
          <CopyButton value={component} />
        </CodeBlock>
        <Button asChild>
          <a
            href="https://github.com/uixmat/shadcn-country-dropdown/blob/main/src/components/select-pills/index.tsx"
            target="_blank"
          >
            View on Github
          </a>
        </Button>
      </div>

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
              <Code code={exampleForm} />
              <CopyButton value={exampleForm} />
            </CodeBlock>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
