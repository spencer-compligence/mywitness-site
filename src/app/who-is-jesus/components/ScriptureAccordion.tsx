'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ScriptureAccordionProps {
  title: string;
  partNumber: number;
  description: string;
  children: React.ReactNode;
  subPageLink: string;
  defaultOpen?: boolean;
}

export default function ScriptureAccordion({
  title,
  partNumber,
  description,
  children,
  subPageLink,
  defaultOpen = false,
}: ScriptureAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="rounded-2xl mb-6 overflow-hidden"
      style={{
        backgroundColor: '#ffffff',
        border: '2px solid #e8ede8',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 text-left flex items-start gap-4 transition-colors hover:bg-gray-50"
      >
        {/* Part Number */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
          style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
        >
          {partNumber}
        </div>

        {/* Title and Description */}
        <div className="flex-grow">
          <h3
            className="text-2xl md:text-3xl font-serif font-bold mb-2"
            style={{ color: '#2f3f2f' }}
          >
            {title}
          </h3>
          <p className="text-lg" style={{ color: '#577557' }}>
            {description}
          </p>
        </div>

        {/* Expand/Collapse Icon */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            backgroundColor: '#f6f8f6',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#577557"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-8 pb-8">
          {/* Content */}
          <div className="mb-8">{children}</div>

          {/* Link to Full Page */}
          <div className="text-center pt-4 border-t" style={{ borderColor: '#e8ede8' }}>
            <Link
              href={subPageLink}
              className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: '#577557',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(87, 117, 87, 0.3)',
              }}
            >
              View Full Section with All Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
