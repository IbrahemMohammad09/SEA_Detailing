import {Helmet} from 'react-helmet-async'
import React from 'react'

const MainTitle = ({title}) => {
  return (
    <Helmet>
        {<title>SEA DETAILING | {title}</title>}
    </Helmet>
  )
}

export default MainTitle