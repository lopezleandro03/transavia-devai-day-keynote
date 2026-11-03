import { useEffect, useRef, useState } from 'react'
import { BottomBar, Editable, Slide, useIsExporting, useSlides } from '@deckio/deck-engine'
import styles from './ClosingCallSlide.module.css'

const START_DELAY = 400
const CHAR_DELAY = 48

export default function ClosingCallSlide({ index }) {
  const { current } = useSlides()
  const exporting = useIsExporting()
  const isActive = current === index
  const statementRef = useRef(null)
  const [fullText, setFullText] = useState('')
  const [typed, setTyped] = useState(0)
  const [phase, setPhase] = useState('idle') // idle | typing | done

  useEffect(() => {
    if (exporting) {
      setPhase('done')
      return undefined
    }
    if (!isActive) {
      setPhase('idle')
      setTyped(0)
      return undefined
    }

    const text = statementRef.current?.textContent?.trim() ?? ''
    setFullText(text)
    setTyped(0)
    setPhase('typing')

    let i = 0
    let timer = setTimeout(function tick() {
      i += 1
      setTyped(i)
      if (i >= text.length) {
        timer = setTimeout(() => setPhase('done'), 450)
        return
      }
      const ch = text[i - 1]
      const pause = ch === '.' || ch === ',' ? 260 : ch === ' ' ? 70 : 0
      timer = setTimeout(tick, CHAR_DELAY + Math.random() * 40 + pause)
    }, START_DELAY)

    return () => clearTimeout(timer)
  }, [isActive, exporting])

  const showTyping = phase !== 'done'
  const revealed = phase === 'done'

  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="span" id="closingCall.eyebrow" className={styles.eyebrow}>
          The bottom line
        </Editable>

        <div className={styles.statementWrap}>
          <div ref={statementRef} className={showTyping ? styles.ghost : undefined}>
            <Editable as="h2" id="closingCall.statement" multiline className={styles.statement}>
              Coding by hand is no longer economically viable.
            </Editable>
          </div>
          {showTyping && (
            <h2 className={`${styles.statement} ${styles.typed}`} aria-hidden="true">
              {fullText.slice(0, typed)}
              <span className={styles.caret} />
            </h2>
          )}
        </div>

        <div className={`${styles.beats} ${revealed ? styles.revealed : ''}`}>
          <div className={`${styles.beat} ${styles.reveal}`}>
            <Editable as="span" id="closingCall.today.label" className={styles.beatLabel}>Today</Editable>
            <Editable as="p" id="closingCall.today.text" className={styles.beatText}>
              Use the day to build new muscles.
            </Editable>
          </div>
          <span className={`${styles.arrow} ${styles.reveal}`} aria-hidden="true">→</span>
          <div className={`${styles.beat} ${styles.beatGoal} ${styles.reveal}`}>
            <Editable as="span" id="closingCall.goal.label" className={styles.beatLabel}>Your journey</Editable>
            <Editable as="p" id="closingCall.goal.text" multiline className={styles.beatText}>
              Become the Director of your own Software Factory.
            </Editable>
          </div>
        </div>
      </div>
      <BottomBar text={<Editable as="span" id="closingCall.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
