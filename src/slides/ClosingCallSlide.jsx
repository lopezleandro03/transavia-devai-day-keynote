import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ClosingCallSlide.module.css'

export default function ClosingCallSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="span" id="closingCall.eyebrow" className={styles.eyebrow}>
          The bottom line
        </Editable>

        <Editable as="h2" id="closingCall.statement" multiline className={styles.statement}>
          Coding by hand is no longer economically viable.
        </Editable>

        <div className={styles.beats}>
          <div className={styles.beat}>
            <Editable as="span" id="closingCall.today.label" className={styles.beatLabel}>Today</Editable>
            <Editable as="p" id="closingCall.today.text" className={styles.beatText}>
              Use the day to build new muscles.
            </Editable>
          </div>
          <span className={styles.arrow} aria-hidden="true">→</span>
          <div className={`${styles.beat} ${styles.beatGoal}`}>
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
