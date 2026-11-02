import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './SpecifyTheWorkSlide.module.css'

const trackerSteps = [
  { id: '01', label: 'Specify' },
  { id: '02', label: 'Engineer the factory' },
  { id: '03', label: 'Evaluate' },
]

const elements = [
  { id: 'intent', name: 'Intent', desc: 'What should exist, and why it matters.' },
  { id: 'context', name: 'Context', desc: 'The domain, the users, the existing system.' },
  { id: 'constraints', name: 'Constraints', desc: 'Security, performance, compliance, cost.' },
  { id: 'boundaries', name: 'Architectural boundaries', desc: 'Where the change may and may not go.' },
  { id: 'success', name: 'Definition of success', desc: 'How we will know it is done, and done right.' },
]

export default function SpecifyTheWorkSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <div className={styles.topRow}>
            <Editable as="span" id="specifyWork.eyebrow" className={styles.eyebrow}>
              Responsibility 01
            </Editable>
            <ol className={styles.tracker} aria-hidden="true">
              {trackerSteps.map((s) => (
                <li key={s.id} className={s.id === '01' ? styles.trackerActive : ''}>
                  <b>{s.id}</b>{s.label}
                </li>
              ))}
            </ol>
          </div>
          <Editable as="h2" id="specifyWork.title" className={styles.title}>
            Specify the work
          </Editable>
          <Editable as="p" id="specifyWork.subtitle" multiline className={styles.subtitle}>
            As implementation becomes automated, specification becomes a critical engineering discipline.
          </Editable>
        </header>

        <div className={styles.main}>
          <section className={styles.specCard}>
            <Editable as="span" id="specifyWork.specLabel" className={styles.cardLabel}>
              A good specification carries
            </Editable>
            <EditableList
              id="specifyWork.elements"
              items={elements}
              keyOf={(e) => e.id}
              className={styles.elements}
              itemClassName={styles.element}
            >
              {(e) => (
                <div className={styles.elementRow}>
                  <Editable as="strong" id={`specifyWork.elements.${e.id}.name`} className={styles.elementName}>
                    {e.name}
                  </Editable>
                  <Editable as="span" id={`specifyWork.elements.${e.id}.desc`} className={styles.elementDesc}>
                    {e.desc}
                  </Editable>
                </div>
              )}
            </EditableList>
          </section>

          <section className={styles.contrast}>
            <div className={styles.requirement}>
              <Editable as="span" id="specifyWork.requirementLabel" className={styles.cardLabel}>
                One ambiguous requirement
              </Editable>
              <Editable as="p" id="specifyWork.requirement" className={styles.quote}>
                "Make online check-in faster."
              </Editable>
            </div>
            <div className={styles.paths}>
              <div className={styles.path}>
                <Editable as="span" id="specifyWork.human.who" className={styles.who}>Human developer</Editable>
                <Editable as="p" id="specifyWork.human.how" className={styles.how}>
                  Fills the gaps with intuition and experience.
                </Editable>
                <Editable as="span" id="specifyWork.human.result" className={`${styles.result} ${styles.resultOk}`}>
                  Asks, infers, adjusts
                </Editable>
              </div>
              <div className={`${styles.path} ${styles.pathAgent}`}>
                <Editable as="span" id="specifyWork.agent.who" className={styles.who}>Autonomous agent</Editable>
                <Editable as="p" id="specifyWork.agent.how" className={styles.how}>
                  Fills the gaps with assumptions, at speed.
                </Editable>
                <Editable as="span" id="specifyWork.agent.result" className={`${styles.result} ${styles.resultWarn}`}>
                  Significant rework
                </Editable>
              </div>
            </div>
          </section>
        </div>

        <Editable as="p" id="specifyWork.takeaway" className={styles.takeaway}>
          The quality of the specification determines the quality of the output.
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="specifyWork.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
