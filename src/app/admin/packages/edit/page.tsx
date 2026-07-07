"use client";

import { Suspense } from "react";
import EditPackageClient from "./EditPackageClient";
export default function Page() {
  return (
    <Suspense fallback={<div className="p-8">جاري التحميل...</div>}>
      <EditPackageClient />
    </Suspense>
  );
}