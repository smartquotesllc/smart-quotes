import { cn } from "@/lib/utils";

type FormFieldProps = {
  id?: string;
  htmlFor?: string;
  label: string;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
};

export function FormField({
  id,
  htmlFor,
  label,
  children,
  error,
  hint,
  optional,
  className,
}: FormFieldProps) {
  const fieldId = htmlFor ?? id;
  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={fieldId}
        className="block font-heading text-xs font-bold uppercase tracking-[0.12em] text-sq-ink"
      >
        {label}
        {optional ? (
          <span className="ml-1 font-normal normal-case tracking-normal text-sq-gray">
            (optional)
          </span>
        ) : null}
      </label>
      {children}
      {hint && !error ? <p className="text-xs text-sq-gray">{hint}</p> : null}
      {error ? (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const fieldControlClass =
  "w-full rounded-md border border-sq-border bg-white px-4 py-3 text-sm text-sq-ink placeholder:text-sq-gray/70 transition focus:border-sq-royal focus:outline-none focus:ring-2 focus:ring-sq-royal/20";

export const inputClassName = fieldControlClass;
