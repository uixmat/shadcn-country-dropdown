export const exampleMulti = `"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Country, CountryDropdown } from "@/components/ui/country-dropdown";

const FormSchema = z.object({
  country: z.array(z.string()).min(1, "Please select at least one country"),
});

type FormSchema = z.infer<typeof FormSchema>;

export const Example = () => {
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(
      selectedCountries
        .map((country) => \`\${country.name} \${country.emoji}\`)
        .join(", ")
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <CountryDropdown
                placeholder="Select countries"
                defaultValue={field.value || []}
                onChange={(countries) => {
                  field.onChange(countries.map((country) => country.alpha3));
                  setSelectedCountries(countries);
                }}
                multiple
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
`;
