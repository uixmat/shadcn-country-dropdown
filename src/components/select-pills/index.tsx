"use client";

import React, { useState, useRef } from "react";

// import * as Portal from "@radix-ui/react-portal";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";

import { X } from "lucide-react";

interface DataItem {
  id?: string;
  value?: string;
  name: string;
}

interface SelectPillsProps {
  data: DataItem[];
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (selectedValues: string[]) => void;
}

export const SelectPills: React.FC<SelectPillsProps> = ({
  data,
  defaultValue = [],
  value,
  onValueChange,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedColors, setSelectedColors] = useState<string[]>(
    value || defaultValue
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const radioGroupRef = useRef<HTMLDivElement>(null);

  const filteredItems = data.filter(
    (item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedColors.includes(item.name)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setHighlightedIndex(-1);

    // Only open the popover if we have matching items that aren't already selected
    const hasUnselectedMatches = data.some(
      (item) =>
        item.name.toLowerCase().includes(newValue.toLowerCase()) &&
        !(value || selectedColors).includes(item.name)
    );

    setIsOpen(hasUnselectedMatches);

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (isOpen && filteredItems.length > 0) {
          // Move focus to first radio button
          const firstRadio = radioGroupRef.current?.querySelector(
            'input[type="radio"]'
          ) as HTMLElement;
          firstRadio?.focus();
          setHighlightedIndex(0);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const handleRadioKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (index < filteredItems.length - 1) {
          setHighlightedIndex(index + 1);
          const nextRadio = radioGroupRef.current?.querySelector(
            `input[type="radio"]:nth-of-type(${index + 2})`
          ) as HTMLElement;
          nextRadio?.focus();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (index > 0) {
          setHighlightedIndex(index - 1);
          const prevRadio = radioGroupRef.current?.querySelector(
            `input[type="radio"]:nth-of-type(${index})`
          ) as HTMLElement;
          prevRadio?.focus();
        } else {
          // If at first item, return focus to input
          inputRef.current?.focus();
          setHighlightedIndex(-1);
        }
        break;
      case "Enter":
        e.preventDefault();
        handleItemSelect(filteredItems[index]);
        inputRef.current?.focus();
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        inputRef.current?.focus();
        break;
    }
  };

  const handleItemSelect = (item: DataItem) => {
    const newSelectedColors = [...selectedColors, item.name];
    setSelectedColors(newSelectedColors);
    setInputValue("");
    setIsOpen(false);
    setHighlightedIndex(-1);
    if (onValueChange) {
      onValueChange(newSelectedColors);
    }
  };

  const handleColorRemove = (colorToRemove: string) => {
    const newSelectedColors = selectedColors.filter(
      (color) => color !== colorToRemove
    );
    setSelectedColors(newSelectedColors);
    if (onValueChange) {
      onValueChange(newSelectedColors);
    }
  };

  const handleOpenChange = (open: boolean) => {
    // Only allow external close events (like clicking outside)
    if (!open) {
      setIsOpen(false);
    }
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <div className="flex flex-wrap gap-2 min-h-12">
        {(value || selectedColors).map((color) => (
          <span
            key={color}
            className="flex items-center gap-1 px-2 py-1 text-sm bg-gray-100 rounded-full"
          >
            {color}
            <button
              onClick={() => handleColorRemove(color)}
              className="p-0.5 hover:bg-gray-200 rounded-full"
            >
              <X size={14} />
            </button>
          </span>
        ))}
        <PopoverAnchor asChild>
          <Input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a name..."
          />
        </PopoverAnchor>
      </div>

      <PopoverContent
        onFocusOutside={(e) => {
          // Prevent closing if focus is in the input
          if (e.target === inputRef.current) {
            e.preventDefault();
          }
        }}
        onInteractOutside={(e) => {
          // Prevent closing if interaction is with the input
          if (e.target === inputRef.current) {
            e.preventDefault();
          }
        }}
      >
        <div
          ref={radioGroupRef}
          role="radiogroup"
          aria-label="Color options"
          onKeyDown={(e) => handleRadioKeyDown(e, highlightedIndex)}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id || item.value || item.name}
              className={`flex items-center px-4 py-2 cursor-pointer ${
                highlightedIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                id={`color-${item.name}`}
                name="color-selection"
                value={item.name}
                className="sr-only"
                checked={highlightedIndex === index}
                onChange={() => handleItemSelect(item)}
              />
              <label
                htmlFor={`color-${item.name}`}
                className="flex items-center gap-2 w-full cursor-pointer"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.name }}
                  aria-hidden="true"
                />
                <span>{item.name}</span>
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
