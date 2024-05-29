"use client"

import AOS from 'aos';
import Home from "./(root)/_components/pages/Home";
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // <main className="h-fit min-h-screen w-screen bg-gradient-to-t from-pink-300 to-pink-400">
    <main className="h-fit min-h-screen w-screen bg-zinc-950 -z-1">
      <span className="absolute w-screen h-screen bg-[linear-gradient(180deg,_rgba(192,38,211,0.2)_0%,_transparent_90%)]"/>
        <Home />
    </main>
  );
}
