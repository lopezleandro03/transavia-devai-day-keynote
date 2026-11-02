import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './EvaluateTheOutcomesSlide.module.css'

const trackerSteps = [
  { id: '01', label: 'Specify' },
  { id: '02', label: 'Engineer the factory' },
  { id: '03', label: 'Evaluate' },
]

const mechanisms = [
  { id: 'testing', name: 'Automated testing' },
  { id: 'verification', name: 'Continuous verification' },
  { id: 'observability', name: 'Observability' },
  { id: 'judgment', name: 'Human judgment' },
]

const qualities = [
  { id: 'correct', name: 'Correct' },
  { id: 'secure', name: 'Secure' },
  { id: 'maintainable', name: 'Maintainable' },
  { id: 'reliable', name: 'Reliable' },
  { id: 'aligned', name: 'Aligned with its purpose' },
]

export default function EvaluateTheOutcomesSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <div className={styles.topRow}>
            <Editable as="span" id="evaluateTheOutcomes.eyebrow" className={styles.eyebrow}>
              Responsibility 03
            </Editable>
            <ol className={styles.tracker} aria-hidden="true">
              {trackerSteps.map((s) => (
                <li key={s.id} className={s.id === '03' ? styles.trackerActive : ''}>
                  <b>{s.id}</b>{s.label}
                </li>
              ))}
            </ol>
          </div>
          <Editable as="h2" id="evaluateTheOutcomes.title" className={styles.title}>
            Evaluate the outcomes
          </Editable>
          <Editable as="p" id="evaluateTheOutcomes.subtitle" multiline className={styles.subtitle}>
            When software is generated at increasing speed, the ability to assess its quality matters more than ever.
          </Editable>
        </header>

        <div className={styles.flowWrap}>
          <div className={styles.flow}>
            <section className={`${styles.stage} ${styles.stageInput}`}>
              <span className={styles.stageGlyph} aria-hidden="true">&lt;/&gt;</span>
              <Editable as="strong" id="evaluateTheOutcomes.input.title" className={styles.stageTitle}>
                Generated software
              </Editable>
              <Editable as="span" id="evaluateTheOutcomes.input.desc" className={styles.stageDesc}>
                At the speed and scale of AI
              </Editable>
            </section>

            <span className={styles.arrow} aria-hidden="true">→</span>

            <section className={`${styles.stage} ${styles.stageGate}`}>
              <Editable as="span" id="evaluateTheOutcomes.mechanismsLabel" className={styles.cardLabel}>
                Evaluation mechanisms
              </Editable>
              <EditableList
                id="evaluateTheOutcomes.mechanisms"
                items={mechanisms}
                keyOf={(m) => m.id}
                className={styles.mechanisms}
                itemClassName={styles.mechanism}
              >
                {(m) => (
                  <Editable as="span" id={`evaluateTheOutcomes.mechanisms.${m.id}.name`}>
                    {m.name}
                  </Editable>
                )}
              </EditableList>
            </section>

            <span className={styles.arrow} aria-hidden="true">→</span>

            <section className={`${styles.stage} ${styles.stageOutput}`}>
              <Editable as="span" id="evaluateTheOutcomes.qualitiesLabel" className={styles.cardLabel}>
                Trusted when it is
              </Editable>
              <EditableList
                id="evaluateTheOutcomes.qualities"
                items={qualities}
                keyOf={(q) => q.id}
                className={styles.qualities}
                itemClassName={styles.quality}
              >
                {(q) => (
                  <Editable as="span" id={`evaluateTheOutcomes.qualities.${q.id}.name`}>
                    {q.name}
                  </Editable>
                )}
              </EditableList>
            </section>
          </div>

          <div className={styles.feedback}>
            <span className={styles.feedbackIcon} aria-hidden="true">↺</span>
            <Editable as="span" id="evaluateTheOutcomes.feedback" className={styles.feedbackText}>
              Feedback improves the specifications and the factory itself
            </Editable>
            <div className={styles.feedbackTargets}>
              <Editable as="span" id="evaluateTheOutcomes.feedbackSpec">01 Specify</Editable>
              <Editable as="span" id="evaluateTheOutcomes.feedbackFactory">02 Factory</Editable>
            </div>
          </div>
        </div>

        <Editable as="p" id="evaluateTheOutcomes.takeaway" multiline className={styles.takeaway}>
          Evaluation doesn't just close the cycle. It powers the next one.
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="evaluateTheOutcomes.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
