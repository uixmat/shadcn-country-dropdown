import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Demos
import { Example } from "@/lib/demos/phone-input/index";
import { Simple } from "@/lib/demos/phone-input/simple";
import { InlineCountryDropdown } from "@/lib/demos/phone-input/inline-country-dropdown";

// UI
import { Preview } from "@/components/preview";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";

// Code
import { installation } from "@/lib/code/phone-input/installation";
import { component } from "@/lib/code/phone-input/component";
import { examplePhoneConnected } from "@/lib/code/phone-input/example-phone-connected";

export const metadata: Metadata = {
  title: "A phone input for shadcn/ui",
  description: "A compliant phone input component for shadcn/ui.",
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

        <h3>
          Use with the <code>CountryDropdown</code>
        </h3>

        <p>
          The <code>PhoneInput</code> component can be used in conjunction with
          the <code>CountryDropdown</code> component to provide a better user
          experience by allowing the user to select the country before entering
          the phone number.
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
            href="https://github.com/uixmat/shadcn-country-dropdown/blob/main/src/components/phone-input/index.tsx"
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
