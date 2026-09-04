import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{ lead?: string; service?: string; ref?: string }>;
}

export default async function ThankYouRedirectPage({ searchParams }: Props) {
  const params = await searchParams;
  const q = new URLSearchParams();
  const ref = params.ref ?? params.lead?.slice(0, 8);
  if (ref) q.set("ref", ref);
  if (params.service) q.set("service", params.service);
  q.set("offer", "1");
  redirect(`/confirmation?${q.toString()}`);
}
