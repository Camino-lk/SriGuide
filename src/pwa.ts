import { registerSW } from "virtual:pwa-register";

window.addEventListener("DOMContentLoaded", () => {
  registerSW({
    immediate: true,
    onOfflineReady() {
      window.dispatchEvent(new Event("pwa-offline-ready"));
      console.log("Sit back and relax - SriGuide is ready to work offline 😊");
    },
    onRegisteredSW(swUrl) {
      console.log("SW registered:", swUrl);
    },
    onRegisterError(error) {
      console.error("SW registration error:", error);
    },
  });
});

window.addEventListener("pwa-offline-ready", () => {
  const pwaToast = document.querySelector<HTMLDivElement>("#pwa-toast");
  if (!pwaToast) return;
  const pwaToastMessage =
    pwaToast.querySelector<HTMLSpanElement>("#toast-message");
  const pwaDismissBtn =
    pwaToast.querySelector<HTMLButtonElement>("#pwa-dismiss");
  let autoHideTimer: number | null = null;
  if (!pwaToastMessage || !pwaDismissBtn) return;

  const hideToast = () => {
    pwaToast.classList.remove("show");
    if (autoHideTimer !== null) {
      clearTimeout(autoHideTimer);
      autoHideTimer = null;
    }
  };

  const showToast = () => {
    hideToast(); // clear any previous
    pwaToastMessage.textContent = "✨ SriGuide is ready for offline use";
    pwaToast.classList.add("show");

    autoHideTimer = window.setTimeout(hideToast, 3500);
  };

  pwaDismissBtn.addEventListener("click", hideToast, { once: true });
  showToast();
});
