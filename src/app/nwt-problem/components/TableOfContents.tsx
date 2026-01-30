'use client';

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  label: string;
  shortLabel?: string;
}

const sections: Section[] = [
  { id: 'personal-journey', label: 'A Personal Journey', shortLabel: 'My Journey' },
  { id: 'scripture-warning', label: 'Scripture Warning', shortLabel: 'Warning' },
  { id: 'part-1-worship', label: 'Part 1: Worship', shortLabel: '1. Worship' },
  { id: 'part-2-hebrews', label: 'Part 2: Hebrews 1', shortLabel: '2. Hebrews' },
  { id: 'part-3-isaiah', label: 'Part 3: Isaiah 9:6', shortLabel: '3. Isaiah' },
  { id: 'part-4-john858', label: 'Part 4: John 8:58', shortLabel: '4. John 8:58' },
  { id: 'part-5-john11', label: 'Part 5: John 1:1', shortLabel: '5. John 1:1' },
  { id: 'part-6-colossians', label: 'Part 6: Colossians 1', shortLabel: '6. Colossians' },
  { id: 'part-7-revelation', label: 'Part 7: Alpha & Omega', shortLabel: '7. Revelation' },
  { id: 'part-8-thomas', label: 'Part 8: Thomas', shortLabel: '8. Thomas' },
  { id: 'conclusion', label: 'Conclusion', shortLabel: 'Conclusion' },
];

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show TOC after scrolling past hero (about 300px)
      setIsVisible(window.scrollY > 300);

      // Find which section is currently in view
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for any fixed headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile: Floating button + dropdown */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        {/* Dropdown menu */}
        {isOpen && (
          <div 
            className="absolute bottom-16 right-0 w-64 rounded-xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: '#fdfdf8', border: '2px solid #577557' }}
          >
            <div 
              className="p-3 font-semibold text-sm"
              style={{ backgroundColor: '#e8ede8', color: '#2f3f2f' }}
            >
              Navigate to Section
            </div>
            <div className="max-h-80 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-100"
                  style={{ 
                    color: activeSection === section.id ? '#577557' : '#2f3f2f',
                    fontWeight: activeSection === section.id ? '600' : '400',
                    backgroundColor: activeSection === section.id ? '#f6f8f6' : 'transparent',
                  }}
                >
                  {section.shortLabel || section.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Floating button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
          style={{ backgroundColor: '#577557', color: '#fff' }}
          aria-label="Table of contents"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop: Sticky sidebar */}
      <div className="hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <div 
          className="rounded-xl shadow-lg p-4 w-56"
          style={{ backgroundColor: '#fdfdf8', border: '2px solid #e8ede8' }}
        >
          <div 
            className="text-xs font-semibold uppercase tracking-wide mb-3 pb-2"
            style={{ color: '#577557', borderBottom: '1px solid #e8ede8' }}
          >
            Contents
          </div>
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left px-2 py-1.5 rounded text-sm transition-all hover:bg-gray-100"
                style={{ 
                  color: activeSection === section.id ? '#577557' : '#666',
                  fontWeight: activeSection === section.id ? '600' : '400',
                  backgroundColor: activeSection === section.id ? '#f6f8f6' : 'transparent',
                  borderLeft: activeSection === section.id ? '3px solid #d4af37' : '3px solid transparent',
                }}
              >
                {section.shortLabel || section.label}
              </button>
            ))}
          </nav>
          
          {/* Progress indicator */}
          <div 
            className="mt-4 pt-3 text-xs text-center"
            style={{ borderTop: '1px solid #e8ede8', color: '#999' }}
          >
            {sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}
          </div>
        </div>
      </div>

      {/* Desktop: Right side quick dots (minimal alternative) */}
      <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative"
              aria-label={section.label}
            >
              {/* Dot */}
              <div 
                className="w-3 h-3 rounded-full transition-all"
                style={{ 
                  backgroundColor: activeSection === section.id ? '#d4af37' : '#ccc',
                  transform: activeSection === section.id ? 'scale(1.3)' : 'scale(1)',
                }}
              />
              {/* Tooltip */}
              <div 
                className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap px-3 py-1.5 rounded text-sm"
                style={{ backgroundColor: '#2f3f2f', color: '#fff' }}
              >
                {section.shortLabel || section.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}