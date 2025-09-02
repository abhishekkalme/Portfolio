"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Abhishek transformed our online presence completely. His technical expertise is unmatched. The website exceeded all our expectations.",
    project: "Shanaya Training Website",
    date: "Completed March 2024",
    author: "Sawrabh",
    role: "CEO, Shanaya Training",
    avatar: "S",
    avatarColor: "bg-blue-600",
  },
  {
    id: 2,
    quote:
      "Working with Abhishek was a game-changer. He understood our vision perfectly and executed it flawlessly with top-notch React skills.",
    project: "Blix Media Platform",
    date: "Completed January 2024",
    author: "Sanskar",
    role: "Founder, Blix Media",
    avatar: "S",
    avatarColor: "bg-green-600",
  },
  {
    id: 3,
    quote:
      "The AI background removal tool Abhishek built saved us hundreds of hours. His solution was both innovative and reliable.",
    project: "AI Background Remover",
    date: "Completed November 2023",
    author: "Abhishek Kalme",
    role: "CTO, TechSolutions Inc",
    avatar: "E",
    avatarColor: "bg-purple-600",
  },
];

export default function TestimonialsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);

  const allTestimonials = [...testimonials, ...testimonials];
  let animation: any;

  // Calculate marquee width
  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  // Animate marquee
  useEffect(() => {
    if (!width) return;

    const startAnimation = () => {
      animation = animate(x, -width, {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      });
    };

    startAnimation();

    const handleMouseEnter = () => animation.stop();
    const handleMouseLeave = () => startAnimation();

    const marqueeEl = marqueeRef.current;
    marqueeEl?.addEventListener("mouseenter", handleMouseEnter);
    marqueeEl?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.stop();
      marqueeEl?.removeEventListener("mouseenter", handleMouseEnter);
      marqueeEl?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [width]);

  // Card stagger animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  const handleDragEnd = () => {
    // Resume marquee smoothly after drag/swipe
    animate(x, -width, { duration: 15, repeat: Infinity, ease: "linear" });
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 rounded-xl bg-slate-800/50"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl font-bold mb-4 text-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client <span className="text-blue-400">Testimonials</span>
        </motion.h2>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear what industry leaders say about working with me
        </motion.p>
      </div>

      {/* Marquee */}
      <motion.div
        ref={marqueeRef}
        className="flex gap-6 cursor-grab"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
        onDragEnd={handleDragEnd}
      >
        {allTestimonials.map(
          (
            { id, quote, project, date, author, role, avatar, avatarColor },
            index
          ) => (
            <motion.div
              key={id + "-" + index}
              className="glass-card p-6 rounded-xl w-80 flex-shrink-0 hover:scale-105 transition-transform duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <blockquote className="text-gray-300 mb-4 leading-relaxed break-words">
                &quot;{quote}&quot;
              </blockquote>
              <div className="text-sm text-blue-400 mb-4">
                <div className="font-semibold">{project}</div>
                <div className="text-gray-500">{date}</div>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white font-semibold`}
                >
                  {avatar}
                </div>
                <div>
                  <div className="font-semibold">{author}</div>
                  <div className="text-sm text-gray-400">{role}</div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
}
