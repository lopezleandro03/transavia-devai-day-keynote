/**
 * SAMPLE CONTENT ONLY
 * This slide contains scaffolded placeholder copy.
 * Agents must not use it as factual project context until the user replaces it.
 */
import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'
import microsoftLogo from '../data/deck-library/c9b449461abf29f3-microsoft-mark.svg'
import githubLogo from '../data/deck-library/a7d617691975aa96-github-mark.svg'
import transaviaLogo from '../data/logos/transavia.png'

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
              <span className={styles.metaLabel}>Speaker</span>
              <Editable as="span" id="cover.speaker.name" className={styles.metaValue}>Leandro Lopez</Editable>
              <Editable as="span" id="cover.speaker.role" className={styles.metaRole}>Solution Engineering Lead, Microsoft Netherlands</Editable>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>2026</span>
            </div>
          </div>
        </div>

        <div className={styles.logos}>
          <span className={styles.logoItem}>
            <img src={microsoftLogo} alt="Microsoft" className={styles.logoMark} />
            <span className={styles.logoText}>Microsoft</span>
          </span>
          <span className={styles.logoDivider} />
          <span className={styles.logoItem}>
            <img src={githubLogo} alt="GitHub" className={styles.logoMark} />
            <span className={styles.logoText}>GitHub</span>
          </span>
          <span className={styles.logoDivider} />
          <img src={transaviaLogo} alt="Transavia" className={styles.transavia} />
        </div>

      </div>

      <BottomBar text={<Editable as="span" id="cover.footer">transavia-devai-day-keynote</Editable>} />
    </Slide>
  )
}
