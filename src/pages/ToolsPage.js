import React from 'react';
import {Link} from 'react-router-dom';
import {tools} from '../data/tools';
import styles from './ToolsPage.module.css';

export default function ToolsPage() {
  return (
    <div className={styles.pageShell}>
      <section className={styles.pageHero}>
        <span className={styles.eyebrow}>CSS library</span>
        <h1>All CSS tools</h1>
        <p>
          Explore reusable UI patterns for loaders, shapes, gradients, shadows, and form
          interactions.
        </p>
      </section>

      <section className={styles.toolGrid}>
        {tools.map(tool => (
          <article key={tool.id} className={styles.toolCard}>
            <div className={`${styles.preview} ${styles[`${tool.accent}Preview`]}`} />
            <div className={styles.body}>
              <span className={styles.tag}>{tool.category}</span>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <div className={styles.metaRow}>
                <span>{tool.difficulty}</span>
                <Link to={`/tools/${tool.slug}`}>View tool →</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
