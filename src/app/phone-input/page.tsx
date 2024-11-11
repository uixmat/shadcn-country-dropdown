import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Preview } from "@/components/preview";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";

import { Example } from "./examples";
import { Simple } from "./examples/simple";
import { InlineCountryDropdown } from "./examples/inline-country-dropdown";

import { installation } from "@/lib/code/installtion-phone";
import { component } from "@/lib/code/component-phone";
import { examplePhoneConnected } from "@/lib/code/example-phone-connected";
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
          Phone Input
        </h1>
        <p>An ISO 3166 compliant phone input component.</p>
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
            <InlineCountryDropdown />
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
          The <code>PhoneInput</code> component.
        </p>
      </div>

      <div className="space-y-6 mt-12">
        <h2>Installation</h2>
        <p>
          Install the <code>PhoneInput</code> dependencies using your preferred
          package manager:
        </p>
        <CodeBlock>
          <Code code={installation} />
          <CopyButton value={installation} />
        </CodeBlock>
        <p>
          Copy the component below to <code>components/ui/phone-input.tsx</code>
          .
        </p>
        <CodeBlock>
          <Code code={component} />
          <CopyButton value={component} />
        </CodeBlock>
        <Button asChild>
          <a
            href="https://github.com/uixmat/shadcn-country-dropdown/blob/main/src/components/country-dropdown/index.tsx"
            target="_blank"
          >
            View on Github
          </a>
        </Button>
      </div>

      <div className="space-y-6 mt-12">
        <h2>Examples</h2>

        <h3>Connected values</h3>

        <p>
          Connected values allow you to connect both the{" "}
          <code>CountryDropdown</code> and <code>PhoneInput</code> components.
        </p>

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
              <Code code={examplePhoneConnected} />
              <CopyButton value={examplePhoneConnected} />
            </CodeBlock>
          </TabsContent>
        </Tabs>

        <h3>Standalone</h3>

        <p>
          A standalone <code>PhoneInput</code> with{" "}
          <a href="https://ui.shadcn.com/" target="_blank">
            shadcn/ui
          </a>{" "}
          forms.
        </p>

        <Tabs defaultValue="preview" className="w-full">
          <div className="flex items-center justify-between pb-3">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview">
            <Preview>
              <Simple />
            </Preview>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock>
              <Code code={examplePhoneConnected} />
              <CopyButton value={examplePhoneConnected} />
            </CodeBlock>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
