"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

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
  FormLabel,
} from "@/components/ui/form";

const FormSchema = z.object({
  currency: z.string().min(1, { message: "Currency is required" }),
  value: z.number().min(1, { message: "Value is required" }),
});

type FormSchema = z.infer<typeof FormSchema>;

export const ExampleSlim = () => {
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
              <div className="space-y-2">
                <FormLabel
                  className={cn(
                    (form.formState.errors.currency ||
                      form.formState.errors.value) &&
                      "text-destructive"
                  )}
                >
                  Slim with input
                </FormLabel>
                <div className="flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name="currency"
                    render={({ field }) => (
                      <FormControl>
                        <CurrencySelect
                          onValueChange={field.onChange}
                          onCurrencySelect={handleCurrencySelect}
                          placeholder="Currency"
                          disabled={false}
                          currencies="invoicing"
                          variant="small"
                          {...field}
                        />
                      </FormControl>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="value"
                    render={({ field }) => (
                      <div className="relative w-full">
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
                    )}
                  />
                </div>
                <FormDescription>
                  This is a description of the form
                </FormDescription>
                {(form.formState.errors.currency ||
                  form.formState.errors.value) && (
                  <div className="text-[0.8rem] font-medium text-destructive">
                    {form.formState.errors.currency?.message && (
                      <p>{form.formState.errors.currency.message}</p>
                    )}
                    {form.formState.errors.value?.message && (
                      <p>{form.formState.errors.value.message}</p>
                    )}
                  </div>
                )}
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
