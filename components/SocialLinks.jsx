"use client";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks({ gmail = "kottawartushar084@gmail.com", linkedin = "https://www.linkedin.com/in/tusharkottawar", github = "https://github.com/kottawartushar" }) {
  return (
    <div className="flex items-center gap-3">
      <a aria-label="Email" title="Email" href={`mailto:${gmail}`} className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:bg-slate-50">
        <AiOutlineMail size={18} />
      </a>

      <a aria-label="LinkedIn" title="LinkedIn" href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:bg-slate-50">
        <FaLinkedin size={16} />
      </a>

      <a aria-label="GitHub" title="GitHub" href={github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:bg-slate-50">
        <FaGithub size={16} />
      </a>
    </div>
  );
}
