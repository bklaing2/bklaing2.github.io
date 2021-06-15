import React from 'react'

import rowStyles from './row.module.css'

export default ({icon, title, subtitle, details}) => (
  <div class={rowStyles.row}>
    <div class={`${rowStyles.icon} ${rowStyles.container} glitch`}>
      <div>{icon}</div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>

    <div class={`${rowStyles.container} ${rowStyles.hidden}`}>
      <div style={{ padding: '1rem', minWidth: '60vw', textAlign: 'justify' }}>{details}</div>
    </div>

    <div class={`${rowStyles.title} ${rowStyles.container}`}>
      <div style={{ padding: '1rem', minWidth: '60vw' }}>{title}</div>
    </div>
  </div>
)