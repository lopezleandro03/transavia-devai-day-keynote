import { BottomBar, Editable, Slide, useDisclosure } from '@deckio/deck-engine'
import styles from './HumanAgentWorkPatternsSlide.module.css'

const stages = [
  {
    id: 'author',
    generation: 'Gen 1',
    pattern: 'Author',
    human: 'Creates code',
    agent: 'Suggests the next lines',
    boundary: 'Line or function',
    story: 'AI assists at the point of creation.',
    state: 'assist',
  },
  {
    id: 'editor',
    generation: 'Gen 2',
    pattern: 'Editor',
    human: 'Frames and evaluates',
    agent: 'Produces a draft',
    boundary: 'Completed change',
    story: 'AI drafts; the developer judges.',
    state: 'draft',
  },
  {
    id: 'director',
    generation: 'Gen 3',
    pattern: 'Director',
    human: 'Directs the work',
    agent: 'Plans and executes',
    boundary: 'A task',
    story: 'AI owns execution within a clear task.',
    state: 'delegate',
    badge: 'Now',
  },
  {
    id: 'orchestrator',
    generation: 'Gen 4',
    pattern: 'Orchestrator',
    human: 'Designs the system',
    agent: 'Runs in parallel',
    boundary: 'An outcome',
    story: 'Agent teams converge on a shared outcome.',
    state: 'orchestrate',
    badge: 'Next',
  },
]

function PatternIcon({ pattern }) {
  if (pattern === 'author') {
    return (
      <svg className={styles.patternIcon} viewBox="0 0 88 52" aria-hidden="true" focusable="false">
        <line className={styles.link} x1="15" y1="26" x2="73" y2="26" />
        <circle className={styles.humanNode} cx="15" cy="26" r="8" />
        <circle className={styles.agentNode} cx="44" cy="26" r="8" />
        <circle className={styles.agentNode} cx="73" cy="26" r="8" />
      </svg>
    )
  }

  if (pattern === 'editor') {
    return (
      <svg className={styles.patternIcon} viewBox="0 0 88 52" aria-hidden="true" focusable="false">
        <line className={styles.link} x1="16" y1="26" x2="72" y2="26" />
        <circle className={styles.agentNode} cx="16" cy="26" r="8" />
        <circle className={styles.humanHalo} cx="44" cy="26" r="18" />
        <circle className={styles.humanNode} cx="44" cy="26" r="9" />
        <circle className={styles.agentNode} cx="72" cy="26" r="8" />
      </svg>
    )
  }

  if (pattern === 'director') {
    return (
      <svg className={styles.patternIcon} viewBox="0 0 88 52" aria-hidden="true" focusable="false">
        <line className={styles.link} x1="44" y1="5" x2="44" y2="47" />
        <line className={styles.link} x1="17" y1="26" x2="71" y2="26" />
        <circle className={styles.agentNode} cx="44" cy="5" r="7" />
        <circle className={styles.agentNode} cx="17" cy="26" r="7" />
        <circle className={styles.humanNode} cx="44" cy="26" r="9" />
        <circle className={styles.agentNode} cx="71" cy="26" r="7" />
        <circle className={styles.agentNode} cx="44" cy="47" r="7" />
      </svg>
    )
  }

  return (
    <svg className={styles.patternIcon} viewBox="0 0 88 52" aria-hidden="true" focusable="false">
      <line className={styles.link} x1="44" y1="5" x2="44" y2="47" />
      <line className={styles.link} x1="15" y1="26" x2="73" y2="26" />
      <line className={styles.link} x1="25" y1="10" x2="63" y2="42" />
      <line className={styles.link} x1="63" y1="10" x2="25" y2="42" />
      <circle className={styles.agentNode} cx="44" cy="5" r="6" />
      <circle className={styles.agentNode} cx="15" cy="26" r="6" />
      <circle className={styles.humanNode} cx="44" cy="26" r="8" />
      <circle className={styles.agentNode} cx="73" cy="26" r="6" />
      <circle className={styles.agentNode} cx="44" cy="47" r="6" />
      <circle className={styles.teamNode} cx="32" cy="18" r="4" />
      <circle className={styles.teamNode} cx="56" cy="18" r="4" />
      <circle className={styles.teamNode} cx="32" cy="34" r="4" />
      <circle className={styles.teamNode} cx="56" cy="34" r="4" />
    </svg>
  )
}

function GenerationButton({ stage, position, activeIndex, revealedCount, onSelect }) {
  const isActive = revealedCount > 0 && position === activeIndex
  const isReached = position < revealedCount

  return (
    <button
      type="button"
      className={[
        styles.generationButton,
        styles[stage.state],
        isReached && styles.reached,
        isActive && styles.active,
      ].filter(Boolean).join(' ')}
      onClick={(event) => {
        event.stopPropagation()
        if (isActive) onSelect(position + 2)
        else if (isReached) onSelect(position + 1)
        else onSelect(revealedCount + 1)
      }}
      aria-current={isActive ? 'step' : undefined}
      aria-label={`Show ${stage.generation}: ${stage.pattern}`}
    >
      <span className={styles.markerWrap} aria-hidden="true">
        <span className={styles.marker} />
      </span>
      <span className={styles.buttonCopy}>
        <span className={styles.stageMeta}>
          <Editable as="span" id={`humanAgentPatterns.stages.${stage.id}.generation`} className={styles.generation}>
            {stage.generation}
          </Editable>
          {stage.badge && (
            <Editable as="span" id={`humanAgentPatterns.stages.${stage.id}.badge`} className={styles.badge}>
              {stage.badge}
            </Editable>
          )}
        </span>
        <Editable as="span" id={`humanAgentPatterns.stages.${stage.id}.pattern`} className={styles.patternName}>
          {stage.pattern}
        </Editable>
      </span>
    </button>
  )
}

