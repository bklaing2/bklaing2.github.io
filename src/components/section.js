import React from 'react'
import sectionStyles from './section.module.css'

export default ({ title, subtitle, children }) => (
  <section class={sectionStyles.section}>
    <h2 class={sectionStyles.title}>{title}</h2>
    <h3 class={sectionStyles.subtitle}>{subtitle}</h3>

    <div class={sectionStyles.content}>
      {children}
    </div>
  </section>
)