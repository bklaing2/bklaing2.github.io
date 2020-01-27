import React from 'react'
import Helmet from 'react-helmet'

function Meta({title}) {

  title = title ? title + ' | Bryceson Laing' : 'Bryceson Laing'

  return (
    <Helmet
      title={`Bryceson Laing`}
      titleTemplate={title}
    />
  )
}

export default Meta