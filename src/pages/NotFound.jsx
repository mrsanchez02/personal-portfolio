import { Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
      <h1 style={{ color: 'red', fontSize: 100 }}>404</h1>
      <h3>Page Not Found</h3>
      <p>
        <Link to='/'>Go Home</Link>
      </p>
    </Container>
  )
}

export default NotFound
