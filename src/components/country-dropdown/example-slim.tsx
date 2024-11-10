"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormField, FormItem } from "@/components/ui/form";

import { Country, CountryDropdown } from ".";

const FormSchema = z.object({
  country: z.string({
    required_error: "Please select a country",
  }),
});

type FormSchema = z.infer<typeof FormSchema>;

export const ExampleSlim = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(
    null
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast.success(`${selectedCountry?.name} ${selectedCountry?.emoji} `);
  }

  return (
    <div className="flex flex-col w-full">
      <Card className="min-w-80 w-full max-w-96 mx-auto my-16 border-none shadow-none">
        <CardHeader>
          <CardTitle>Slim Dropdown</CardTitle>
          <CardDescription>
            A slim version makes it easy for you to have a shorthand version
            displaying only the country flag.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                    <CountryDropdown
                      placeholder="Select country"
                      defaultValue={field.value}
                      onChange={(country) => {
                        field.onChange(country.alpha3);
                        setSelectedCountry(country);
                        toast(`Selected${country.name} ${country.emoji} `);
                      }}
                      slim
                    />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="w-full border-t bg-zinc-900 text-sm">
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
      </div>
    </div>
  );
};
