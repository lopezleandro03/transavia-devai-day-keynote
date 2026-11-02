import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './GitHubPlatformGrowthSlide.module.css'

const metrics = [
  {
    id: 'pushes',
    label: 'Pushes',
    growth: '3.4x growth',
    tone: 'green',
    points: [
      { id: '2024', year: '2024', value: '5.2B', height: '29%', level: 'base' },
      { id: '2025', year: '2025', value: '6.7B', height: '37%', level: 'mid' },
      { id: '2026', year: '2026', value: '17.9B', height: '100%', level: 'latest' },
    ],
  },
  {
    id: 'commits',
    label: 'Commits',
    growth: '3.4x growth',
    tone: 'pink',
    points: [
      { id: '2024', year: '2024', value: '10.0B', height: '29%', level: 'base' },
      { id: '2025', year: '2025', value: '12.9B', height: '38%', level: 'mid' },
      { id: '2026', year: '2026', value: '34.3B', height: '100%', level: 'latest' },
    ],
  },
  {
    id: 'merged-prs',
    label: 'Merged pull requests',
    growth: '3.2x growth',
    tone: 'ink',
    points: [
      { id: '2024', year: '2024', value: '402M', height: '31%', level: 'base' },
      { id: '2025', year: '2025', value: '538M', height: '41%', level: 'mid' },
      { id: '2026', year: '2026', value: '1.3B', height: '100%', level: 'latest' },
    ],
  },
  {
    id: 'actions-jobs',
    label: 'Actions jobs',
    growth: '5.7x growth',
    tone: 'purple',
    points: [
      { id: '2024', year: '2024', value: '8.0B', height: '18%', level: 'base' },
      { id: '2025', year: '2025', value: '14.0B', height: '31%', level: 'mid' },
      { id: '2026', year: '2026', value: '45.4B', height: '100%', level: 'latest' },
    ],
  },
]

function YearBar({ metricId, point }) {
  return (
    <div className={`${styles.barColumn} ${styles[point.level]}`} style={{ '--bar-height': point.height }}>
      <Editable as="span" id={`githubGrowth.metrics.${metricId}.${point.id}.value`} className={styles.barValue}>
        {point.value}
      </Editable>
      <div className={styles.barTrack} aria-hidden="true">
        <span className={styles.barFill} />
      </div>
      <Editable as="span" id={`githubGrowth.metrics.${metricId}.${point.id}.year`} className={styles.barYear}>
        {point.year}
      </Editable>
    </div>
  )
}

export default function GitHubPlatformGrowthSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="span" id="githubGrowth.eyebrow" className={styles.eyebrow}>
            2024–2026
          </Editable>
          <Editable as="h2" id="githubGrowth.title" className={styles.title}>
            Agentic Software Development Is Bending the GitHub Growth Curve
          </Editable>
          <Editable as="p" id="githubGrowth.subtitle" className={styles.subtitle}>
            Annual GitHub activity surged across pushes, commits, merged pull requests, and Actions jobs.
          </Editable>
        </header>

        <EditableList
          id="githubGrowth.metrics"
          items={metrics}
          keyOf={(metric) => metric.id}
          className={styles.metrics}
          itemClassName={styles.metricItem}
        >
          {(metric) => (
            <article className={`${styles.metricChart} ${styles[metric.tone]}`}>
              <div className={styles.metricTop}>
                <Editable as="h3" id={`githubGrowth.metrics.${metric.id}.label`} className={styles.metricLabel}>
                  {metric.label}
                </Editable>
                <Editable as="span" id={`githubGrowth.metrics.${metric.id}.growth`} className={styles.growth}>
                  {metric.growth}
                </Editable>
              </div>

              <div className={styles.bars}>
                <YearBar metricId={metric.id} point={metric.points[0]} />
                <YearBar metricId={metric.id} point={metric.points[1]} />
                <YearBar metricId={metric.id} point={metric.points[2]} />
              </div>
            </article>
          )}
        </EditableList>

        <Editable as="p" id="githubGrowth.source" className={styles.source}>
          Includes public and private repositories. Each year is the 12 months ending September 30.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="githubGrowth.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
