import { redirect } from "next/navigation";

/** Convenience route: Internet interest → Xfinity residential quote */
export default function InternetQuoteRedirect() {
  redirect("/quote/xfinity-residential?interest=Internet");
}
