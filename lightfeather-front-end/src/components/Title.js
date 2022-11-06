import styled from 'styled-components'
import React from 'react'
import lightfeatherlogo from '../images/lightfeatherstacked.jpeg'
import PropTypes from 'prop-types'


const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom: 30px;
`

const TitleText = styled.div`
  font-size: 20px;
  font-family: arial;
  margin-right: 35px;
  font-weight: 700;
`
const Logo = styled.img`
  width: 85px;
`

export const Title = ({text}) => {
  return (
    <TitleContainer>
      <TitleText>{text}</TitleText>
      <Logo src={lightfeatherlogo} />
    </TitleContainer>
  )
}

Title.propTypes = {
  text: PropTypes.string
}