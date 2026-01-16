"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "next/navigation";

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  error?: string;
  touched?: boolean;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
}

const CustomSelect = ({
  options,
  placeholder = "Select an option",
  label,
  value,
  onValueChange,
  name,
  error,
  touched,
  disabled = false,
  defaultValue,
}: CustomSelectProps) => {
  const params = useParams();
  const currentLocale = params.lang;

  return (
    <div className="w-full">
      <Select
        value={value}
        onValueChange={onValueChange}
        name={name}
        disabled={disabled}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          className={`w-full py-7  rounded-none border-gray-300 shadow-none ${
            currentLocale == "ar" ? "flex-row-reverse" : "flex-row"
          } ${touched && error ? "border-red-500" : ""}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          className="w-full min-w-[var(--radix-select-trigger-width)]"
          position="popper"
          sideOffset={5}
        >
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {touched && error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default CustomSelect;
