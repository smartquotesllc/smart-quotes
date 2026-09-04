import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  id?: string;
  error?: string;
  optional?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  label,
  htmlFor,
  id,
  error,
  optional,
  hint,
  children,
  className,
}: FormFieldProps) {
  const fieldId = htmlFor ?? id;
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={fieldId} className="block text-sm font-medium text-ink">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-muted">(optional)</span>
        ) : null}
      </label>
      {children}
      {hint && !error ? <p className="text-xs text-muted">{hint}</p> : null}
      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClassName =
  "w-full rounded-xl border border-ink/10 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/70 outline-none transition-[border-color,box-shadow] focus:border-purple/40 focus:ring-2 focus:ring-purple/15";

export const fieldControlClass = inputClassName;
