import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const StyledButton = styled.button`
  background-color: #008cd9;
  border-radius: 2px;
  border: none;
  color: white;
  width: 258px;
  height: 40px;
  cursor: pointer;
  margin-left: 8px;
`

export const Button = ({text, onClick}) => {
  return (
    <React.Fragment>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </React.Fragment>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}