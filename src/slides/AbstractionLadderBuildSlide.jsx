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
            <span className={styles.arrowLine} aria-hidden="true" />
            <Editable as="span" id="abstractionLadder.arrows.more.title" className={styles.arrowLabel}>Build more</Editable>
            <Editable as="span" id="abstractionLadder.arrows.more.sub" multiline className={styles.arrowSub}>{`Abstraction &\nproductivity`}</Editable>
          </div>
          <div className={`${styles.arrow} ${styles.arrowAlt}`}>
            <span className={styles.arrowLine} aria-hidden="true" />
            <Editable as="span" id="abstractionLadder.arrows.people.title" className={styles.arrowLabel}>More builders</Editable>
            <Editable as="span" id="abstractionLadder.arrows.people.sub" className={styles.arrowSub}>Inclusiveness</Editable>
          </div>
        </aside>
      </div>

      <BottomBar text={<Editable as="span" id="abstractionLadder.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
