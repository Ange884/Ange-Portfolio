'use client';

import { useState } from 'react';
import './about.css'; // External CSS file

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  const sections = [
    {
      title: 'My Journey',
      content: 'My passion for innovation sparked during my university days studying Computer Science at the University of Rwanda. What started as late-night coding sessions evolved into a full-fledged career, where I\'ve contributed to open-source projects, freelanced for startups, and collaborated on impactful web applications. Each challenge has been a lesson in resilience and adaptability.',
      type: 'paragraph'
    },
    {
      title: 'What Drives Me',
      content: 'I believe in thoughtful simplicity — crafting experiences that feel intuitive, purposeful, and deeply human. Empathy is at the core of my approach; I prioritize user needs and iterate with feedback in mind. Whether working solo or with diverse teams, I bring curiosity, a collaborative spirit, and a commitment to ethical design.',
      type: 'paragraph'
    },
    {
      title: 'Skills & Expertise',
      content: [
        'Frontend Development (React, Next.js, Tailwind CSS)',
        'UI/UX Design (Figma, Adobe XD)',
        'Backend Basics (Node.js, Express)',
        'Problem-Solving & Agile Methodologies',
        'Content Creation & Digital Storytelling'
      ],
      type: 'list'
    },
    {
      title: 'Beyond the Screen',
      content: 'When I\'m not immersed in code or sketches, you\'ll find me capturing Rwanda\'s breathtaking landscapes through my lens, hiking the misty hills of Volcanoes National Park, or immersing myself in local markets to discover new flavors and stories. These pursuits recharge my creativity and remind me of the beauty in human connection.',
      type: 'paragraph'
    },
    {
      title: 'Looking Ahead',
      content: 'I\'m always eager to connect with fellow creators, tackle exciting challenges, and contribute to projects that drive positive change. Let\'s build something meaningful together — whether it\'s a conversation over coffee in Kigali or a collaborative venture across borders.',
      type: 'paragraph'
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <div className="about-divider"></div>
      </div>
      
      <div className="about-intro-wrapper">
        <p className="about-intro">
          Hello! I&apos;m <strong>Your Name</strong>, a curious and creative individual based in <strong>Rwanda</strong>. I thrive on solving problems, exploring ideas, and building things that make a difference. With a background in technology and design, I specialize in crafting intuitive digital experiences that blend functionality with aesthetic appeal.
        </p>
      </div>

      {expanded && (
        <div className="about-timeline-wrapper">
          <div className="about-timeline">
            <div className="timeline-line"></div>
            {sections.map((section, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h2 className="section-subtitle">{section.title}</h2>
                  {section.type === 'paragraph' ? (
                    <p>{section.content}</p>
                  ) : (
                    <ul className="skills-list">
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="about-toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? (
          <>
            Show Less <span className="toggle-icon">−</span>
          </>
        ) : (
          <>
            Read More <span className="toggle-icon">+</span>
          </>
        )}
      </button>
    </div>
  );
}