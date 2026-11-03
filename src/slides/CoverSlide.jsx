/**
 * SAMPLE CONTENT ONLY
 * This slide contains scaffolded placeholder copy.
 * Agents must not use it as factual project context until the user replaces it.
 */
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="cover.eyebrow" className={styles.eyebrow}>transavia-devai-day-keynote</Editable>
          <h1>
            <Editable as="span" id="cover.titleBefore">From Code to</Editable> <Editable as="span" id="cover.titleHighlight" className={styles.highlight}>Outcomes</Editable>
          </h1>
          <Editable as="p" id="cover.subtitle" multiline className={styles.subtitle}>
            How agentic engineering is reshaping the way we build, ship, and run software
          </Editable>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Project</span>
              <span className={styles.metaValue}>Transavia DevAI Day Keynote</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>2026</span>
            </div>
          </div>
        </div>

      </div>

      <BottomBar text={<Editable as="span" id="cover.footer">transavia-devai-day-keynote</Editable>} />
    </Slide>
  )
}
