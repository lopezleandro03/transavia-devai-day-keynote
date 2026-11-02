import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import sdlcImage from '../data/images/sdlc-before-after.png'
import styles from './EvaluateOutcomesSlide.module.css'

export default function EvaluateOutcomesSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={styles.body}>
        <img
          src={sdlcImage}
          alt="Software development life cycle: before and after agentic coding tools"
          className={styles.image}
        />
      </div>
      <BottomBar text={<Editable as="span" id="evaluateOutcomes.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
