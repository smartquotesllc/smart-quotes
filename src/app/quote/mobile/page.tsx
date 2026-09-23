import { redirect } from "next/navigation";

/** Convenience route: Mobile interest → Xfinity residential quote */
export default function MobileQuoteRedirect() {
  redirect("/quote/xfinity-residential?interest=Mobile");
}
