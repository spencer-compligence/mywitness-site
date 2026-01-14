interface ScripturePassageProps {
  reference: string;
  title: string;
  text: string;
  translation?: string;
  whyItMatters: string;
  nwtNote?: string;
  keyPoints?: string[];
}

export default function ScripturePassage({
  reference,
  title,
  text,
  translation = 'LSB',
  whyItMatters,
  nwtNote,
  keyPoints,
}: ScripturePassageProps) {
  return (
    <div
      className="rounded-xl p-6 md:p-8 mb-6"
      style={{
        backgroundColor: '#f6f8f6',
        borderLeft: '4px solid #577557',
      }}
    >
      {/* Reference and Title */}
      <h4
        className="text-xl md:text-2xl font-serif font-bold mb-4"
        style={{ color: '#2f3f2f' }}
      >
        {reference} — {title}
      </h4>

      {/* Scripture Text */}
      <div
        className="rounded-lg p-4 mb-4"
        style={{ backgroundColor: '#ffffff' }}
      >
        <p
          className="text-lg md:text-xl italic leading-relaxed"
          style={{ color: '#2f3f2f' }}
        >
          &ldquo;{text}&rdquo;
        </p>
        <p
          className="text-sm mt-2 font-semibold"
          style={{ color: '#577557' }}
        >
          — {translation}
        </p>
      </div>

      {/* Why It Matters */}
      <div className="mb-4">
        <h5
          className="text-lg font-semibold mb-2"
          style={{ color: '#2f3f2f' }}
        >
          Why It Matters:
        </h5>
        <p
          className="text-base leading-relaxed"
          style={{ color: '#2f3f2f', lineHeight: '1.7' }}
        >
          {whyItMatters}
        </p>
      </div>

      {/* Key Points (if provided) */}
      {keyPoints && keyPoints.length > 0 && (
        <div className="mb-4">
          <h5
            className="text-lg font-semibold mb-2"
            style={{ color: '#2f3f2f' }}
          >
            Key Points:
          </h5>
          <ul className="space-y-2">
            {keyPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-base"
                style={{ color: '#2f3f2f' }}
              >
                <span style={{ color: '#d4af37' }}>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* NWT Note (if provided) - Secondary styling */}
      {nwtNote && (
        <div
          className="rounded-lg p-4 mt-4"
          style={{ backgroundColor: '#fff8e6', borderLeft: '3px solid #d4af37' }}
        >
          <p className="text-sm" style={{ color: '#666666' }}>
            <span className="font-semibold">NWT Note:</span> {nwtNote}
          </p>
        </div>
      )}
    </div>
  );
}
