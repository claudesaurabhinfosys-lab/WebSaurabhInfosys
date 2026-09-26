/**
 * sonner, loaded on first use. A toast only ever follows a form submit, so
 * there is no reason for the library to sit in the bundle every page loads —
 * the footer newsletter form alone put it there site-wide.
 *
 * Every consumer goes through this one import so the bundler emits a single
 * chunk: the <Toaster> host and `toast()` must share one module instance, or
 * toasts are queued into a store the host never reads.
 */
export function loadSonner() {
  return import("sonner");
}

export function loadToast() {
  return loadSonner().then((module) => module.toast);
}
