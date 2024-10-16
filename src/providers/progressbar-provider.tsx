"use client";

import { AppProgressBar } from "next-nprogress-bar";
import React, { Suspense } from "react";

const ProgressBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Suspense>
        <AppProgressBar
          height="4px"
          color="#dc2626"
          options={{ showSpinner: true }}
          shallowRouting
        />
      </Suspense>
    </>
  );
};

export default ProgressBar;
