"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

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
    </div>
  );
};
