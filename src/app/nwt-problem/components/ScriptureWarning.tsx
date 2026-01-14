export default function ScriptureWarning() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-serif font-semibold text-center" style={{ color: '#2f3f2f' }}>
        A Solemn Warning from Scripture
      </h3>
      
      <p className="text-center" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
        Before we examine the evidence, we must understand how seriously God takes 
        the integrity of His Word. From the beginning of Scripture to its end, 
        God has warned against tampering with what He has written.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Deuteronomy 4:2 */}
        <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
          <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
            Deuteronomy 4:2
          </p>
          <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            "You shall not add to the word that I command you, nor take from it, 
            that you may keep the commandments of the LORD your God that I command you."
          </p>
          <p className="text-xs mt-2" style={{ color: '#577557' }}>
            — Moses to Israel, ~1400 BC
          </p>
        </div>

        {/* Deuteronomy 12:32 */}
        <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
          <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
            Deuteronomy 12:32
          </p>
          <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            "Everything that I command you, you shall be careful to do. 
            You shall not add to it or take from it."
          </p>
          <p className="text-xs mt-2" style={{ color: '#577557' }}>
            — Moses to Israel, ~1400 BC
          </p>
        </div>

        {/* Proverbs 30:5-6 */}
        <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
          <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
            Proverbs 30:5-6
          </p>
          <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            "Every word of God is pure; He is a shield to those who put their trust in Him. 
            <strong> Do not add to His words, lest He rebuke you, and you be found a liar.</strong>"
          </p>
          <p className="text-xs mt-2" style={{ color: '#577557' }}>
            — Agur son of Jakeh, ~700 BC
          </p>
        </div>

        {/* Revelation 22:18-19 */}
        <div className="rounded-xl p-6" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
          <p className="text-sm font-semibold mb-2" style={{ color: '#435943' }}>
            Revelation 22:18-19
          </p>
          <p className="italic" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            "I warn everyone who hears the words of the prophecy of this book: 
            <strong>if anyone adds to them, God will add to him the plagues described in this book, 
            and if anyone takes away from the words of the book of this prophecy, 
            God will take away his share in the tree of life</strong> and in the holy city, 
            which are described in this book."
          </p>
          <p className="text-xs mt-2" style={{ color: '#d4af37' }}>
            — Jesus Christ through John, ~95 AD
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-xl p-6" style={{ backgroundColor: '#e8ede8' }}>
        <p className="text-center" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
          From Moses to John — spanning over <strong>1,500 years</strong> — 
          God's message is consistent and clear:
        </p>
        <p className="text-xl font-semibold text-center mt-4" style={{ color: '#2f3f2f' }}>
          Do not add to His words. Do not take away from His words.
        </p>
        <p className="text-center mt-4" style={{ color: '#577557' }}>
          The consequences include being rebuked, being found a liar, 
          receiving the plagues of Revelation, and losing one's share in the tree of life.
        </p>
      </div>

      {/* Transition to Evidence */}
      <div className="rounded-xl p-6" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
        <p className="text-center font-semibold" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
          With these warnings in mind, let us examine how the New World Translation 
          handles Scripture — particularly the passages that reveal who Jesus truly is.
        </p>
        <p className="text-center mt-4 text-sm" style={{ color: '#577557' }}>
          What we will show is not a matter of interpretation or translation preference. 
          We will demonstrate, using the Watchtower's own interlinear Bible, 
          that words have been <strong>added</strong>, meanings have been <strong>changed</strong>, 
          and the same Greek and Hebrew words have been translated <strong>inconsistently</strong> — 
          always in ways that obscure the deity of Christ.
        </p>
      </div>
    </div>
  );
}