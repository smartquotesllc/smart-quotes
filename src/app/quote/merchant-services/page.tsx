import { redirect } from "next/navigation";

/** Preserve quote route; send users to the approved Merchant Services page form. */
export default function MerchantQuoteRedirect() {
  redirect("/services/merchant-services#request-quote");
}
