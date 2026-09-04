import { cn } from "@/lib/utils";

type QuoteFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

/** Mockup-matching field: sentence-case label + asterisk for required */
export function QuoteField({
  id,
  label,
  required,
  optional,
  error,
  className,
  children,
}: QuoteFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-sq-ink">
        {label}
        {required ? <span className="text-sq-ink">*</span> : null}
        {optional ? (
          <span className="font-normal text-sq-gray"> (Optional)</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const quoteControlClass =
  "w-full rounded-md border border-[#cfd3dc] bg-white px-3 py-2.5 text-sm text-sq-ink placeholder:text-sq-gray/60 transition focus:border-sq-purple focus:outline-none focus:ring-2 focus:ring-sq-purple/20";

export const quoteSelectClass = cn(quoteControlClass, "appearance-none bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-9");

export const selectChevronStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%235e6472' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
} as const;
