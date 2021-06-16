import React from 'react'

import style from './project.module.css'


export default ({ title, subtitle, icon, children }) => (
  <div class={style.project}>
    <div class={style.icon}>
      {icon}
    </div>

    <div class={style.details}>
      <div class={style.container}>
        {children}
        {console.log(children)}
      </div>
    </div>

    <div class={style.heading}>
      <div class={style.container}>
        <h4 class={style.title}>{title}</h4>
        <h5 class={style.subtitle}>{subtitle}</h5>
      </div>
    </div>

  </div>
)