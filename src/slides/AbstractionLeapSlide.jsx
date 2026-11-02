import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AbstractionLeapSlide.module.css'

export default function AbstractionLeapSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.ladderGlyph} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <h2 className={styles.title}>
          <Editable as="span" id="abstractionLeap.title">
            Another leap on the
          </Editable>
          <br />
          <Editable as="span" id="abstractionLeap.highlight" className={styles.highlight}>
            abstraction ladder
          </Editable>
        </h2>
      </div>

      <BottomBar text={<Editable as="span" id="abstractionLeap.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
