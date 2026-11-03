import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AgenticEngineerSlide.module.css'

export default function AgenticEngineerSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="span" id="agenticEngineer.eyebrow" className={styles.eyebrow}>
            The role is evolving
          </Editable>
          <Editable as="h2" id="agenticEngineer.title" className={styles.title}>
            From writing code to engineering outcomes
          </Editable>
        </header>

        <div className={styles.evolution}>
          <div className={styles.codeNode}>
            <span className={styles.codeGlyph} aria-hidden="true">&lt;/&gt;</span>
            <Editable as="span" id="agenticEngineer.code" className={styles.codeLabel}>
              Code
            </Editable>
          </div>

          <div className={styles.connector} aria-hidden="true">
            <span />
            <span className={styles.arrow} />
          </div>

          <div className={styles.responsibilities}>
            <article className={styles.responsibility}>
              <span className={styles.number}>01</span>
              <Editable as="h3" id="agenticEngineer.specify.title" className={styles.cardTitle}>
                Specify the work
              </Editable>
              <Editable as="p" id="agenticEngineer.specify.text" className={styles.cardText}>
                Define intent, context, constraints, and success.
              </Editable>
            </article>
            <article className={styles.responsibility}>
              <span className={styles.number}>02</span>
              <Editable as="h3" id="agenticEngineer.factory.title" className={styles.cardTitle}>
                Engineer the factory
              </Editable>
              <Editable as="p" id="agenticEngineer.factory.text" className={styles.cardText}>
                Build the system that builds the software.
              </Editable>
            </article>
            <article className={styles.responsibility}>
              <span className={styles.number}>03</span>
              <Editable as="h3" id="agenticEngineer.evaluate.title" className={styles.cardTitle}>
                Evaluate outcomes
              </Editable>
              <Editable as="p" id="agenticEngineer.evaluate.text" className={styles.cardText}>
                Prove the result is worthy of production.
              </Editable>
            </article>
          </div>
        </div>

        <Editable as="p" id="agenticEngineer.thesis" className={styles.thesis}>
          The implementation is no longer the whole job. It is the output of an engineered system.
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="agenticEngineer.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
