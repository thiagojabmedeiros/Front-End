"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./components/computer"), { ssr: false });

export default function Home() {
  return (
    <main>
      <div>
        <Scene />
      </div>
    </main>
  );
}