"use client";

import PackageDetailsClient from "@/components/packages/PackageDetailsClient";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={<div>جاري التحميل...</div>}>
      <PackageDetailsClient />
    </Suspense>
  );
}