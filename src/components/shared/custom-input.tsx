import React from "react";

interface InputProps {
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string;
  touched?: boolean;
  className?: string;
  isSelect?: boolean;
}

const CustomInput = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  className = "",
  isSelect = false,
  ...props
}: InputProps) => {
  const baseClasses =
    "w-full px-4 py-4 text-sm bg-transparent border border-gray-300  placeholder-gray-400 focus:outline-none focus:border-blue-600 ";

  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={combinedClasses}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      {touched && error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default CustomInput;
