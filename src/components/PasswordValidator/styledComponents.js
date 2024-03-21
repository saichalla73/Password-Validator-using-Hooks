// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 20px;
  background-color:  #24263c;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
export const Inner=styled.div`
height:100vh;
`

export const Input = styled.input`
  width: 35%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #383a4e;
  border-radius: 4px;
  font-family: Roboto, sans-serif;
`

export const ErrorText = styled.p`
  color: #ef4444;
  margin-top: 5px;
`

export const PasswordValidatorHeading = styled.h2`
  font-family: Roboto, sans-serif;
  color: #ffffff;
  background-color: #24263c;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
`

export const DescriptionText = styled.p`
  font-family: Roboto, sans-serif;
  color: white;
  margin-top: 10px;
`
