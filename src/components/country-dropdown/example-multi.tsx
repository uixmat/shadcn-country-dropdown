"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Country, CountryDropdown } from ".";

const FormSchema = z.object({
  country: z.array(z.string()).min(1, "Please select at least one country"),
});

export const ExampleMulti = () => {
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("HIYA", data);
    toast.success(
      selectedCountries
        .map((country) => `${country.name} ${country.emoji}`)
        .join(", ")
    );
  }

  return (
    <div className="flex flex-col gap-4">
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
                <FormLabel>Countries</FormLabel>
                <CountryDropdown
                  placeholder="Select countries"
                  defaultValue={field.value || []}
                  onChange={(countries) => {
                    field.onChange(countries.map((country) => country.alpha3));
                    setSelectedCountries(countries);
                  }}
                  multiple={true}
                />
                <FormDescription>
                  Select countries you&apos;ve visited
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {selectedCountries.length > 0 && (
        <div className="w-full bg-border rounded-md p-4 text-sm max-w-full overflow-x-auto">
          <pre>{JSON.stringify(selectedCountries, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
