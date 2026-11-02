import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import { sddFrameworks } from '../data/sddFrameworks.js'
import styles from './SddFrameworksSlide.module.css'

export default function SddFrameworksSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="span" id="sddFrameworks.eyebrow" className={styles.eyebrow}>
            Spec-driven development
          </Editable>
          <Editable as="h2" id="sddFrameworks.title" className={styles.title}>
            The spec-driven toolbox
          </Editable>
          <Editable as="p" id="sddFrameworks.subtitle" multiline className={styles.subtitle}>
            A fast-growing ecosystem is turning specification into a repeatable engineering practice.
          </Editable>
        </header>

        <EditableList
          id="sddFrameworks.items"
          items={sddFrameworks}
          keyOf={(f) => f.id}
          className={styles.grid}
          itemClassName={styles.item}
        >
          {(f) => (
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <img src={f.logo} alt="" className={styles.logo} />
                <div className={styles.names}>
                  <Editable as="h3" id={`sddFrameworks.items.${f.id}.name`} className={styles.name}>{f.name}</Editable>
                  <Editable as="span" id={`sddFrameworks.items.${f.id}.maker`} className={styles.maker}>{f.maker}</Editable>
                </div>
              </div>
              <Editable as="p" id={`sddFrameworks.items.${f.id}.desc`} className={styles.desc}>{f.desc}</Editable>
              <Editable
                as="span"
                id={`sddFrameworks.items.${f.id}.tag`}
                className={`${styles.tag} ${f.tag === 'Commercial' ? styles.tagCommercial : f.tag === 'Agent skill' ? styles.tagSkill : ''}`}
              >
                {f.tag}
              </Editable>
            </article>
          )}
        </EditableList>

        <Editable as="p" id="sddFrameworks.takeaway" className={styles.takeaway}>
          Different tools, one principle: the spec becomes the source of truth.
        </Editable>
      </div>
      <BottomBar text={<Editable as="span" id="sddFrameworks.footer">Transavia DevAI Day</Editable>} />
    </Slide>
  )
}
