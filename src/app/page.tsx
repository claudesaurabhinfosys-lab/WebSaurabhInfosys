import type { Metadata } from "next";
import HomePage from "@/components/stodio/home";

/* Title, description and Open Graph come from the root layout's defaults.
   The canonical is set here rather than in the layout, where every page
   without its own (the 404) would inherit the homepage canonical. */
export const metadata: Metadata = {
  alternates: { canonical: "https://saurabhinfosys.com" },
};

export default function Page() {
  return <HomePage />;
}
