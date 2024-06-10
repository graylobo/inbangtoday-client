"use client";
import { useUserStore } from "@/store/user/store";
import React from "react";

function Page() {
  const switchThemeMode = useUserStore((state) => state?.switchThemeMode);

  return (
    <div>
      <button
        onClick={() => {
          switchThemeMode("light");
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default Page;
