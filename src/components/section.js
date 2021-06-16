import React from 'react'

import style from './section.module.css'


export default ({ title, subtitle, children }) => (
  <section class={style.section}>
    <h2 class={style.title}>{title}</h2>
    {/* <h3 class={style.subtitle}>{subtitle}</h3> */}

    <div class={style.content}>
      {children}
    </div>
  </section>
)