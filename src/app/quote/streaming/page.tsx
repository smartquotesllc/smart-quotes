import { redirect } from "next/navigation";

/** Convenience route: Streaming / TV interest → Xfinity residential quote */
export default function StreamingQuoteRedirect() {
  redirect(
    "/quote/xfinity-residential?interest=" +
      encodeURIComponent("TV / Entertainment"),
  );
}
