import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 2px solid black;
  border-radius: 3px;
  width: 100%;
  height: 25px;
  margin-bottom: 15px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: left;
  text-align: left;
`

const Label = styled.label`
  color: #989898;
  margin-bottom: 7px;
`

export const Input = ({label, onChange, value, name}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput onChange={onChange} name={name} value={value} />
    </InputContainer>
  )
}