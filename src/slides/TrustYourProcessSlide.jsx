import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './TrustYourProcessSlide.module.css'

export default function TrustYourProcessSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="span" id="trustProcess.eyebrow" className={styles.eyebrow}>
          The factory mindset
        </Editable>
        <Editable as="h2" id="trustProcess.statement" multiline className={styles.statement}>
          If every PR needs deep human review, you don't trust your process.
        </Editable>
        <div className={styles.compare}>
          <Editable as="span" id="trustProcess.pillBefore" className={`${styles.pill} ${styles.pillBefore}`}>
            1h review
          </Editable>
          <Editable as="span" id="trustProcess.vs" className={styles.vs}>
            vs
          </Editable>
          <Editable as="span" id="trustProcess.pillAfter" className={`${styles.pill} ${styles.pillAfter}`}>
            30sec skim
          </Editable>
        </div>
        <Editable as="p" id="trustProcess.callToAction" multiline className={styles.callToAction}>
          Improve your process. Accelerate your factory.
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="trustProcess.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
