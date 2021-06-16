import React from 'react'

import style from './project.module.css'


export default ({ title, subtitle, icon, children }) => (
  <div class={style.project}>
    <div class={style.heading}>
      <h4 class={style.title}>{title}</h4>
      <h5 class={style.subtitle}>{subtitle}</h5>
    </div>

    {children}
  </div>
)