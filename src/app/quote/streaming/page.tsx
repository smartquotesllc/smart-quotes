import { redirect } from "next/navigation";

/** Convenience route: Streaming interest → Xfinity residential quote */
export default function StreamingQuoteRedirect() {
  redirect("/quote/xfinity-residential?interest=Streaming");
}
