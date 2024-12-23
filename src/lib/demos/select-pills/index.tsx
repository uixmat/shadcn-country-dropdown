"use client";
import React from "react";
import { SelectPills } from "@/components/select-pills";

import { Console } from "@/components/console";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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

export const SelectPillsDemo = () => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([
    "red-500",
  ]);

  const handleValueChange = (newValues: string[]) => {
    setSelectedValues(newValues);
  };
  return (
    <>
      <Card className="preview-card">
        <CardHeader>
          <CardTitle>Select Pills</CardTitle>
          <CardDescription>
            Simple autocomplete search with multiple select pills and{" "}
            <code>defaultValue</code>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SelectPills
            data={tailwindColors}
            value={selectedValues}
            defaultValue={["red-500"]}
            onValueChange={handleValueChange}
            placeholder="Search colors eg. green-500"
          />
        </CardContent>
      </Card>
      <Console>
        {selectedValues.length > 0 ? (
          <div className="w-full">
            <pre className="p-4">{JSON.stringify(selectedValues, null, 2)}</pre>
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
