import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Example } from "@/components/country-dropdown/example";
import { ExampleSlim } from "@/components/country-dropdown/example-slim";
import { ExampleMulti } from "@/components/country-dropdown/example-multi";
import { Preview } from "@/components/preview";
import { Code } from "@/components/code";

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
            <Card className="min-w-80 border-none shadow-none">
              <CardHeader>
                <CardTitle>Country Dropdown</CardTitle>
                <CardDescription>
                  A dropdown component for selecting a country.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Example />
              </CardContent>
            </Card>
          </Preview>
        </TabsContent>
        <TabsContent value="code">
          <Code code={example} />
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
        <Code code={installation} lang="bash" />
        <p>
          Copy the component below to{" "}
          <code>components/ui/country-dropdown.tsx</code>.
        </p>
        <Code code={component} />
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
            <Code code={exampleSlim} />
          </TabsContent>
        </Tabs>

        <h3>Multiple</h3>
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
            <Code code={exampleMulti} />
          </TabsContent>
        </Tabs>

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
              <Card className="min-w-80 border-none shadow-none">
                <CardHeader>
                  <CardTitle>Country Dropdown</CardTitle>
                  <CardDescription>
                    A dropdown component for selecting a country.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Example />
                </CardContent>
              </Card>
            </Preview>
          </TabsContent>
          <TabsContent value="code">
            <Code code={exampleForm} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
