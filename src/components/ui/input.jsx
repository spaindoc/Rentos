"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef(
  (
    { className, name, type = "text", placeholder, value, onChange, ...props },
    ref
  ) => {
    const prefix = "+ ";
    const onlyDigits = (str) => str.replace(/\D/g, "");

    if (type === "tel") {
      // Убираем всё, кроме цифр, из текущего value
      const raw = (value || "").startsWith(prefix)
        ? value.slice(prefix.length)
        : value || "";
      const digits = onlyDigits(raw);
      const displayValue = digits ? `${prefix}${digits}` : "";

      // При любом изменении (ввод/удаление) очищаем от букв
      const handleChange = (e) => {
        let val = e.target.value;
        if (!val.startsWith(prefix)) val = prefix + val;
        const rest = onlyDigits(val.slice(prefix.length));
        onChange?.({ target: { name, value: prefix + rest } });
      };

      // Запрещаем ввод любых символов, кроме цифр
      const handleBeforeInput = (e) => {
        // e.data содержит то, что пытаются вставить
        if (e.data && !/^\d$/.test(e.data)) {
          e.preventDefault();
        }
      };

      // При вставке через Ctrl+V/меню — выдираем только цифры
      const handlePaste = (e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text");
        const digits = onlyDigits(pasted);
        if (digits) {
          onChange?.({
            target: { name, value: prefix + onlyDigits(raw + digits) },
          });
        }
      };

      // Не даём удалить префикс
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
        // всё, что не цифра, блокируем
        if (!/^\d$/.test(e.key)) {
          e.preventDefault();
        }
      };

      // При фокусе ставим курсор в конец
      const handleFocus = (e) => {
        setTimeout(() => {
          const len = (e.target.value ?? "").length;
          e.target.setSelectionRange(len, len);
        }, 0);
      };

      return (
        <input
          ref={ref}
          name={name}
          type='tel'
          placeholder={placeholder || "+ 000 00 000 00 00"}
          value={displayValue}
          onChange={handleChange}
          onBeforeInput={handleBeforeInput}
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          inputMode='numeric'
          pattern='\d*'
          {...props}
          className={cn(
            "w-full min-w-0 h-12 px-4 border-2 border-black bg-white text-base md:text-[18px] focus:outline-none",
            className
          )}
        />
      );
    }

    // Для остальных типов — без изменений
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
