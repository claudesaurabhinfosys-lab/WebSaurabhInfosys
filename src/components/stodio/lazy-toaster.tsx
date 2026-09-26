"use client";

import dynamic from "next/dynamic";
import { loadSonner } from "./lib/toast";

/* The toast host, fetched after hydration instead of in the first-load
   bundle. Toasts only follow a form submit, by which point this has long
   since arrived. */
const Toaster = dynamic(() => loadSonner().then((module) => module.Toaster), { ssr: false });

export default function LazyToaster() {
  return <Toaster position="bottom-right" richColors />;
}
