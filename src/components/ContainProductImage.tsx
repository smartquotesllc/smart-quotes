import Image from "next/image";
import { cn } from "@/lib/utils";

type ContainProductImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  frameClassName?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
};

/**
 * Renders approved product/service assets without cropping.
 * Container grows with the image; object-fit: contain preserves the full subject.
 */
export function ContainProductImage({
  src,
  alt,
  width,
  height,
  className,
  frameClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  quality = 92,
}: ContainProductImageProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center bg-[#f3f6fb] p-3 sm:p-4",
        frameClassName,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={cn("h-auto w-full object-contain", className)}
      />
    </div>
  );
}
