"use client";

import { Fade } from "react-awesome-reveal";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaFigma, FaNodeJs, FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss, SiDaisyui, SiMongodb, SiExpress, SiPostman, SiSlack, SiJira,
  SiBootstrap, SiFirebase, SiMysql, SiTypescript, SiOpenai, SiGoogle, SiClaude,
  SiNextdotjs, SiGooglegemini,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    speed: 28,
    direction: "normal",
    skills: [
      { name: "React",      icon: <FaReact color="#61DAFB" /> },
      { name: "Next.js",    icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "HTML5",      icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3",       icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Tailwind",   icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "DaisyUI",    icon: <SiDaisyui color="#1AD1A5" /> },
      { name: "Bootstrap",  icon: <SiBootstrap color="#7952B3" /> },
    ],
  },
  {
    title: "Backend & Data",
    speed: 20,
    direction: "reverse",
    skills: [
      { name: "Node.js",  icon: <FaNodeJs color="#339933" /> },
      { name: "Express",  icon: <SiExpress /> },
      { name: "MongoDB",  icon: <SiMongodb color="#47A248" /> },
      { name: "MySQL",    icon: <SiMysql color="#4479A1" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    ],
  },
  {
    title: "Tools & Workflow",
    speed: 24,
    direction: "normal",
    skills: [
      { name: "GitHub",  icon: <FaGithub /> },
      { name: "Figma",   icon: <FaFigma color="#F24E1E" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Slack",   icon: <SiSlack color="#4A154B" /> },
      { name: "Jira",    icon: <SiJira color="#0052CC" /> },
    ],
  },
  {
    title: "AI-Assisted Development",
    speed: 18,
    direction: "reverse",
    skills: [
      { name: "Codex",           icon: <SiOpenai /> },
      { name: "Cursor",          icon: <FaCode /> },
      { name: "Gemini",          icon: <SiGooglegemini color="#4285F4" /> },
      { name: "Google AI Studio",icon: <SiGoogle color="#4285F4" /> },
      { name: "Claude",          icon: <SiClaude color="#D97757" /> },
    ],
  },
];

function Chip({ name, icon }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full shrink-0
                 bg-base-100 border border-base-content/10 shadow-sm
                 text-[13px] font-medium text-base-content/70
                 hover:bg-primary/8 hover:border-primary/25 hover:text-primary
                 transition-all duration-200 cursor-default select-none"
      data-cursor="hover"
    >
      <span className="text-[16px] leading-none">{icon}</span>
      {name}
    </span>
  );
}

function MarqueeRow({ group, delay }) {
  const items = [
    ...group.skills,
    ...group.skills,
    ...group.skills,
    ...group.skills,
  ];

  return (
    <Fade direction="up" duration={600} delay={delay} triggerOnce>
      <div className="py-7 border-b border-base-content/8 last:border-b-0 marquee-row">

        {/* Category label + rule */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-[10px] font-black tracking-[0.22em] uppercase text-primary shrink-0">
            {group.title}
          </span>
          <div className="flex-1 h-px bg-base-content/10" />
        </div>

        {/* Scrolling track */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base-200 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base-200 to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-3 w-max py-0.5 marquee-track"
            style={{
              animation: `skills-marquee ${group.speed}s linear infinite ${group.direction}`,
            }}
          >
            {items.map((skill, j) => (
              <Chip key={j} {...skill} />
            ))}
          </div>
        </div>

      </div>
    </Fade>
  );
}

const Skills = () => (
  <section id="skills" className="relative py-24 px-6 bg-base-200 overflow-hidden">

    {/* Subtle dot grid backdrop */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    <div className="relative max-w-6xl mx-auto">

      {/* Section header */}
      <Fade direction="up" duration={650} triggerOnce>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
              Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-[13px] text-base-content/50 leading-6 max-w-xs md:text-right">
            Tools and technologies I use to build clean, performant,
            and user-focused products.
          </p>
        </div>
      </Fade>

      {/* Rows */}
      <div>
        {skillGroups.map((group, i) => (
          <MarqueeRow key={group.title} group={group} delay={i * 90} />
        ))}
      </div>

    </div>
  </section>
);

export default Skills;
