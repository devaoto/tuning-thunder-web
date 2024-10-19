"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./theme-toggle";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default function NavBar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const navItems = ["Commands", "Premium", "Policy"];

  const NavItems = ({ mobile = false }) => (
    <div className={`flex ${mobile ? "flex-col space-y-4" : "space-x-6"}`}>
      {navItems.map((item) => (
        <motion.a
          href={`/${item.toLowerCase()}`}
          key={item}
          className="relative cursor-pointer hover:text-primary"
        >
          <div
            className="text-foreground transition-colors duration-200"
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => mobile && setIsOpen(false)}
          >
            {item}
          </div>
          {!mobile && hovered === item && (
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-md filter blur-md"
              layoutId="navBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.a>
      ))}
    </div>
  );

  return (
    <nav className="bg-background p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">Tune</span>
            <span className="text-foreground">Music</span>
          </motion.div>
        </Link>
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col h-full">
                <div className="flex-1 py-6">
                  <NavItems mobile />
                </div>
                <div className="py-6">
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    Login
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center space-x-8">
            <NavItems />
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <Button variant="outline" className="font-semibold">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
