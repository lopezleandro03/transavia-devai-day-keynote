import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './NeverAboutCodeSlide.module.css'

export default function NeverAboutCodeSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="span" id="neverAboutCode.eyebrow" className={styles.eyebrow}>
          One last thing
        </Editable>

        <h2 className={styles.title}>
          <Editable as="span" id="neverAboutCode.before" className={styles.muted}>
            It was never about
          </Editable>{' '}
          <Editable as="span" id="neverAboutCode.struck" className={styles.struck}>
            writing code.
          </Editable>
          <br />
          <Editable as="span" id="neverAboutCode.after" className={styles.highlight}>
            It was always about outcomes.
          </Editable>
        </h2>

        <div className={styles.moment}>
          <span className={styles.check} aria-hidden="true">✓</span>
          <div className={styles.momentText}>
            <Editable as="p" id="neverAboutCode.coda" className={styles.dopamine}>
              That hasn't changed. Only the way we get there has.
            </Editable>
          </div>
        </div>
      </div>
      <BottomBar text={<Editable as="span" id="neverAboutCode.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
