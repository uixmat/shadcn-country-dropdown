"use client";
import React from "react";

import { CountryDropdown } from ".";

export const ExampleSlim = () => {
  return (
    <div className="flex flex-col gap-4">
      <CountryDropdown
        placeholder="Select country"
        defaultValue="USA"
        onChange={() => {}}
        slim
      />
    </div>
  );
};
