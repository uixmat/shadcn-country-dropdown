import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CountryDropdown } from "@/components/country-dropdown";
import { Preview } from "@/components/preview";
export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview">
          <Preview>
            <Card>
              <CardHeader>
                <CardTitle>Country Dropdown</CardTitle>
                <CardDescription>
                  A dropdown component for selecting a country.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CountryDropdown
                  placeholder="Select country"
                  size="lg"
                  variant="default"
                />
              </CardContent>
              <CardFooter>
                <p>Footer</p>
              </CardFooter>
            </Card>
          </Preview>
        </TabsContent>
        <TabsContent value="code">
          <p>Code</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
