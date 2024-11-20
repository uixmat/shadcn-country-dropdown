import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// UI
import { Preview } from "@/components/preview";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { CopyButton } from "@/components/copy-button";

// Code
import { example, installation } from "@/lib/code/currency-select/misc";
import { component } from "@/lib/code/currency-select/component";
import { exampleSlim } from "@/lib/code/currency-select/example-slim";

// Demos
import { Example } from "@/lib/demos/currency-select/example";
import { ExampleSlim } from "@/lib/demos/currency-select/example-slim";

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
            <Code code={example} />
            <CopyButton value={example} />
          </CodeBlock>
        </TabsContent>
      </Tabs>

      <div className="space-y-6 mt-12">
        <h2>About</h2>
        <p>
          The <code>CurrencySelect</code> component uses the
          <code>
            <a
              href="https://ui.shadcn.com/docs/components/select"
              target="_blank"
            >
              Select
            </a>
          </code>{" "}
          component from the{" "}
          <a href="https://ui.shadcn.com" target="_blank">
            shadcn/ui
          </a>{" "}
          library.
        </p>

        <h3>Dependencies</h3>

        <p>
          The <code>CountryDropdown</code> is built using the{" "}
          <a
            href="https://www.npmjs.com/package/country-data-list"
            target="_blank"
          >
            country-data-list
          </a>{" "}
          package which provides{" "}
          <a
            href="https://www.iso.org/iso-4217-currency-codes.html"
            target="_blank"
          >
            ISO 4217
          </a>{" "}
          country codes.
        </p>

        <h3>Currencies</h3>
        <p>
          My component imports a set of constants, <code>customCurrencies</code>
          and <code>allCurrencies</code>. The <code>customCurrencies</code>{" "}
          array include only countries i want to show in the dropdown. The{" "}
          <code>allCurrencies</code> array include all countries except the ones
          in <code>customCurrencies</code> array.
        </p>
        <Button asChild>
          <a
            href="https://github.com/uixmat/shadcn-country-dropdown/blob/main/src/lib/constants/currencies.tsx"
            target="_blank"
          >
            View on Github
          </a>
        </Button>
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
            href="https://github.com/uixmat/shadcn-country-dropdown/blob/main/src/components/currency-select/index.tsx"
            target="_blank"
          >
            View on Github
          </a>
        </Button>
      </div>

      <div className="space-y-6 mt-12">
        <h2>Examples</h2>

        <h3>Small</h3>

        <p>
          The small variant allows you to have a shorthand version displaying
          only the currency code in the <code>SelectTrigger</code>. With the
          example below you can see how to use it in a form although it requires
          a little bit more work to display the <code>FormLabel</code> and
          validation messages correctly, see code below.
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
      </div>
    </div>
  );
}
