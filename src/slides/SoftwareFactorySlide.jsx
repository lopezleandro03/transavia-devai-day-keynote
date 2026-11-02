import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './SoftwareFactorySlide.module.css'

const tiles = [
  'purple', 'purple', 'symbol', 'purple', 'purple', 'purple', 'purple',
  'purple', 'orange', 'purple', 'symbol', 'green', 'purple', 'deep',
  'deep', 'orange', 'symbol', 'mint', 'symbol', 'mint', 'deep',
  'symbol', 'mint', 'orange', 'mint', 'mint', 'purple', 'symbol',
  'deep', 'gold', 'orange', 'orange', 'symbol', 'mint', 'symbol',
  'dark', 'deep', 'symbol', 'orange', 'orange', 'mint', 'orange',
  'blank', 'deep', 'orange', 'deep', 'gold', 'gold', 'deep',
]

const symbols = ['=', '(', ')', '⌘', '→', '◇', '↗', '<']

export default function SoftwareFactorySlide({ index }) {
  let symbolIndex = 0

  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <section className={styles.message}>
          <Editable as="span" id="softwareFactory.eyebrow" className={styles.eyebrow}>
            The factory mindset
          </Editable>
          <Editable as="h2" id="softwareFactory.shiftFrom" multiline className={styles.shiftFrom}>
            Stop manually translating intent into code.
          </Editable>
          <Editable as="p" id="softwareFactory.shiftTo" multiline className={styles.shiftTo}>
            Engineer systems that create trusted software.
          </Editable>
        </section>

        <div className={styles.factoryVisual} aria-hidden="true">
          <div className={styles.mosaic}>
            {tiles.map((tile, tileIndex) => {
              const symbol = tile === 'symbol' ? symbols[symbolIndex++ % symbols.length] : ''
              return (
                <span key={tileIndex} className={`${styles.tile} ${styles[tile]}`}>
                  {symbol}
                </span>
              )
            })}
          </div>
        </div>
      </div>
      <BottomBar text={<Editable as="span" id="softwareFactory.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
