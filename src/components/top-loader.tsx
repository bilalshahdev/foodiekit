"use client";

import NextTopLoader from "nextjs-toploader";

const TopLoader = () => {
  return (
    <NextTopLoader
      color="oklch(69.6% 0.17 162.48)"  // Using the oklch color format directly
      initialPosition={0.08}
      crawlSpeed={200}
      height={2}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
    />
  );
};

export default TopLoader;
