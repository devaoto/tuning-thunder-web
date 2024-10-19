"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export type Command = {
  name: string;
  description: string;
};

export default function CommandsList({
  generalCommands = [],
  musicCommands = [],
  filterCommands = [],
}: {
  generalCommands?: Command[];
  musicCommands?: Command[];
  filterCommands?: Command[];
}) {
  const [activeSection, setActiveSection] = useState("general");

  const CommandList = ({ commands }: { commands: Command[] }) => (
    <ul className="space-y-2">
      {commands.map((command, index) => (
        <motion.li
          key={command.name}
          className="flex items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <span className="font-mono text-xs sm:text-sm bg-primary/10 text-primary px-1 py-0.5 sm:px-2 sm:py-1 rounded mr-2">
            /{command.name}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {command.description}
          </span>
        </motion.li>
      ))}
    </ul>
  );

  const NavContent = () => (
    <nav className="p-4 space-y-2">
      <h2 className="text-lg font-semibold mb-2">Bot Commands</h2>
      <a
        href="#general"
        className={`block p-2 rounded ${
          activeSection === "general"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
        onClick={() => setActiveSection("general")}
      >
        General Commands
      </a>
      <a
        href="#music"
        className={`block p-2 rounded ${
          activeSection === "music"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
        onClick={() => setActiveSection("music")}
      >
        Music Commands
      </a>
      <a
        href="#filter"
        className={`block p-2 rounded ${
          activeSection === "filter"
            ? "bg-primary text-primary-foreground"
            : "hover:bg-muted"
        }`}
        onClick={() => setActiveSection("filter")}
      >
        Filter Commands
      </a>
    </nav>
  );

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      className="flex flex-col h-screen"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <header className="border-b p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold">Bot Commands</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <div>...</div>
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <NavContent />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r hidden md:block">
          <ScrollArea className="h-full">
            <NavContent />
          </ScrollArea>
        </aside>
        <main className="flex-1 p-4 sm:p-6">
          <ScrollArea className="h-full">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.section
                id="general"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  General Commands
                </h2>
                <CommandList commands={generalCommands} />
              </motion.section>
              <Separator />
              <motion.section
                id="music"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Music Commands
                </h2>
                <CommandList commands={musicCommands} />
              </motion.section>
              <Separator />
              <motion.section
                id="filter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Filter Commands
                </h2>
                <CommandList commands={filterCommands} />
              </motion.section>
            </motion.div>
          </ScrollArea>
        </main>
      </div>
    </motion.div>
  );
}
