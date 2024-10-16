"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center px-4 py-8 space-y-8 text-center lg:flex-row lg:space-y-0 lg:space-x-8 lg:text-left">
      <motion.div
        className="flex flex-col items-center lg:items-start"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="max-w-full lg:max-w-[700px] text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Ultimate Music Bot for Your Discord Server
        </motion.h1>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button asChild className="w-full sm:w-auto">
            <Link href="https://discord.com/oauth2/authorize?client_id=1226642981763944588">
              Invite Now
            </Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative w-full max-w-[300px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="select-none">
          <motion.div className="relative rounded-full z-10 shadow-lg shadow-primary">
            <Image
              className="rounded-full"
              draggable={false}
              src="/music-bot.png"
              alt="Bot logo"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
