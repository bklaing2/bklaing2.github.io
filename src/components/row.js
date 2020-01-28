import React from 'react'

import rowStyles from './row.module.css'

export default ({hidden, icon, title}) => (
  <div class={rowStyles.row}>
    <div class={`${rowStyles.icon} ${rowStyles.container}`}>
      <div style={{ padding: '1rem' }}>{icon}</div>
    </div>

    <div class={`${rowStyles.container} ${rowStyles.hidden}`}>
      <div style={{ padding: '1rem', minWidth: '60vw', textAlign: 'justify' }}>{hidden}</div>
    </div>

    <div class={`${rowStyles.title} ${rowStyles.container}`}>
      <div style={{ padding: '1rem', minWidth: '60vw' }}>{title}</div>
    </div>
  </div>
)