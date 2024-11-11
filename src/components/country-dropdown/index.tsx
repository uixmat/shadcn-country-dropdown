"use client";
import React, { useCallback, useState, forwardRef, useEffect } from "react";

// shadcn
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// utils
import { cn } from "@/lib/utils";

// assets
import { ChevronDown, ChevronsUpDown, CheckIcon, Globe } from "lucide-react";
import { CircleFlag } from "react-circle-flags";

// data
import { countries } from "country-data-list";

// Change interface to type and update for multiple selection
export type Country = {
  alpha2: string;
  alpha3: string;
  countryCallingCodes: string[];
  currencies: string[];
  emoji?: string;
  ioc: string;
  languages: string[];
  name: string;
  status: string;
};

type BaseCountryDropdownProps = {
  options?: Country[];
  disabled?: boolean;
  placeholder?: string;
  slim?: boolean;
  inline?: boolean;
  className?: string;
};

type SingleCountryDropdownProps = BaseCountryDropdownProps & {
  multiple?: false;
  onChange?: (country: Country) => void;
  defaultValue?: string;
};

type MultipleCountryDropdownProps = BaseCountryDropdownProps & {
  multiple: true;
  onChange: (countries: Country[]) => void;
  defaultValue?: string[];
};

type CountryDropdownProps =
  | SingleCountryDropdownProps
  | MultipleCountryDropdownProps;

const CountryDropdownComponent = (
  {
    options = countries.all.filter(
      (country: Country) =>
        country.emoji && country.status !== "deleted" && country.ioc !== "PRK"
    ),
    onChange,
    defaultValue,
    disabled = false,
    placeholder = "Select a country",
    slim = false,
    inline = false,
    multiple = false,
    className,
    ...props
  }: CountryDropdownProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const [open, setOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    // Skip if no defaultValue
    if (!defaultValue) {
      if (selectedCountries.length > 0) {
        setSelectedCountries([]);
      }
      return;
    }

    // For multiple selection
    if (multiple && Array.isArray(defaultValue)) {
      const currentValues = selectedCountries.map((c) => c.alpha3);
      const hasChanges =
        defaultValue.length !== currentValues.length ||
        !defaultValue.every((v) => currentValues.includes(v));

      if (hasChanges) {
        const initialCountries = options.filter((country) =>
          defaultValue.includes(country.alpha3)
        );
        setSelectedCountries(initialCountries);
      }
    }
    // For single selection
    else if (!multiple && typeof defaultValue === "string") {
      const currentValue = selectedCountries[0]?.alpha3;
      if (defaultValue !== currentValue) {
        const initialCountry = options.find(
          (country) => country.alpha3 === defaultValue
        );
        setSelectedCountries(initialCountry ? [initialCountry] : []);
      }
    }
  }, [defaultValue, options, multiple]);

  const handleSelect = useCallback(
    (country: Country) => {
      if (multiple) {
        const newSelection = selectedCountries.some(
          (c) => c.alpha3 === country.alpha3
        )
          ? selectedCountries.filter((c) => c.alpha3 !== country.alpha3)
          : [...selectedCountries, country];

        setSelectedCountries(newSelection);
        (onChange as MultipleCountryDropdownProps["onChange"])?.(newSelection);
      } else {
        setSelectedCountries([country]);
        (onChange as SingleCountryDropdownProps["onChange"])?.(country);
        setOpen(false);
      }
    },
    [onChange, multiple, selectedCountries]
  );

  const triggerClasses = cn(
    "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 hover:bg-secondary/80",
    slim === true && "gap-1 w-min",
    inline && "rounded-r-none border-r-0 gap-1 pr-1 w-min",
    className
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        ref={ref}
        className={triggerClasses}
        disabled={disabled}
        {...props}
      >
        {selectedCountries.length > 0 ? (
          <div className="flex items-center flex-grow gap-2 overflow-hidden">
            {multiple ? (
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedCountries.length} selected
              </span>
            ) : (
              <>
                <div className="inline-flex items-center justify-center w-4 h-4 shrink-0 overflow-hidden rounded-full">
                  <CircleFlag
                    countryCode={selectedCountries[0].alpha2.toLowerCase()}
                    height={16}
                  />
                </div>
                {slim === false && !inline && (
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {selectedCountries[0].name}
                  </span>
                )}
              </>
            )}
          </div>
        ) : (
          <span className="flex items-center gap-2">
            {inline || slim ? <Globe size={16} /> : placeholder}
          </span>
        )}

        {!inline ? (
          <ChevronDown size={16} />
        ) : (
          <ChevronsUpDown size={16} className="text-muted-foreground" />
        )}
      </PopoverTrigger>
      <PopoverContent
        collisionPadding={10}
        side="bottom"
        className="min-w-[--radix-popper-anchor-width] p-0"
      >
        <Command className="w-full max-h-[200px] sm:max-h-[270px]">
          <CommandList>
            <div className="sticky top-0 z-10 bg-popover">
              <CommandInput placeholder="Search country..." />
            </div>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.name)
                .map((option, key: number) => (
                  <CommandItem
                    className="flex items-center w-full gap-2"
                    key={key}
                    onSelect={() => handleSelect(option)}
                  >
                    <div className="flex flex-grow space-x-2 overflow-hidden">
                      <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                        <CircleFlag
                          countryCode={option.alpha2.toLowerCase()}
                          height={20}
                        />
                      </div>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {option.name}
                      </span>
                    </div>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4 shrink-0",
                        selectedCountries.some((c) => c.name === option.name)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

CountryDropdownComponent.displayName = "CountryDropdownComponent";

export const CountryDropdown = forwardRef(CountryDropdownComponent);
