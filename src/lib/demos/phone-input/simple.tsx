"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Console } from "@/components/console";

import { PhoneInput, phoneSchema, CountryData } from "@/components/phone-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  phone: phoneSchema,
});

type FormSchema = z.infer<typeof FormSchema>;

export const Simple = () => {
  const [countryData, setCountryData] = React.useState<CountryData>();

  const form = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(data: FormSchema) {
    toast.success(
      `Phone: ${data.phone}${countryData ? ` (${countryData.name})` : ""}`
    );
  }

  return (
    <>
      <Card className="preview-card">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telephone</FormLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        value={field.value}
                        placeholder="Enter your number"
                        onCountryChange={setCountryData}
                      />
                    </FormControl>
                    <FormDescription>
                      Include country code (e.g. +44)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <ul className="list-disc list-inside text-xs">
            <li>
              <code>UK: 00447700000000</code>
            </li>
            <li>
              <code>NO: 004740000000</code>
            </li>
          </ul>
        </CardFooter>
      </Card>
      <Console>
        {countryData ? (
          <div className="w-full">
            <pre className="p-4">
              {JSON.stringify(
                {
                  country: countryData,
                  phoneNumber: form.getValues().phone,
                },
                null,
                2
              )}
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
