"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Currency, CurrencySelect } from "@/components/currency-select";
import { Console } from "@/components/console";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  currency: z.string().min(1, { message: "Currency is required" }),
  value: z.number().min(1, { message: "Value is required" }),
});

type FormSchema = z.infer<typeof FormSchema>;

export const Example = () => {
  const [selectedCurrency, setSelectedCurrency] =
    React.useState<Currency | null>(null);

  const form = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currency: "",
      value: 0,
    },
  });

  function onSubmit(data: FormSchema) {
    toast.success(`response: ${data.value} ${data.currency}`);
  }

  const handleCurrencySelect = (currency: Currency) => {
    console.log("Selected Currency Object:", currency);
    setSelectedCurrency(currency);
  };

  return (
    <>
      <Card className="preview-card">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select a currency</FormLabel>
                    <FormControl>
                      <CurrencySelect
                        onValueChange={field.onChange}
                        onCurrencySelect={handleCurrencySelect}
                        placeholder="Currency"
                        disabled={false}
                        currencies="custom"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      What currency are you using?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="value"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Value in {selectedCurrency?.name}</FormLabel>

                      <div className="relative">
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            disabled={!selectedCurrency}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                            className="pr-10"
                          />
                        </FormControl>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm">
                          {selectedCurrency?.symbol}
                        </span>
                      </div>

                      <FormDescription>
                        Should be more than zero
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Console>
        {form.formState.isValid ? (
          <div className="w-full">
            <pre className="p-4">
              {JSON.stringify(
                {
                  currency: form.getValues().currency,

                  value: form.getValues().value,
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
