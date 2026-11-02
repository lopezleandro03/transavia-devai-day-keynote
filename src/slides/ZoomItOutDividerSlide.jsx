import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './ZoomItOutDividerSlide.module.css'

export default function ZoomItOutDividerSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="span" id="zoomItOut.eyebrow" className={styles.eyebrow}>
          Next
        </Editable>
        <Editable as="h2" id="zoomItOut.title" className={styles.title}>
          Zoom it out
        </Editable>
        <div className={styles.rule} aria-hidden="true" />
        <Editable as="p" id="zoomItOut.subtitle" className={styles.subtitle}>
          The agentic SDLC
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="zoomItOut.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
