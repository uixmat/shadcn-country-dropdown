export const exampleForm = `"use client";
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
  country: z.string({
    required_error: "Please select a country",
  }),
});

type FormSchema = z.infer<typeof FormSchema>;

export const Example = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(\`\${selectedCountry?.name} \${selectedCountry?.emoji} \`);
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
                placeholder="Country"
                defaultValue={field.value}
                onChange={(country) => {
                  field.onChange(country.alpha3);
                }}
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
