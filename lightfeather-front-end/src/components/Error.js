import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
  color: red;
  margin-bottom: 10px;
`

export const Error = ({field, message}) => {

  return (
    <StyledError>
      Error in {field}: {message}
    </ StyledError>
  )
}