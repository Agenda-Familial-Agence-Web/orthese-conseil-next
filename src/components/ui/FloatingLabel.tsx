"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingLabelProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function FloatingLabel({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  value,
  onChange,
  error,
}: FloatingLabelProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;
  const isValid = value.length > 0 && !error;

  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="relative w-full">
      <div className="relative">
        <Tag
          id={name}
          name={name}
          type={textarea ? undefined : type}
          value={value}
          required={required}
          rows={textarea ? 4 : undefined}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`peer w-full bg-transparent pt-6 pb-2 text-text-primary outline-none resize-none border-b-2 transition-colors duration-300 ${
            error
              ? "border-red-500"
              : focused
                ? "border-primary"
                : "border-gray-300"
          }`}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />

        {/* Floating label */}
        <motion.label
          htmlFor={name}
          className="absolute left-0 pointer-events-none origin-left"
          initial={false}
          animate={{
            y: isActive ? 0 : 20,
            scale: isActive ? 0.75 : 1,
            color: error
              ? "#ef4444"
              : isActive
                ? "#2E6DB4"
                : "#8b95a1",
          }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
          {required && " *"}
        </motion.label>

        {/* Animated bottom border (expands from center) */}
        <motion.div
          className="absolute bottom-0 left-1/2 h-[2px] bg-primary"
          initial={false}
          animate={{
            width: focused ? "100%" : "0%",
            x: focused ? "-50%" : "0%",
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Valid checkmark */}
        {isValid && !focused && (
          <motion.svg
            className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <polyline points="20 6 9 17 4 12" />
          </motion.svg>
        )}
      </div>

      {/* Error message */}
      {error && (
        <motion.p
          id={`${name}-error`}
          className="mt-1 text-sm text-red-500"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
