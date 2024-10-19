"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
      {commands.map((command) => (
        <li key={command.name} className="flex items-start">
          <span className="font-mono text-xs sm:text-sm bg-primary/10 text-primary px-1 py-0.5 sm:px-2 sm:py-1 rounded mr-2">
            /{command.name}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {command.description}
          </span>
        </li>
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

  return (
    <div className="flex flex-col h-screen">
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
            <div className="space-y-6">
              <section id="general">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  General Commands
                </h2>
                <CommandList commands={generalCommands} />
              </section>
              <Separator />
              <section id="music">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Music Commands
                </h2>
                <CommandList commands={musicCommands} />
              </section>
              <Separator />
              <section id="filter">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Filter Commands
                </h2>
                <CommandList commands={filterCommands} />
              </section>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
