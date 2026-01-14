interface ScriptureCardProps {
  reference: string;
  text: string;
  translation?: string;
  explanation: string;
  nwtComparison?: {
    nwtText: string;
    issue: string;
  };
}

export default function ScriptureCard({
  reference,
  text,
  translation = 'LSB',
  explanation,
  nwtComparison,
}: ScriptureCardProps) {
  return (
    <div
      className="rounded-xl p-6 md:p-8 mb-6"
      style={{
        backgroundColor: '#ffffff',
        border: '2px solid #e8ede8',
      }}
    >
      {/* Reference */}
      <h3
        className="text-xl md:text-2xl font-serif font-bold mb-4"
        style={{ color: '#2f3f2f' }}
      >
        {reference}
      </h3>

      {/* Scripture Text */}
      <div
        className="rounded-lg p-4 mb-4"
        style={{ backgroundColor: '#f6f8f6' }}
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

      {/* NWT Comparison (if provided) */}
      {nwtComparison && (
        <div
          className="rounded-lg p-4 mb-4"
          style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: '#8b6914' }}>
            NWT Translation:
          </p>
          <p
            className="text-base italic mb-2"
            style={{ color: '#2f3f2f' }}
          >
            &ldquo;{nwtComparison.nwtText}&rdquo;
          </p>
          <p
            className="text-sm"
            style={{ color: '#8b6914' }}
          >
            ⚠️ {nwtComparison.issue}
          </p>
        </div>
      )}

      {/* Explanation */}
      <div className="mt-4">
        <p
          className="text-base leading-relaxed"
          style={{ color: '#2f3f2f', lineHeight: '1.7' }}
        >
          {explanation}
        </p>
      </div>
    </div>
  );
}
