import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './DeveloperAiEvolutionSlide.module.css'

const generations = [
  {
    id: 'gen-1',
    generation: 'Gen 1',
    tagline: 'Human works, AI suggests',
    detail: 'Copilot completions and inline hints',
    state: 'past',
  },
  {
    id: 'gen-2',
    generation: 'Gen 2',
    tagline: 'Human asks, AI answers',
    detail: 'Chat, Q&A and prompt-driven output',
    state: 'past',
  },
  {
    id: 'gen-3',
    generation: 'Gen 3',
    tagline: 'Humans and AI collaborate',
    detail: 'Agents plan, execute and iterate autonomously',
    state: 'now',
    badge: 'Now',
  },
  {
    id: 'gen-4',
    generation: 'Gen 4',
    tagline: 'Humans orchestrate agent teams',
    detail: 'Many specialized agents work in parallel and converge on outcomes',
    state: 'next',
    badge: 'Next',
  },
]

export default function DeveloperAiEvolutionSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="span" id="aiEvolution.eyebrow" className={styles.eyebrow}>
            Developer Experience
          </Editable>
          <Editable as="h2" id="aiEvolution.title" className={styles.title}>
            The Evolution of AI-Assisted Coding
          </Editable>
        </header>

        <EditableList
          id="aiEvolution.generations"
          items={generations}
          keyOf={(generation) => generation.id}
          className={styles.timeline}
          itemClassName={styles.timelineItem}
        >
          {(generation, position) => (
            <article className={`${styles.stop} ${styles[generation.state]}`}>
              {position > 0 && <div className={styles.lineSegment} />}
              <div className={styles.pill}>
                <Editable as="span" id={`aiEvolution.generations.${generation.id}.generation`}>
                  {generation.generation}
                </Editable>
                {generation.badge && (
                  <Editable as="span" id={`aiEvolution.generations.${generation.id}.badge`} className={styles.nowBadge}>
                    {generation.badge}
                  </Editable>
                )}
              </div>
              <div className={styles.connector} />
              <div className={styles.label}>
                <Editable as="h3" id={`aiEvolution.generations.${generation.id}.tagline`} className={styles.tagline}>
                  {generation.tagline}
                </Editable>
                <Editable as="p" id={`aiEvolution.generations.${generation.id}.detail`} className={styles.detail}>
                  {generation.detail}
                </Editable>
                {generation.state === 'next' && (
                  <div className={styles.agentCluster} aria-hidden="true">
                    <span className={styles.humanNode}>●</span>
                    <span className={`${styles.agentNode} ${styles.agentOne}`}>AI</span>
                    <span className={`${styles.agentNode} ${styles.agentTwo}`}>AI</span>
                    <span className={`${styles.agentNode} ${styles.agentThree}`}>AI</span>
                  </div>
                )}
              </div>
            </article>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="aiEvolution.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
