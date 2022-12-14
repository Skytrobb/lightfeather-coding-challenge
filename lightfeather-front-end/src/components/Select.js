import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const StyledSelect = styled.select`
  border: 2px solid black;
  border-radius: 3px;
  width: 103%;
  height: 31px;
  margin-bottom: 15px;
  background-color: white;
`

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-itmes: left;
  text-align: left;
`

const Label = styled.label`
  color: #989898;
  margin-bottom: 7px;
`

export const Select = ({label, onChange, value, name, options}) => {
  return (
    <SelectContainer>
      <Label>{label}</Label>
      <StyledSelect onChange={onChange} name={name} value={value}>
        <option value="" disabled hidden>Choose Supervisor here</option>
        { options && options.map((element, index) => (<option key={index} value={element}>{element}</option>)) }
      </StyledSelect>
    </SelectContainer>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array
}
