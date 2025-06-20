"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef(
  (
    { className, name, type = "text", placeholder, value, onChange, ...props },
    ref
  ) => {
    const prefix = "+380 ";

    const onlyDigits = (str) => str.replace(/\D/g, "");

    if (type === "tel") {
      // Извлекаем чистые цифры из текущего value (без префикса)
      const rawDigits = onlyDigits(
        (value || "").startsWith(prefix)
          ? value.slice(prefix.length)
          : value || ""
      );

      // Если value пустой — displayValue пустой, чтобы отобразился placeholder
      // Иначе — соберём префикс + цифры
      const displayValue = rawDigits.length > 0 ? prefix + rawDigits : "";

      const handleChange = (e) => {
        let val = e.target.value;

        // Добавляем префикс, если его нет
        if (!val.startsWith(prefix)) {
          val = prefix + val;
        }

        // Оставляем только цифры после префикса
        const rest = onlyDigits(val.slice(prefix.length));
        onChange?.({ target: { name, value: prefix + rest } });
      };

      const handleKeyDown = (e) => {
        const navKeys = [
          "ArrowLeft",
          "ArrowRight",
          "Home",
          "End",
          "Tab",
          "Backspace",
          "Delete",
        ];

        if (navKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
          const pos = e.target.selectionStart ?? 0;
          if (
            (e.key === "Backspace" && pos <= prefix.length) ||
            (e.key === "Delete" && pos < prefix.length)
          ) {
            e.preventDefault();
          }
          return;
        }

        if (!/^\d$/.test(e.key)) {
          e.preventDefault();
        }
      };

      const handleFocus = (e) => {
        // если нет значения — курсор в начало (там placeholder виден)
        setTimeout(() => {
          const pos = (e.target.value ?? "").length;
          e.target.setSelectionRange(pos, pos);
        }, 0);
      };

      return (
        <input
          ref={ref}
          name={name}
          type='tel'
          placeholder={placeholder || "+380 00 000 00 00"}
          {...props}
          value={displayValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          className={cn(
            "w-full min-w-0 h-12",
            "px-4",
            "border-2 border-black",
            "bg-white text-base md:text-[18px] focus:outline-none",
            className
          )}
        />
      );
    }

    return (
      <input
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full min-w-0 h-12",
          "px-4",
          "border-2 border-black",
          "bg-white text-base md:text-[18px] focus:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
