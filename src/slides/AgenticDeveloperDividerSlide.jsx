import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AgenticDeveloperDividerSlide.module.css'

export default function AgenticDeveloperDividerSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="span" id="agenticDeveloperDivider.eyebrow" className={styles.eyebrow}>
          The transition
        </Editable>
        <Editable as="h2" id="agenticDeveloperDivider.title" className={styles.title}>
          The Agentic Developer
        </Editable>
        <div className={styles.rule} aria-hidden="true" />
        <Editable as="p" id="agenticDeveloperDivider.subtitle" className={styles.subtitle}>
          From vibes to engineered outcomes
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="agenticDeveloperDivider.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