export default function HumanAgentWorkPatternsSlide({ index }) {
  const { step, setStep, next } = useDisclosure(stages.length, { index })
  const disclosedStages = Math.min(step, stages.length)
  const hasActiveStage = disclosedStages > 0
  const activeIndex = Math.max(0, disclosedStages - 1)
  const activeStage = stages[activeIndex]
  const progress = `${(Math.max(disclosedStages - 1, 0) / (stages.length - 1)) * 100}%`
  const takeawayRevealed = step >= stages.length

  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="span" id="humanAgentPatterns.eyebrow" className={styles.eyebrow}>
            From code to outcomes
          </Editable>
          <div className={styles.headingRow}>
            <Editable as="h2" id="humanAgentPatterns.title" className={styles.title}>
              Evolution of AI Coding Tools and Emerging Patterns
            </Editable>
            <Editable as="p" id="humanAgentPatterns.subtitle" multiline className={styles.subtitle}>
              As AI takes on larger units of work, the human moves from creating code to designing the system.
            </Editable>
          </div>
        </header>

        <div className={styles.timelineBlock}>
          <div className={styles.timelineTop}>
            <Editable as="span" id="humanAgentPatterns.timeline.label" className={styles.timelineLabel}>
              Generations
            </Editable>
          </div>
          <div className={styles.timelineShell} onClick={next}>
            <div className={styles.track} aria-hidden="true">
              <span className={styles.progress} style={{ width: progress }} />
            </div>
            <div className={styles.timeline}>
              <GenerationButton stage={stages[0]} position={0} activeIndex={activeIndex} revealedCount={disclosedStages} onSelect={setStep} />
              <GenerationButton stage={stages[1]} position={1} activeIndex={activeIndex} revealedCount={disclosedStages} onSelect={setStep} />
              <GenerationButton stage={stages[2]} position={2} activeIndex={activeIndex} revealedCount={disclosedStages} onSelect={setStep} />
              <GenerationButton stage={stages[3]} position={3} activeIndex={activeIndex} revealedCount={disclosedStages} onSelect={setStep} />
            </div>
          </div>
        </div>

        <section
          className={[
            styles.stagePanel,
            styles[activeStage.state],
            hasActiveStage ? styles.stagePanelVisible : styles.stagePanelPending,
          ].join(' ')}
          aria-live="polite"
          aria-hidden={!hasActiveStage}
        >
          <div key={activeStage.id} className={styles.stagePanelInner}>
            <div className={styles.stageOverview}>
              <div className={styles.iconPlate}>
                <PatternIcon pattern={activeStage.id} />
              </div>
              <Editable
                as="p"
                id={`humanAgentPatterns.stages.${activeStage.id}.story`}
                multiline
                className={styles.stageStory}
              >
                {activeStage.story}
              </Editable>
            </div>

            <div className={styles.responsibilityGrid}>
              <article className={styles.responsibilityCard}>
                <span className={styles.cardIcon} aria-hidden="true">H</span>
                <Editable as="span" id="humanAgentPatterns.labels.human" className={styles.cardLabel}>
                  Human role
                </Editable>
                <Editable as="p" id={`humanAgentPatterns.stages.${activeStage.id}.human`} className={styles.cardValue}>
                  {activeStage.human}
                </Editable>
              </article>

              <article className={styles.responsibilityCard}>
                <span className={styles.cardIcon} aria-hidden="true">AI</span>
                <Editable as="span" id="humanAgentPatterns.labels.agent" className={styles.cardLabel}>
                  AI role
                </Editable>
                <Editable as="p" id={`humanAgentPatterns.stages.${activeStage.id}.agent`} className={styles.cardValue}>
                  {activeStage.agent}
                </Editable>
              </article>

              <article className={styles.responsibilityCard}>
                <span className={styles.cardIcon} aria-hidden="true">✓</span>
                <Editable as="span" id="humanAgentPatterns.labels.boundary" className={styles.cardLabel}>
                  Unit reviewed
                </Editable>
                <Editable as="p" id={`humanAgentPatterns.stages.${activeStage.id}.boundary`} className={styles.cardValue}>
                  {activeStage.boundary}
                </Editable>
              </article>
            </div>

            <div
              className={`${styles.takeaway} ${takeawayRevealed ? styles.takeawayRevealed : styles.takeawayPending}`}
              aria-hidden={!takeawayRevealed}
            >
              <span className={styles.takeawayArrow} aria-hidden="true">✈</span>
              <Editable as="p" id="humanAgentPatterns.takeaway" className={styles.takeawayText}>
                Every generation expands the unit of work AI can own.
              </Editable>
            </div>
          </div>
        </section>
      </div>

      <BottomBar text={<Editable as="span" id="humanAgentPatterns.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
