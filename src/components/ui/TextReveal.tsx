"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  variant?: "word" | "line" | "char";
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.05,
      delayChildren: delay,
    },
  }),
};

const containerCharVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.02,
      delayChildren: delay,
    },
  }),
};

const childVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function TextReveal({
  children,
  variant = "word",
  tag: Tag = "p",
  className = "",
  delay = 0,
}: TextRevealProps) {
  if (variant === "line") {
    const lines = children.split("\n").filter(Boolean);
    return (
      <Tag className={className}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          custom={delay}
          variants={containerVariants}
          style={{ display: "block" }}
        >
          {lines.map((line, i) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                variants={childVariants}
                style={{ display: "block" }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  if (variant === "char") {
    const chars = children.split("");
    return (
      <Tag className={className}>
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          custom={delay}
          variants={containerCharVariants}
          style={{ display: "inline-flex", flexWrap: "wrap" }}
          aria-label={children}
        >
          {chars.map((char, i) => (
            <span
              key={i}
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              <motion.span
                variants={childVariants}
                style={{ display: "inline-block" }}
                aria-hidden="true"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </Tag>
    );
  }

  // Default: word variant
  const words = children.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        custom={delay}
        variants={containerVariants}
        style={{ display: "inline-flex", flexWrap: "wrap" }}
        aria-label={children}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              marginRight: "0.25em",
            }}
          >
            <motion.span
              variants={childVariants}
              style={{ display: "inline-block" }}
              aria-hidden="true"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
