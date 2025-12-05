import { useEffect, useRef } from "react";

export default function useTracking() {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    // Detect refresh
    const isRefresh =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    // Track open tabs
    const tabCount = Number(localStorage.getItem("open_tabs") || 0);
    localStorage.setItem("open_tabs", tabCount + 1);

    let isNewVisit = false;
    const globalSessionActive = localStorage.getItem("global_session_active");

    // FIRST TAB → NEW VISIT
    if (!globalSessionActive && !isRefresh && tabCount === 0) {
      isNewVisit = true;
      localStorage.setItem("global_session_active", "true");
    }

    // More than one tab → NOT new visit
    if (globalSessionActive && tabCount >= 1) {
      isNewVisit = false;
    }

    // Refresh → NOT new
    if (isRefresh) {
      isNewVisit = false;
    }

    // Send tracking WITHOUT GPS
    fetch("http://localhost:5000/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        page: window.location.pathname,
        isNewVisit,
      }),
    });

    // On tab close → reduce tab count
    window.addEventListener("pagehide", () => {
      const currentTabs = Number(localStorage.getItem("open_tabs") || 1) - 1;
      localStorage.setItem("open_tabs", currentTabs);

      if (currentTabs === 0) {
        localStorage.removeItem("global_session_active");
      }
    });
  }, []);
}
