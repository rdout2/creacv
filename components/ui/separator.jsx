"use client"

import React from "react";
import { cn } from "@/lib/utils";

export function Separator({ className, orientation = "horizontal" }) {
  return (
    <div
      className={cn(
        "bg-zinc-200",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
    />
  );
} 