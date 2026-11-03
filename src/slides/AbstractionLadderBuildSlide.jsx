import { BottomBar, Editable, EditableList, Slide, useDisclosure } from '@deckio/deck-engine'
import styles from './AbstractionLadderBuildSlide.module.css'

const tiers = [
  {
    id: 'vibe-coders',
    era: '2020s',
    role: 'Vibe Coders',
    abstraction: 'Human Intent\n(Natural Language)',
    exampleLabel: 'Specifications',
    example: `"summarize product\nby category"`,
    bridge: 'LLMs',
    tone: 'top',
  },
  {
    id: 'software-engineers',
    era: '1960s',
    role: 'Software Engineers',
    abstraction: 'Higher level\nprogramming languages',
    exampleLabel: 'Source code',
    example: 'X = Y + Z\nDO 10 I = 1, 100',
    bridge: 'Compilers',
    tone: 'middle',
  },
  {
    id: 'machine-operators',
    era: '1950s',
    role: 'Machine Operators',
    abstraction: 'Machine Code\n(Assembly)',
    exampleLabel: 'Raw instructions',
    example: 'MOV AX, BX\nADD AX, 2',
    bridge: null,
    tone: 'base',
  },
]

// Exponential wedge: half-width grows as e^(kt) from bottom to top
const EXP_PATH = 'M13.20 100.00 L13.24 97.50 L13.28 95.00 L13.32 92.50 L13.37 90.00 L13.43 87.50 L13.48 85.00 L13.54 82.50 L13.61 80.00 L13.68 77.50 L13.76 75.00 L13.85 72.50 L13.94 70.00 L14.04 67.50 L14.15 65.00 L14.26 62.50 L14.39 60.00 L14.53 57.50 L14.68 55.00 L14.84 52.50 L15.01 50.00 L15.20 47.50 L15.41 45.00 L15.63 42.50 L15.87 40.00 L16.13 37.50 L16.41 35.00 L16.72 32.50 L17.05 30.00 L17.41 27.50 L17.80 25.00 L18.22 22.50 L18.68 20.00 L19.17 17.50 L19.71 15.00 L20.29 12.50 L20.92 10.00 L21.60 7.50 L22.34 5.00 L23.13 2.50 L24.00 0.00 L0.00 0.00 L0.87 2.50 L1.66 5.00 L2.40 7.50 L3.08 10.00 L3.71 12.50 L4.29 15.00 L4.83 17.50 L5.32 20.00 L5.78 22.50 L6.20 25.00 L6.59 27.50 L6.95 30.00 L7.28 32.50 L7.59 35.00 L7.87 37.50 L8.13 40.00 L8.37 42.50 L8.59 45.00 L8.80 47.50 L8.99 50.00 L9.16 52.50 L9.32 55.00 L9.47 57.50 L9.61 60.00 L9.74 62.50 L9.85 65.00 L9.96 67.50 L10.06 70.00 L10.15 72.50 L10.24 75.00 L10.32 77.50 L10.39 80.00 L10.46 82.50 L10.52 85.00 L10.57 87.50 L10.63 90.00 L10.68 92.50 L10.72 95.00 L10.76 97.50 L10.80 100.00 Z'

function ExpArrow({ gradientId }) {
  return (
    <span className={styles.arrowLine} aria-hidden="true">
      <span className={styles.arrowTip} />
      <svg className={styles.arrowBody} viewBox="0 0 24 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--accent)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'var(--accent)', stopOpacity: 0.15 }} />
          </linearGradient>
        </defs>
        <path d={EXP_PATH} fill={`url(#${gradientId})`} />
      </svg>
    </span>
  )
}

export default function AbstractionLadderBuildSlide({ index }) {
  const { isRevealed, setStep } = useDisclosure(tiers.length, { index })

  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <EditableList
          id="abstractionLadder.tiers"
          items={tiers}
          keyOf={(tier) => tier.id}
          className={styles.ladder}
          itemClassName={styles.tierItem}
          onReorder={() => setStep(0)}
        >
          {(tier, position) => {
            const visible = isRevealed(tiers.length - position - 1)

            return (
              <div className={styles.tierGroup}>
                <article className={`${styles.tier} ${styles[tier.tone]} ${visible ? styles.visible : styles.hidden}`}>
                  <div className={styles.role}>
                    <Editable as="span" id={`abstractionLadder.tiers.${tier.id}.role`} className={styles.roleName}>
                      {tier.role}
                    </Editable>
                    <Editable as="span" id={`abstractionLadder.tiers.${tier.id}.era`} className={styles.roleEra}>
                      {tier.era}
                    </Editable>
                  </div>

                  <Editable
                    as="p"
                    id={`abstractionLadder.tiers.${tier.id}.abstraction`}
                    multiline
                    className={styles.abstraction}
                  >
                    {tier.abstraction}
                  </Editable>

                  <div className={styles.example}>
                    <Editable as="span" id={`abstractionLadder.tiers.${tier.id}.exampleLabel`} className={styles.exampleLabel}>
                      {tier.exampleLabel}
                    </Editable>
                    <Editable
                      as="code"
                      id={`abstractionLadder.tiers.${tier.id}.example`}
                      multiline
                      className={styles.exampleCode}
                    >
                      {tier.example}
                    </Editable>
                  </div>
                </article>

                {tier.bridge && (
                  <div className={`${styles.bridge} ${visible ? styles.visible : styles.hidden}`}>
                    <span className={styles.bridgeLine} aria-hidden="true" />
                    <Editable as="span" id={`abstractionLadder.tiers.${tier.id}.bridge`} className={styles.bridgePill}>
                      {tier.bridge}
                    </Editable>
                    <span className={styles.bridgeLine} aria-hidden="true" />
                  </div>
                )}
              </div>
            )
          }}
        </EditableList>

        <aside className={styles.arrows}>
          <div className={styles.arrow}>
            <ExpArrow gradientId="expArrow1" />
            <Editable as="span" id="abstractionLadder.arrows.more.title" className={styles.arrowLabel}>Build more</Editable>
            <Editable as="span" id="abstractionLadder.arrows.more.sub" multiline className={styles.arrowSub}>{`Abstraction &\nproductivity`}</Editable>
          </div>
          <div className={`${styles.arrow} ${styles.arrowAlt}`}>
            <ExpArrow gradientId="expArrow2" />
            <Editable as="span" id="abstractionLadder.arrows.people.title" className={styles.arrowLabel}>More builders</Editable>
            <Editable as="span" id="abstractionLadder.arrows.people.sub" className={styles.arrowSub}>Inclusiveness</Editable>
          </div>
        </aside>
      </div>

      <BottomBar text={<Editable as="span" id="abstractionLadder.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
