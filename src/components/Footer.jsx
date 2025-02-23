import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Youtube,
  Instagram,
  Code2, 
  Download,
  Terminal,
  Sparkles
} from 'lucide-react';
import { navLinks } from '../constants';
import resume from '../assets/resume.pdf';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Poshya-hub',
    color: '#6e5494', 
    description: 'Check out my open source projects'
  },
  {
    name: 'LeetCode',
    icon: Code2,
    url: 'https://leetcode.com/u/Poshya/',
    color: '#FFA116', 
    description: 'View my problem-solving skills'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/talasu-poshya/',
    color: '#0077B5', 
    description: 'Connect with me professionally'
  },
  {
    name: 'YouTube',
    icon: Youtube, 
    url: 'https://www.youtube.com/@AIFables-dc21',
    color: '#E4405F', 
    description: 'Watch my video content'
  },
  {
    name: 'Instagram',
    icon: Instagram, 
    url: 'https://www.instagram.com/aifables_dc21?igsh=dDg1djljcGhtamNy',
    color: '#f8d7da', 
    description: 'Follow my professional journey'
  }
];

const Footer = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "RPA & Front End Developer";
  
  // Typing animation effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const typing = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(typing);
    } else {
      setIsTypingComplete(true);
    }
  }, [text]);

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resume;
    link.download = "TALASU_POSHYA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl -bottom-48 -right-48 animate-pulse" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-blue-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${-Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 py-10 relative z-10">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-12 md:mb-0">
            <div className="mb-6 relative">
              <Terminal className="w-16 h-16 text-blue-400 animate-bounce" />
              <Sparkles className="absolute -right-2 -top-2 w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TALASU POSHYA
            </h1>
            
            <div className="h-8 mb-6">
              <span className="text-2xl text-gray-300">
                {text}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </span>
            </div>

            <a
              href={resume}
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-semibold">Download Resume</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-50 transition-opacity" />
            </a>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-12">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300" />
                  <div className="relative flex flex-col items-center gap-2">
                    <link.icon
                      size={28}
                      className="transition-all duration-300 group-hover:scale-110"
                      style={{ color: link.color }}
                    />
                    <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: link.color }}>
                      {link.name}
                    </span>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                        {link.description}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col flex-wrap justify-center md:justify-end gap-6 mt-12 md:mt-0">
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="text-lg text-gray-300 hover:text-white transition-colors duration-300"
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;