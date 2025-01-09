"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/Card";

interface TimelineItem {
  title: string;
  role: string;
  date: string;
  description: string;
  type: "work" | "education" | "achievement";
}

const experiences: TimelineItem[] = [
  {
    title: "India Space Lab",
    role: "Space Tech Intern",
    date: "Dec-2024 - Jan-2025",
    description:
      "Engaging in drone technology, astronomy training, and space entrepreneurship projects.",
    type: "work",
  },
  {
    title: "D2C Igniters Club",
    role: "Media & Photography Co-Lead",
    date: "2024 - Present",
    description:
      "Showcasing expertise in visual storytelling, event coverage, and creative content creation.",
    type: "work",
  },
  {
    title: "D2C Igniters Club",
    role: "Media & Photography Team Member",
    date: "2023 - 2024",
    description:
      "Assisting in capturing events, creating visual content, and supporting creative projects for the club.",
    type: "work",
  },
  {
    title: "VIT Bhopal University",
    role: "Bachelor's in Computer Science",
    date: "2022 - Present",
    description:
      "Specialized in Machine Learning, Java, Web Development, and Automation and with extra-curriculars.",
    type: "education",
  },
];

const getIcon = (type: TimelineItem["type"]) => {
  switch (type) {
    case "work":
      return <Briefcase className="w-8 h-8 text-white" />;
    case "education":
      return <GraduationCap className="w-8 h-8 text-white" />;
    case "achievement":
      return <Award className="w-8 h-8 text-white" />;
  }
};

export function ExperienceSection() {
  return (
    <div className="bg-[#0F172A] py-16 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="uppercase font-semibold tracking-widest text-sm bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            My Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mt-4">
            Experience
          </h2>
          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
            Discover how I contributed to meaningful roles and achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative ">
          {/* Static Vertical Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-emerald-400 to-sky-400/30"
            style={{
              width: "2px",
              top: window.innerWidth < 640 ? "-40px" : "0", // Adjust for small view
              bottom: 0,
            }}
          ></div>




          {/* Timeline Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50, // Always animate from bottom
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Move to its final position
              }}
              viewport={{
                once: false, // Trigger animation each time when scrolling down
                amount: 0.5, // Trigger when 50% of the element is in view
              }}
              transition={{
                duration: 0.3, // Reduced duration for faster animation
                delay: index * 0.15, // Slightly faster delay between items
              }}
              className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0
                ? "md:justify-start md:text-right"
                : "md:justify-end md:text-left"
                }`}
            >
              {/* Card Component */}
              <div
                className={`max-w-full md:w-5/12 md:{index % 2 === 0 ? "pr-8" : "pl-8"
                  }`}
              >
                <Card className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg bg-gradient-to-r from-emerald-300 to-sky-400 inline-block text-transparent bg-clip-text font-medium">
                    {experience.date}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mt-2">
                    {experience.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-medium mt-1">
                    {experience.role}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mt-2">
                    {experience.description}
                  </p>
                </Card>

              </div>

              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 sm:-mt-6 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-[#1E293B]">
                {getIcon(experience.type)}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
