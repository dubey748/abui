import React from 'react'
import { PageProps } from './types'
import { Container } from './styles'

const Page :React.FC<PageProps> = ({title, children}) => {
  return (
    <Container data-testid="page-container">
    <h1>{title}</h1>
    {children}
    </Container>
  )
}

export default Page