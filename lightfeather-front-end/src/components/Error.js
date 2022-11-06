import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
  color: red;
  margin-bottom: 10px;
`

export const Error = ({message}) => {

  return (
    <StyledError>
      Error: {message}
    </ StyledError>
  )
}

Error.propTypes = {
  message: React.propTypes.string,
}