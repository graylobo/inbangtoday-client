"use client";
import { useUserStore } from "@/store/user/store";
import React from "react";

function Page() {
  const { count, increment, age, ageIncrement } = useUserStore();
  return (
    <div>
      광상
      <div>카운트:{count}</div>
      <button
        onClick={() => {
          increment();
        }}
      >
        클릭
      </button>
      <div>카운트:{age}</div>
      <button
        onClick={() => {
          ageIncrement();
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default Page;
