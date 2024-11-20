"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Console } from "@/components/console";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Country, CountryDropdown } from "@/components/country-dropdown";

const FormSchema = z.object({
  country: z.string({
    required_error: "Please select a country",
  }),
});

type FormSchema = z.infer<typeof FormSchema>;

export const Example = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(
    null
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("HIYA", data);
    toast.success(`${selectedCountry?.name} ${selectedCountry?.emoji} `);
  }

  return (
    <>
      <Card className="preview-card">
        <CardHeader>
          <CardTitle>Country Dropdown</CardTitle>
          <CardDescription>
            A dropdown component for selecting a country.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your nationality</FormLabel>
                    <CountryDropdown
                      placeholder="Select country"
                      defaultValue={field.value}
                      onChange={(country) => {
                        field.onChange(country.alpha3);
                        setSelectedCountry(country);
                      }}
                    />
                    <FormDescription>Where are you from?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Console>
        {selectedCountry ? (
          <div className="w-full">
            <pre className="p-4">
              {JSON.stringify(selectedCountry, null, 2)}
            </pre>
          </div>
        ) : (
          <div className="flex items-center text-sm text-zinc-400 font-mono ">
            <pre className="p-4">
              &gt;
              <span className="animate-blink">_</span>
            </pre>
          </div>
        )}
      </Console>
    </>
  );
};
