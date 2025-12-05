import { useEffect, useRef } from "react";

export default function useTracking() {
  const ref = useRef(false);
const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Prevent double call in React Strict Mode
    if (ref.current) return;
    ref.current = true;

    // Detect refresh
    const isRefresh =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    // Count open tabs
    const tabCount = Number(localStorage.getItem("open_tabs") || 0);
    localStorage.setItem("open_tabs", tabCount + 1);

    let isNewVisit = false;
    const globalSessionActive = localStorage.getItem("global_session_active");

    // FIRST TAB of session → NEW VISIT
    if (!globalSessionActive && !isRefresh && tabCount === 0) {
      isNewVisit = true;
      localStorage.setItem("global_session_active", "true");
    }

    // If another tab opens → NOT NEW
    if (globalSessionActive && tabCount >= 1) {
      isNewVisit = false;
    }

    // Refresh → NOT NEW
    if (isRefresh) {
      isNewVisit = false;
    }

    // Send visit data to backend
    fetch(`${API}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        page: window.location.pathname,
        isNewVisit,
      }),
    });

    // Track closing tab
    window.addEventListener("pagehide", () => {
      const currentTabs = Number(localStorage.getItem("open_tabs") || 1) - 1;
      localStorage.setItem("open_tabs", currentTabs);

      // If ALL tabs closed → reset session
      if (currentTabs === 0) {
        localStorage.removeItem("global_session_active");
      }
    });
  }, []);
}
