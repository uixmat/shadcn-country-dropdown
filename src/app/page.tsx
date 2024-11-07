import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CountryDropdown } from "@/components/country-dropdown";

export default function Home() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Country Dropdown</CardTitle>
          <CardDescription>
            A dropdown component for selecting a country.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CountryDropdown placeholder="Select country" />
        </CardContent>
      </Card>
    </>
  );
}
