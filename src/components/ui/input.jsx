"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef(
  (
    { className, name, type = "text", placeholder, value, onChange, ...props },
    ref
  ) => {
    // Для телефонного инпута: разрешаем только цифры и единственный '+' в начале
    if (type === "tel") {
      const onlyDigits = (str) => str.replace(/\D/g, "");

      // При изменении берём цифры и сохраняем '+' в начале, если он был введён
      const handleChange = (e) => {
        let val = e.target.value;
        const hasPlus = val.startsWith("+");
        const core = onlyDigits(val);
        const newValue = hasPlus ? "+" + core : core;
        onChange?.({ target: { name, value: newValue } });
      };

      const handleKeyDown = (e) => {
        const allowed = [
          "Backspace",
          "Delete",
          "ArrowLeft",
          "ArrowRight",
          "Tab",
        ];
        // Разрешаем навигацию и сочетания клавиш
        if (e.ctrlKey || e.metaKey || allowed.includes(e.key)) return;

        // Если ввели '+'
        if (e.key === "+") {
          // только если курсор в начале и '+' ещё нет
          const pos = e.target.selectionStart ?? 0;
          if (pos === 0 && !value.startsWith("+")) return;
          e.preventDefault();
        }

        // Разрешаем цифры
        if (/^\d$/.test(e.key)) return;

        // Всё остальное блокируем
        e.preventDefault();
      };

      return (
        <input
          ref={ref}
          name={name}
          type='tel'
          placeholder={placeholder || "+380123456789"}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputMode='tel'
          pattern='\+?\d*'
          {...props}
          className={cn(
            "w-full min-w-0 h-12 px-4 border-2 border-black bg-white text-base md:text-[18px] focus:outline-none",
            className
          )}
        />
      );
    }

    // Остальные типы без изменений
    return (
      <input
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        className={cn(
          "w-full min-w-0 h-12 px-4 border-2 border-black bg-white text-base md:text-[18px] focus:outline-none",
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";
