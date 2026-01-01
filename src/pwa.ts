import { registerSW } from "virtual:pwa-register";

window.addEventListener("load", () => {
  const pwaToast = document.querySelector<HTMLDivElement>("#pwa-toast")!;
  const pwaToastMessage =
    pwaToast.querySelector<HTMLSpanElement>("#toast-message")!;
  const pwaDismissBtn =
    pwaToast.querySelector<HTMLButtonElement>("#pwa-dismiss")!;
  let autoHideTimer: number | null = null;

  const hideToast = () => {
    pwaToast.classList.remove("show");
    if (autoHideTimer !== null) {
      clearTimeout(autoHideTimer);
      autoHideTimer = null;
    }
  };

  const showToast = () => {
    hideToast(); // clear any previous
    pwaToastMessage.innerHTML = "✨ SriGuide is ready for offline use";
    pwaToast.classList.add("show");

    autoHideTimer = window.setTimeout(hideToast, 3500);
  };

  pwaDismissBtn.addEventListener("click", hideToast);

  registerSW({
    immediate: true,
    onOfflineReady() {
      showToast();
      console.log("Sit back and relax, SriGuide is ready to work offline 😊");
    },
    onRegisteredSW(swUrl) {
      console.log("SW registered:", swUrl);
    },
    onRegisterError(error) {
      console.error("SW registration error:", error);
    },
  });
});
