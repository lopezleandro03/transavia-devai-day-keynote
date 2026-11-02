import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './VibesDontScaleSlide.module.css'

const vibeTraits = [
  { id: 'no-plan', text: 'No plan, just prompts' },
  { id: 'agent-choice', text: 'Agent does whatever it wants' },
  { id: 'no-memory', text: 'No conventions, no memory' },
  { id: 'weekend-hacks', text: 'Works great for weekend hacks' },
]

const productionTraits = [
  { id: 'contributors', text: 'Multiple contributors and agents' },
  { id: 'patterns', text: 'Consistent patterns and conventions' },
  { id: 'quality', text: 'CI/CD, tests, and code review' },
  { id: 'maintainable', text: 'Maintainable over months and years' },
]

function TraitList({ id, items }) {
  return (
    <EditableList
      id={`vibesScale.${id}`}
      items={items}
      keyOf={(item) => item.id}
      className={styles.traitList}
      itemClassName={styles.traitItem}
    >
      {(item) => (
        <div className={styles.trait}>
          <span className={styles.traitArrow} aria-hidden="true">→</span>
          <Editable as="p" id={`vibesScale.${id}.${item.id}`} className={styles.traitText}>
            {item.text}
          </Editable>
        </div>
      )}
    </EditableList>
  )
}

export default function VibesDontScaleSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="span" id="vibesScale.eyebrow" className={styles.eyebrow}>
            The reality check
          </Editable>
          <h2 className={styles.title}>
            <Editable as="span" id="vibesScale.titleBefore">
              {`Vibes don't`}
            </Editable>{' '}
            <Editable as="span" id="vibesScale.titleHighlight" className={styles.highlight}>
              scale
            </Editable>
          </h2>
          <Editable as="p" id="vibesScale.subtitle" multiline className={styles.subtitle}>
            Vibe coding is magical for prototypes. But when the stakes are real, you need more than good vibes.
          </Editable>
        </header>

        <div className={styles.spectrum}>
          <section className={`${styles.spectrumCard} ${styles.vibesCard}`}>
            <div className={styles.cardHeading}>
              <span className={styles.cardEmoji} aria-hidden="true">😎</span>
              <Editable as="h3" id="vibesScale.vibesTitle" className={styles.spectrumLabel}>
                Pure Vibes
              </Editable>
            </div>
            <TraitList id="vibesTraits" items={vibeTraits} />
          </section>

          <div className={styles.gapConnector}>
            <span className={styles.gapLine} aria-hidden="true" />
            <Editable as="span" id="vibesScale.gapLabel" className={styles.gapLabel}>
              The gap
            </Editable>
            <span className={styles.gapArrow} aria-hidden="true">→</span>
          </div>

          <section className={`${styles.spectrumCard} ${styles.productionCard}`}>
            <div className={styles.cardHeading}>
              <span className={styles.cardEmoji} aria-hidden="true">🏗️</span>
              <Editable as="h3" id="vibesScale.productionTitle" className={styles.spectrumLabel}>
                Production Software
              </Editable>
            </div>
            <TraitList id="productionTraits" items={productionTraits} />
          </section>
        </div>

        <aside className={styles.bridge}>
          <span className={styles.bridgeIcon} aria-hidden="true">🔑</span>
          <div className={styles.bridgeCopy}>
            <Editable as="span" id="vibesScale.bridgeTitle" className={styles.bridgeTitle}>
              Bridging the gap
            </Editable>
            <Editable as="p" id="vibesScale.bridgeText" multiline className={styles.bridgeText}>
              Give agents structure, context, and guardrails to turn vibe coding into agentic engineering.
            </Editable>
          </div>
        </aside>
      </div>

      <BottomBar text={<Editable as="span" id="vibesScale.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
