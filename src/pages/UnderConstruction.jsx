import { Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
  return (
    <Container>
      <h1 style={{ color: 'Peru', fontSize: 100 }}>204</h1>
      <h3>Section underconstruction</h3>
      <p>
        <Link to='/'>Go Home</Link>
      </p>
    </Container>
  )
}

export default UnderConstruction
