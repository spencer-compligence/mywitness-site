export default function WorshipEvidence() {
  return (
    <div className="space-y-8">
      {/* Introduction to Proskuneo */}
      <div className="rounded-xl p-6" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
        <h4 className="text-xl font-semibold mb-3" style={{ color: '#2f3f2f' }}>
          The Watchtower's Translation Promise
        </h4>
        <p className="italic mb-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
          "The New World Translation makes every effort to be consistent in its renderings. 
          For a given Hebrew or Greek word, there has been assigned one English word, 
          and this has been used as uniformly as the idiom or context permits."
        </p>
        <p className="text-sm" style={{ color: '#577557' }}>
          — Watchtower Online Library, "Advantages of the New World Translation"
        </p>
      </div>

      <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
        <h4 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
          What is Proskuneo (προσκυνέω)?
        </h4>
        <div className="space-y-4" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
          <p>
            <strong>Proskuneo</strong> (προσκυνέω) is the primary Greek word for worship in the New Testament. 
            It appears <strong>55 times</strong> in the Greek text.
          </p>
          <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2">Greek Definition:</p>
            <p className="italic">
              "To kiss the hand, bow down before, show obeisance, to worship"
            </p>
            <p className="text-sm mt-2" style={{ color: '#577557' }}>
              — Strong's G4352
            </p>
          </div>
          <p>
            The word literally means to prostrate oneself in reverence. In the New Testament, 
            it's used for worship given to God, to false gods, and—significantly—to Jesus.
          </p>
        </div>
      </div>

      {/* The Pattern of Inconsistency */}
      <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #d4af37' }}>
        <h4 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
          The Pattern: One Word, Two Translations
        </h4>
        
        <div className="rounded p-4 mb-6" style={{ backgroundColor: '#fff4e6' }}>
          <p className="font-semibold text-lg text-center mb-2" style={{ color: '#2f3f2f' }}>
            How does the NWT translate "proskuneo"?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="rounded p-4" style={{ backgroundColor: '#fdfdf8', border: '2px solid #577557' }}>
            <p className="font-semibold mb-3 text-center" style={{ color: '#577557' }}>
              When Directed to God, Angels, or Satan
            </p>
            <p className="text-2xl font-bold text-center mb-3" style={{ color: '#2f3f2f' }}>
              "WORSHIP"
            </p>
            <ul className="text-sm space-y-1" style={{ color: '#2f3f2f' }}>
              <li>• Rev 5:14 — elders "worship" God ✓</li>
              <li>• Rev 7:11 — angels "worship" God ✓</li>
              <li>• Rev 19:4 — elders "worship" God ✓</li>
              <li>• Matt 4:9 — Satan asks for "worship" ✓</li>
              <li>• Matt 4:10 — "worship" the Lord your God ✓</li>
              <li>• John 4:20-24 — "worship" the Father ✓</li>
            </ul>
          </div>

          <div className="rounded p-4" style={{ backgroundColor: '#fff4e6', border: '2px solid #d4af37' }}>
            <p className="font-semibold mb-3 text-center" style={{ color: '#435943' }}>
              When Directed to Jesus
            </p>
            <p className="text-2xl font-bold text-center mb-3" style={{ color: '#d4af37' }}>
              "OBEISANCE"
            </p>
            <ul className="text-sm space-y-1" style={{ color: '#2f3f2f' }}>
              <li>• Matt 2:11 — wise men "do obeisance" ✗</li>
              <li>• Matt 14:33 — disciples "do obeisance" ✗</li>
              <li>• Matt 28:9 — women "do obeisance" ✗</li>
              <li>• Matt 28:17 — disciples "do obeisance" ✗</li>
              <li>• Luke 24:52 — disciples "do obeisance" ✗</li>
              <li>• John 9:38 — blind man "does obeisance" ✗</li>
            </ul>
          </div>
        </div>

        <div className="rounded p-4" style={{ backgroundColor: '#e8ede8' }}>
          <p className="text-center font-semibold" style={{ color: '#2f3f2f' }}>
            Same Greek word. Different English translation. The ONLY difference? 
            <span style={{ color: '#d4af37' }}> Who is receiving it.</span>
          </p>
        </div>
      </div>

      {/* The Statistics */}
      <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6' }}>
        <h4 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
          The Numbers Don't Lie
        </h4>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="rounded p-4 text-center" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="text-3xl font-bold" style={{ color: '#577557' }}>55</p>
            <p className="text-sm" style={{ color: '#2f3f2f' }}>Times proskuneo appears</p>
          </div>
          <div className="rounded p-4 text-center" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="text-3xl font-bold" style={{ color: '#577557' }}>15</p>
            <p className="text-sm" style={{ color: '#2f3f2f' }}>Times directed at Jesus</p>
          </div>
          <div className="rounded p-4 text-center" style={{ backgroundColor: '#fff4e6' }}>
            <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>0</p>
            <p className="text-sm" style={{ color: '#2f3f2f' }}>Times NWT translates it "worship" for Jesus</p>
          </div>
        </div>

        <div className="rounded p-4" style={{ backgroundColor: '#fff4e6' }}>
          <p style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
            <strong>15 times</strong> people give proskuneo to Jesus in the New Testament.{' '}
            <strong>Zero times</strong> does the NWT translate it as "worship."{' '}
            Yet the same word is translated "worship" when given to God, angels, or even Satan.
          </p>
        </div>
      </div>

      {/* They Changed Their Own Translation */}
      <div className="rounded-xl p-6" style={{ backgroundColor: '#fff4e6', borderLeft: '4px solid #d4af37' }}>
        <h4 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
          They Changed Their Own Translation
        </h4>
        
        <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
          <p className="font-semibold mb-2" style={{ color: '#435943' }}>Hebrews 1:6</p>
          <p className="italic mb-3" style={{ color: '#2f3f2f' }}>
            "But when he again brings his Firstborn into the inhabited earth, he says: 
            'And let all God's angels _______ him.'"
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded p-3" style={{ backgroundColor: '#e8ede8' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>NWT 1950-1970:</p>
              <p className="text-lg font-bold" style={{ color: '#577557' }}>"WORSHIP"</p>
            </div>
            <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', border: '2px solid #d4af37' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: '#435943' }}>NWT 1980-Present:</p>
              <p className="text-lg font-bold" style={{ color: '#d4af37' }}>"DO OBEISANCE"</p>
            </div>
          </div>
        </div>

        <div className="rounded p-4" style={{ backgroundColor: '#e8ede8' }}>
          <p style={{ color: '#2f3f2f', lineHeight: '1.6' }}>
            <strong>The same Greek word. The same verse. The same translation committee.</strong>{' '}
            Why did they change "worship" to "obeisance" in 1980? What changed between 1970 and 1980? 
            Not the Greek text. Only the Watchtower's need to distance Jesus from deity.
          </p>
        </div>
      </div>

      {/* Complete Proskuneo Evidence — Full Quotations */}
      <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}>
        <h4 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
          Complete Proskuneo Evidence
        </h4>
        <p className="mb-6" style={{ color: '#577557' }}>
          Here is every instance where Jesus receives proskuneo in the New Testament,
          with full quotations showing the LSB alongside the NWT rendering.
        </p>

        <div className="space-y-6">
          {/* Matt 2:2 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Matthew 2:2</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;Where is He who has been born King of the Jews? For we saw His star in the east and have come to <strong>worship</strong> Him.&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;Where is the one born king of the Jews? For we saw his star when we were in the East, and we have come to <strong>do him obeisance</strong>.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Matt 2:11 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Matthew 2:11</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And after coming into the house they saw the Child with Mary His mother; and they fell to the ground and <strong>worshiped</strong> Him. Then, opening their treasures, they presented to Him gifts of gold, frankincense, and myrrh.&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And when they went into the house, they saw the young child with Mary its mother, and falling down, they <strong>did obeisance</strong> to it.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Matt 8:2 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Matthew 8:2</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And behold, a leper came to Him and <strong>worshiped</strong> Him, saying, &lsquo;Lord, if You are willing, You can make me clean.&rsquo;&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And look! a leper came up and began <strong>doing obeisance</strong> to him, saying: &lsquo;Lord, if you just want to, you can make me clean.&rsquo;&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Matt 9:18 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Matthew 9:18</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;While He was saying these things to them, behold, a synagogue official came and <strong>worshiped</strong> Him, saying, &lsquo;My daughter has just died; but come and lay Your hand on her, and she will live.&rsquo;&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;While he was telling them these things, look! a certain ruler who had come <strong>did obeisance</strong> to him, saying: &lsquo;By now my daughter must be dead; but come and lay your hand on her, and she will come to life.&rsquo;&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Matt 14:33 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Matthew 14:33</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And those who were in the boat <strong>worshiped</strong> Him, saying, &lsquo;You are truly God&apos;s Son!&rsquo;&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;Then those in the boat <strong>did obeisance</strong> to him, saying: &lsquo;You really are God&apos;s Son.&rsquo;&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Matt 15:25 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Matthew 15:25</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;But she came and was <strong>worshiping</strong> Him, saying, &lsquo;Lord, help me!&rsquo;&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;But the woman came and began <strong>doing obeisance</strong> to him, saying: &lsquo;Lord, help me!&rsquo;&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Matt 28:9 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Matthew 28:9</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And behold, Jesus met them, saying, &lsquo;Rejoice!&rsquo; And they came up and took hold of His feet and <strong>worshiped</strong> Him.&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And look! Jesus met them and said: &lsquo;Good day!&rsquo; They approached and took hold of his feet and <strong>did obeisance</strong> to him.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Matt 28:17 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Matthew 28:17</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And when they saw Him, they <strong>worshiped</strong> Him; but some doubted.&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And when they saw him, they <strong>did obeisance</strong>, but some doubted.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Luke 24:52 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Luke 24:52</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And they, after <strong>worshiping</strong> Him, returned to Jerusalem with great joy.&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And they <strong>did obeisance</strong> to him and returned to Jerusalem with great joy.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* John 9:38 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>John 9:38</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And he said, &lsquo;Lord, I believe.&rsquo; And he <strong>worshiped</strong> Him.&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;He said: &lsquo;I do put my faith in him, Lord.&rsquo; And he <strong>did obeisance</strong> to him.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Hebrews 1:6 — Special */}
          <div className="rounded-lg p-4" style={{ backgroundColor: '#fff4e6', border: '2px solid #d4af37' }}>
            <p className="font-semibold mb-2" style={{ color: '#2f3f2f' }}>Hebrews 1:6</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded p-3" style={{ backgroundColor: '#f6f8f6', borderLeft: '3px solid #577557' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#577557' }}>LSB:</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;And when He again brings the firstborn into the world, He says, &lsquo;And let all the angels of God <strong>worship</strong> Him.&rsquo;&rdquo;
                </p>
              </div>
              <div className="rounded p-3" style={{ backgroundColor: '#fff4e6', borderLeft: '3px solid #d4af37' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#d4af37' }}>NWT (current):</p>
                <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
                  &ldquo;But when he again brings his Firstborn into the inhabited earth, he says: &lsquo;And let all of God&apos;s angels <strong>do obeisance</strong> to him.&rsquo;&rdquo;
                </p>
              </div>
            </div>
            <p className="text-xs mt-3 font-semibold" style={{ color: '#d4af37' }}>
              Note: The NWT translated this as &ldquo;worship&rdquo; from 1950&ndash;1970, then changed it to &ldquo;obeisance&rdquo; in 1980!
            </p>
          </div>
        </div>
      </div>

      {/* The Critical Question */}
      <div className="rounded-xl p-6" style={{ backgroundColor: '#f6f8f6' }}>
        <h4 className="text-xl font-semibold mb-4" style={{ color: '#2f3f2f' }}>
          Jesus Never Refused Proskuneo
        </h4>
        
        <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
          <p className="mb-3" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            When people offered proskuneo to <strong>angels</strong>, what happened?
          </p>
          <div className="rounded p-3 mb-3" style={{ backgroundColor: '#fff4e6' }}>
            <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
              "I fell down to worship [proskuneo] at the feet of the angel... But he said to me, 
              '<strong>Do not do that!</strong> I am a fellow servant... <strong>Worship God!</strong>'"
            </p>
            <p className="text-xs mt-1" style={{ color: '#577557' }}>— Revelation 22:8-9</p>
          </div>
          <p style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            Angels refuse proskuneo and redirect it to God. 
            <strong> But Jesus never refused it. Not once.</strong>
          </p>
        </div>

        <div className="rounded p-4" style={{ backgroundColor: '#fff4e6' }}>
          <p className="mb-3" style={{ color: '#2f3f2f', lineHeight: '1.7' }}>
            When people offered proskuneo to <strong>Peter</strong>, what happened?
          </p>
          <div className="rounded p-3" style={{ backgroundColor: '#fdfdf8' }}>
            <p className="text-sm italic" style={{ color: '#2f3f2f' }}>
              "When Peter entered, Cornelius met him and fell down at his feet and worshiped him. 
              But Peter lifted him up, saying, '<strong>Stand up; I too am just a man.</strong>'"
            </p>
            <p className="text-xs mt-1" style={{ color: '#577557' }}>— Acts 10:25-26</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-xl p-8" style={{ backgroundImage: 'linear-gradient(to bottom, #fff4e6, #f6f8f6)', borderLeft: '4px solid #d4af37' }}>
        <h4 className="text-2xl font-serif font-semibold mb-6 text-center" style={{ color: '#2f3f2f' }}>
          The Evidence
        </h4>

        <div className="rounded p-4 mb-4" style={{ backgroundColor: '#fdfdf8' }}>
          <ul className="list-disc list-inside space-y-2" style={{ color: '#2f3f2f' }}>
            <li>Proskuneo appears 55 times in the New Testament</li>
            <li>15 times it's directed at Jesus</li>
            <li>NWT translates it "worship" for God, angels, even Satan</li>
            <li>NWT translates it "obeisance" 100% of the time for Jesus</li>
            <li>They even changed Hebrews 1:6 from "worship" to "obeisance" in 1980</li>
            <li>Angels and Peter refused proskuneo—Jesus never did</li>
            <li>This violates their own stated translation principle</li>
          </ul>
        </div>

        <div className="rounded p-6" style={{ backgroundColor: '#fdfdf8' }}>
          <p className="text-xl font-semibold text-center mb-4" style={{ color: '#577557' }}>
            Ask Any JW:
          </p>
          <p className="text-center mb-4" style={{ color: '#2f3f2f' }}>
            "The Watchtower claims they translate each Greek word consistently. 
            Why is proskuneo translated 'worship' when given to God or Satan, 
            but 'obeisance' when given to Jesus?"
          </p>
          <p className="text-center text-sm italic" style={{ color: '#577557' }}>
            "And why did the NWT say angels should 'worship' Jesus in Hebrews 1:6 
            from 1950-1970, but changed it to 'obeisance' in 1980?"
          </p>
        </div>
      </div>
    </div>
  );
}