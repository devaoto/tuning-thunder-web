"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cva } from "class-variance-authority";

type AnimationStart = "left" | "right" | "top" | "bottom";
type Position = "left" | "right" | "top" | "bottom" | "center";

interface SectionProps {
  label: string;
  description: string;
  animationStart: AnimationStart;
  imagePosition: Position;
  contentPosition: Position;
  image?: string;
}

const containerCVA = cva("container px-4 md:px-6 mx-auto flex items-center", {
  variants: {
    layout: {
      horizontal: "flex-col md:flex-row",
      vertical: "flex-col",
    },
    contentAlign: {
      left: "justify-start text-left",
      right: "justify-end text-right",
      top: "justify-start",
      bottom: "justify-end",
      center: "justify-center text-center",
    },
  },
  defaultVariants: {
    layout: "vertical",
    contentAlign: "center",
  },
});

const contentCVA = cva("w-full space-y-4", {
  variants: {
    order: {
      leftOrTop: "order-last md:w-1/2",
      rightOrBottom: "order-first md:w-1/2",
    },
  },
  defaultVariants: {
    order: "rightOrBottom",
  },
});

const imageCVA = cva("w-full mt-8 md:mt-0", {
  variants: {
    order: {
      leftOrTop: "order-first md:w-1/2",
      rightOrBottom: "order-last md:w-1/2",
    },
  },
  defaultVariants: {
    order: "rightOrBottom",
  },
});

export default function Section({
  label,
  description,
  animationStart,
  imagePosition,
  contentPosition,
  image,
}: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getAnimation = (start: AnimationStart) => {
    switch (start) {
      case "left":
        return { x: -50, opacity: 0 };
      case "right":
        return { x: 50, opacity: 0 };
      case "top":
        return { y: -50, opacity: 0 };
      case "bottom":
        return { y: 50, opacity: 0 };
    }
  };

  const isHorizontal = imagePosition === "left" || imagePosition === "right";

  return (
    <section className="py-12 md:py-24">
      <div
        ref={ref}
        className={containerCVA({
          layout: isHorizontal ? "horizontal" : "vertical",
          contentAlign: contentPosition,
        })}
      >
        <motion.div
          className={contentCVA({
            order:
              imagePosition === "left" || imagePosition === "top"
                ? "leftOrTop"
                : "rightOrBottom",
          })}
          initial={getAnimation(animationStart)}
          animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {label}
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        </motion.div>
        {image && (
          <motion.div
            className={imageCVA({
              order:
                imagePosition === "left" || imagePosition === "top"
                  ? "leftOrTop"
                  : "rightOrBottom",
            })}
            initial={getAnimation(animationStart)}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={image}
              alt={label}
              width={2000}
              height={2000}
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
