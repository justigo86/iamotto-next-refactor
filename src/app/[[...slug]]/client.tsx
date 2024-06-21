"use client";
// prerendered to HTML on server before sent to the client
import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../../App"), { ssr: false });

export function ClientOnly() {
  return <App />;
}
