import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


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
  message: PropTypes.string,
}