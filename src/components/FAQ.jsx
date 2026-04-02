import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-q">
        <span>{question}</span>
        <div className="faq-toggle"></div>
      </div>
      <div className="faq-a">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do you choose the leaders?",
      answer: "We select only 12 leaders per season to ensure high production value and narrative depth. We prioritize contrast across industries within the B2B space."
    },
    {
      question: "What is the timeline from approval to filming?",
      answer: "From approval to filming, the window is typically 3 weeks. We handle all logistics, including lighting, audio, and post-production."
    },
    {
      question: "Who is behind the series?",
      answer: "The show is backed by a coalition of North Texas investment groups and business media outlets seeking to elevate the region's B2B profile."
    },
    {
      question: "What assets do guests receive?",
      answer: "Every guest receives full usage rights to the 4K episode, raw transcripts, and a library of 10+ social-ready vertical clips for their teams."
    }
  ];

  return (
    <section className="s-faq" id="faq">
      <div className="faq-container">
        <header className="faq-header">
          <div className="editorial-label">09 // COMMON QUESTIONS</div>
          <h2 className="faq-title">Common <i>Questions</i></h2>
          <p className="faq-intro">Everything you need to know about the series.</p>
        </header>
        
        <div className="faq-editorial-grid">
          {faqs.map((f, i) => (
            <div key={i} className="faq-editorial-item">
              <div className="faq-q-box">
                <span className="faq-index">0{i+1}</span>
                <h3 className="faq-q-text">{f.question}</h3>
              </div>
              <div className="faq-a-box">
                <p className="faq-a-text">{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
