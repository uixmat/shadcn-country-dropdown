import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Example } from "@/components/country-dropdown/example";
import { ExampleSlim } from "@/components/country-dropdown/example-slim";
import { ExampleMulti } from "@/components/country-dropdown/example-multi";
import { Preview } from "@/components/preview";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";

import { component } from "@/lib/code/component";
import { installation } from "@/lib/code/installtion";
import { example } from "@/lib/code/example";
import { exampleForm } from "@/lib/code/example-form";
import { exampleSlim } from "@/lib/code/example-slim";
import { exampleMulti } from "@/lib/code/example-multi";

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
          Country Dropdown
        </h1>
        <p>An ISO 3166 compliant dropdown component for selecting a country.</p>
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
            <Code code={example} />
            <CopyButton value={example} />
          </CodeBlock>
        </TabsContent>
      </Tabs>

      <div className="space-y-6 mt-12">
        <h2>About</h2>
        <p>
          The <code>CountryDropdown</code> component uses the{" "}
          <code>
            <a
              href="https://ui.shadcn.com/docs/components/popover"
              target="_blank"
            >
              Popover
            </a>
          </code>{" "}
          and{" "}
          <code>
            <a
              href="https://ui.shadcn.com/docs/components/command"
              target="_blank"
            >
              Command
            </a>
          </code>{" "}
          components from the{" "}
          <a href="https://ui.shadcn.com" target="_blank">
            shadcn/ui
          </a>{" "}
          library.
        </p>

        <h3>Dependencies</h3>
        <p>
          The <code>CountryDropdown</code> is built using{" "}
          <a
            href="https://www.npmjs.com/package/react-circle-flags"
            target="_blank"
          >
            react-circle-flags
          </a>{" "}
          and{" "}
          <a
            href="https://www.npmjs.com/package/country-data-list"
            target="_blank"
          >
            country-data-list
          </a>{" "}
          packages.
        </p>
        <p>
          The <b>country-data-list</b> package provides both{" "}
          <a
            href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"
            target="_blank"
          >
            ISO 3166-1 alpha-2
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3"
            target="_blank"
          >
            ISO 3166-1 alpha-3
          </a>{" "}
          country codes. Select an country from the demo above to see the full
          country object.
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
          <code>components/ui/country-dropdown.tsx</code>.
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

        <h3>Slim</h3>

        <p>
          A slim version makes it easy for you to have a shorthand version
          displaying only the country flag. This could be used in conjunction
          with{" "}
          <a
            href="https://nextjs.org/docs/pages/building-your-application/routing/internationalization"
            target="_blank"
          >
            internationalisation
          </a>
          .
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
              <ExampleSlim />
            </Preview>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock>
              <Code code={exampleSlim} />
              <CopyButton value={exampleSlim} />
            </CodeBlock>
          </TabsContent>
        </Tabs>

        <h3>Multiple</h3>
        <p>
          The multiple country selector is an additional option that returns a
          string array. When using in conjunction with Zod schema make sure to
          always use a string array; <code>z.array(z.string())</code>. Also
          provide an empty array in the <code>defaultValue</code> prop and
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
              <ExampleMulti />
            </Preview>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock>
              <Code code={exampleMulti} />
              <CopyButton value={exampleMulti} />
            </CodeBlock>
          </TabsContent>
        </Tabs>

        <h3>Form</h3>
        <p>
          Easily use the <code>CountryDropdown</code> with{" "}
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
              <Example />
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
