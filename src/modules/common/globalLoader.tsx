import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import React from "react";

export default function GlobalLoader() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const showLoader = isFetching > 0 || isMutating > 0;

  if (!showLoader) return null;

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  };

  const spinnerStyle: React.CSSProperties = {
    width: "64px",
    height: "64px",
    border: "6px solid #C8EE44",
    borderTop: "6px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={overlayStyle}>
        <div style={spinnerStyle}></div>
      </div>
    </>
  );
}
