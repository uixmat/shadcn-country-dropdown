"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { SelectPills } from "@/components/select-pills";
import { Console } from "@/components/console";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const tailwindColors = [
  { id: "1", name: "red-500" },
  { id: "2", name: "blue-500" },
  { id: "3", name: "green-500" },
  { id: "4", name: "yellow-500" },
  { id: "5", name: "purple-500" },
  { id: "6", name: "pink-500" },
  { id: "7", name: "indigo-500" },
  { id: "8", name: "gray-500" },
  { id: "9", name: "orange-500" },
  { id: "10", name: "teal-500" },
  { id: "11", name: "cyan-500" },
  { id: "12", name: "emerald-500" },
  { id: "13", name: "violet-500" },
  { id: "14", name: "fuchsia-500" },
  { id: "15", name: "rose-500" },
  { id: "16", name: "amber-500" },
  { id: "17", name: "lime-500" },
  { id: "18", name: "sky-500" },
  { id: "19", name: "slate-500" },
  { id: "20", name: "zinc-500" },
];

const FormSchema = z.object({
  colors: z.array(z.string()).min(1, "Please select at least one color"),
});

type FormSchema = z.infer<typeof FormSchema>;

export const PillsFormDemo = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      colors: ["red-500"],
    },
  });

  function onSubmit(data: FormSchema) {
    toast.success(`Selected colors: ${data.colors.join(", ")}`);
  }

  return (
    <>
      <Card className="preview-card">
        <CardHeader>
          <CardTitle>Select Pills Form</CardTitle>
          <CardDescription>
            Form validation with multiple select pills and{" "}
            <code>defaultValue</code>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="colors"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tailwind colors</FormLabel>
                    <FormControl>
                      <SelectPills
                        data={tailwindColors}
                        value={field.value}
                        onValueChange={field.onChange}
                        placeholder="Search colors eg. orange-500"
                      />
                    </FormControl>
                    <FormDescription>
                      Select one or more Tailwind colors
                    </FormDescription>
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
        {form.formState.isValid ? (
          <div className="w-full">
            <pre className="p-4">
              {JSON.stringify(form.getValues(), null, 2)}
            </pre>
          </div>
        ) : (
          <div className="flex items-center text-sm text-zinc-400 font-mono">
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
