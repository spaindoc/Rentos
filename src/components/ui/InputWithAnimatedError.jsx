import { AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from ".";

export function InputWithAnimatedError({
  field,
  error,
  type,
  placeholder,
  message,
}) {
  return (
    <div className='relative group mb-3'>
      <Input
        {...field}
        type={type}
        placeholder={placeholder}
        className={`pr-10 ${error ? "border-red-600" : ""}`}
      />

      {error && (
        <>
          <AlertCircle className='absolute right-3 top-1/2 -translate-y-1/2 text-red-600 w-5 h-5' />
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className='absolute right-10 top-1/2 -translate-y-1/2 z-50 bg-red-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap'
            >
              {message}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
