import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './EngineerFactorySlide.module.css'

const trackerSteps = [
  { id: '01', label: 'Specify' },
  { id: '02', label: 'Engineer the factory' },
  { id: '03', label: 'Evaluate' },
]

const parts = [
  { id: 'agents', name: 'Specialized agents' },
  { id: 'tools', name: 'Development tools' },
  { id: 'workflows', name: 'Workflows' },
  { id: 'integrations', name: 'Integrations' },
  { id: 'policies', name: 'Policies' },
  { id: 'gates', name: 'Quality gates' },
  { id: 'feedback', name: 'Feedback mechanisms' },
]

const verbs = [
  { id: 'design', name: 'Design' },
  { id: 'configure', name: 'Configure' },
  { id: 'orchestrate', name: 'Orchestrate' },
  { id: 'observe', name: 'Observe' },
  { id: 'improve', name: 'Improve' },
]

const decisions = [
  { id: 'delegate', text: 'Which tasks can be delegated' },
  { id: 'intervene', text: 'Where human intervention is necessary' },
  { id: 'collaborate', text: 'How agents collaborate safely and effectively' },
]

export default function EngineerFactorySlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <div className={styles.topRow}>
            <Editable as="span" id="engineerFactory.eyebrow" className={styles.eyebrow}>
              Responsibility 02
            </Editable>
            <ol className={styles.tracker} aria-hidden="true">
              {trackerSteps.map((s) => (
                <li key={s.id} className={s.id === '02' ? styles.trackerActive : ''}>
                  <b>{s.id}</b>{s.label}
                </li>
              ))}
            </ol>
          </div>
          <Editable as="h2" id="engineerFactory.title" className={styles.title}>
            Engineer the software factory
          </Editable>
          <Editable as="p" id="engineerFactory.subtitle" multiline className={styles.subtitle}>
            The most profound shift: invest less in each individual change, more in the system that performs the implementation.
          </Editable>
        </header>

        <div className={styles.main}>
          <section className={styles.factoryCard}>
            <div className={styles.factoryHead}>
              <Editable as="span" id="engineerFactory.partsLabel" className={styles.cardLabel}>
                The factory is an engineered system
              </Editable>
              <Editable as="span" id="engineerFactory.notAssistant" className={styles.notAssistant}>
                More than an AI coding assistant
              </Editable>
            </div>
            <EditableList
              id="engineerFactory.parts"
              items={parts}
              keyOf={(p) => p.id}
              className={styles.parts}
              itemClassName={styles.part}
            >
              {(p) => (
                <Editable as="span" id={`engineerFactory.parts.${p.id}.name`} className={styles.partName}>
                  {p.name}
                </Editable>
              )}
            </EditableList>
          </section>

          <section className={styles.roleCard}>
            <Editable as="span" id="engineerFactory.verbsLabel" className={styles.cardLabel}>
              Developers continuously
            </Editable>
            <div className={styles.loop}>
              <EditableList
                id="engineerFactory.verbs"
                items={verbs}
                keyOf={(v) => v.id}
                className={styles.verbs}
                itemClassName={styles.verb}
              >
                {(v) => (
                  <Editable as="span" id={`engineerFactory.verbs.${v.id}.name`} className={styles.verbName}>
                    {v.name}
                  </Editable>
                )}
              </EditableList>
              <span className={styles.loopBack} aria-hidden="true">↺</span>
            </div>
            <Editable as="span" id="engineerFactory.decisionsLabel" className={`${styles.cardLabel} ${styles.decisionsLabel}`}>
              And decide
            </Editable>
            <EditableList
              id="engineerFactory.decisions"
              items={decisions}
              keyOf={(d) => d.id}
              className={styles.decisions}
              itemClassName={styles.decision}
            >
              {(d) => (
                <Editable as="span" id={`engineerFactory.decisions.${d.id}.text`}>
                  {d.text}
                </Editable>
              )}
            </EditableList>
          </section>
        </div>

        <Editable as="p" id="engineerFactory.takeaway" multiline className={styles.takeaway}>
          Not a one-time setup. A reusable engineering asset whose effectiveness compounds over time.
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="engineerFactory.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
