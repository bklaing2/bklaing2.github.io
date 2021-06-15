import React from 'react'
import projectStyles from './project.module.css'

export default ({ title, subtitle, icon, children }) => (
  <div class={projectStyles.project}>
    <h4 class={projectStyles.title}>{title}</h4>
    <h5 class={projectStyles.subtitle}>{subtitle}</h5>

    {children}
  </div>
)