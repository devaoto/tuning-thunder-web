"use client";

import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";

const parseLinks = (text: string) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  return text.split(linkRegex).map((part, index) => {
    if (index % 3 === 1) {
      return (
        <a
          key={index}
          href={text.split(linkRegex)[index + 1]}
          className="hover:text-primary underline"
        >
          {part}
        </a>
      );
    }
    if (index % 3 === 0) {
      return part;
    }
    return null;
  });
};

export default function FAQAccordion() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqItems = [
    {
      question: "What is Tuning Thunder?",
      answer:
        "Tuning Thunder is a powerful and versatile music bot for Discord. It allows you to play music from various sources, manage playlists, and interact with your server members in a fun and engaging way. Whether you're hosting a party or just chilling with friends, Tuning Thunder is here to provide the soundtrack.",
    },
    {
      question: "How do I get started with Tuning Thunder?",
      answer:
        "To get started with Tuning Thunder, you can [add the bot](https://discord.com/oauth2/authorize?client_id=1226642981763944588) directly from this website.",
    },
    {
      question: "What are the key features of Tuning Thunder?",
      answer:
        "Tuning Thunder's key features include playing music from different sources like Spotify, YouTube, SoundCloud etc. It can also send lyrics unlike other Music Bots and it's pretty fast.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      id="faq"
      className="w-full max-w-4xl mx-auto p-6"
    >
      <h2 className="text-2xl text-center font-bold mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{parseLinks(item.answer)}</AccordionContent>
          </AccordionItem>
        ))}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            How does the /player commands work?
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside">
              <li>
                /player channel (Allows you to set the channel for music
                requests)
              </li>
              <li>/player reset (Resets the variables to their default)</li>
              <li>
                /player control (Allows you to enable or disable the buttons for
                the music player for easy control)
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            How does the requests channel work?
          </AccordionTrigger>
          <AccordionContent>
            Once the channel is set, the main play command will be unavailable
            and song requests can only be done through the requests channel. To
            request a song you simply have to type the song name or url of the
            song in the channel to play it.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.section>
  );
}
