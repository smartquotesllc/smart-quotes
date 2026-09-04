import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy Policy for Smart Quotes LLC." };

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-sq-ink">Privacy Policy</h1>
        <div className="mt-8 space-y-4 text-sq-gray">
          <p>This page is a placeholder Privacy Policy for Smart Quotes LLC. Replace with counsel-approved language before launch.</p>
          <p>Information collected through quote forms (name, phone, email, service selection, and optional notes) is used to respond to your request, route leads, and operate related customer communications — including optional vacation-stay offer messages when applicable.</p>
          <p>Do not submit sensitive information that is not required for a quote. API keys and secrets are never embedded in frontend code.</p>
        </div>
      </div>
    </section>
  );
}
