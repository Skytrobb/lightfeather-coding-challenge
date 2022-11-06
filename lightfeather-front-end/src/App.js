import { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Title } from './components/Title'
import { Select } from './components/Select'
import { Error } from './components/Error'
import { filter } from 'ramda'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid grey;
  border-radius: 10px;
  padding-top: 20px;
  padding: 20px 15px 30px 15px;
  padding-bottom: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-bottom: 15px;
`

const Header = styled.div`
  width: 100%;
  height: 3em;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`

function App() {
  const [inputField, setInputField] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    supervisor: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [supervisorList, setSupervisorList] = useState()
  const [error, setError] = useState()

  const inputHandler = (e) => {
    console.log('handling input', e.target.name)
    setInputField(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    fetchSupervisors()
  }, [])

  const fetchSupervisors = async () => {
    setIsLoading(true)
    try {
      // const response = await axios.get('http://localhost:3001/api/supervisors')
      // console.log('supervisor response', response.data)
      setSupervisorList(data)
      setIsLoading(false)
    } catch (error) {
      console.log('there was an error fetching supervisors', error)
      setIsLoading(false)
    }
  }

  const submitForm = async () => {
    console.log('input fields', inputField)
    
    const filteredInputFields = filter(x => x !== "", inputField)

    try {
      const response = await axios.post('http://localhost:3001/api/submit', filteredInputFields)
      console.log('submission successful', response.data)
      setInputField({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        supervisor: '',
      })
    } catch (error) {
      console.log('there was an error submitting the form', error)
      setError(error.response.data.errors)
    }

  }

  const { firstName, lastName, email, phoneNumber, supervisor } =  inputField
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Title text={"Notification Form"} />
        <FormContainer>
          <form>
            <Input name="firstName" value={firstName} onChange={inputHandler} label={'First Name'} />
            <Input name="lastName" value={lastName} onChange={inputHandler} label={'Last Name'} />
            <Input name="email" value={email} onChange={inputHandler} label={'Email'} />
            <Input name="phoneNumber" value={phoneNumber} onChange={inputHandler} label={'Phone Number'} />
            <Select name="supervisor" value={supervisor} onChange={inputHandler} label={'Supervisor'} options={supervisorList} />
          </form>
        </FormContainer>
        {error && <Error field={error[0].param} message={error[0].msg}/> }
        <Button onClick={() => {
          setError(null)
          submitForm()
        }} text={'Submit'} />
      </MainContainer>
    </AppContainer>
  );
}

export default App;

const data = [
  "b - Cremin, Elijah",
  "b - Denesik, Kobe",
  "b - Gerhold, Jaquan",
  "b - Tremblay, Terrell",
  "c - Hermiston, Laverna",
  "d - Braun, Ida",
  "e - Raynor, Pascale",
  "e - Zieme, Donny",
  "g - Ziemann, Clifton",
  "h - Hoppe, Lisa",
  "i - Bartell, Angelina",
  "i - Bechtelar, Bruce",
  "i - Hane, Kathlyn",
  "j - Wisozk, Gunner",
  "k - Jacobi, Lucious",
  "l - Becker, Anastacio",
  "l - Gutmann, Rodrick",
  "l - McLaughlin, Dorothea",
  "m - Huels, Lavern",
  "n - Schulist, Cali",
  "p - Wyman, Kirsten",
  "q - Collier, Ezequiel",
  "q - Larson, Makayla",
  "r - Runolfsson, River",
  "t - Lockman, Garnett",
  "t - Volkman, Jett",
  "u - Beer, Dolores",
  "u - Deckow, Lavon",
  "u - Lehner, Magdalena",
  "u - Olson, Karson",
  "x - Brakus, Zena",
  "x - D'Amore, Maribel",
  "x - Schamberger, Lydia",
  "y - Sauer, Rashad",
  "z - Oberbrunner, Ricky"
]