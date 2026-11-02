import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import sreAgentLogo from '../data/logos/sre-agent.svg'
import styles from './AzureSreAgentSlide.module.css'

const patterns = [
  {
    id: 'incidents',
    title: 'Automate incidents',
    desc: 'On alert, it correlates signals, finds the probable root cause and proposes mitigations.',
  },
  {
    id: 'scheduled',
    title: 'Automate scheduled workflows',
    desc: 'Proactive health checks, compliance sweeps and routine operational tasks.',
  },
  {
    id: 'investigate',
    title: 'Investigate and advise',
    desc: `Ask "what changed in the last hour?" and get grounded, source-cited answers.`,
  },
]

export default function AzureSreAgentSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <img src={sreAgentLogo} alt="Azure SRE Agent logo" className={styles.logo} />
          <div>
            <Editable as="span" id="azureSreAgent.eyebrow" className={styles.eyebrow}>
              sre.azure.com
            </Editable>
            <Editable as="h2" id="azureSreAgent.title" className={styles.title}>
              Azure SRE Agent
            </Editable>
          </div>
        </header>

        <Editable as="p" id="azureSreAgent.subtitle" multiline className={styles.subtitle}>
          An AI agent that connects your Azure resources, observability, incident platforms and code, so you investigate and respond to incidents faster.
        </Editable>

        <EditableList
          id="azureSreAgent.patterns"
          items={patterns}
          keyOf={(p) => p.id}
          className={styles.grid}
          itemClassName={styles.card}
        >
          {(p) => (
            <article>
              <Editable as="h3" id={`azureSreAgent.patterns.${p.id}.title`} className={styles.cardTitle}>
                {p.title}
              </Editable>
              <Editable as="p" id={`azureSreAgent.patterns.${p.id}.desc`} multiline className={styles.cardDesc}>
                {p.desc}
              </Editable>
            </article>
          )}
        </EditableList>

        <Editable as="p" id="azureSreAgent.takeaway" multiline className={styles.takeaway}>
          Evaluation doesn't stop at deploy. Agents keep watching in production.
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="azureSreAgent.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
