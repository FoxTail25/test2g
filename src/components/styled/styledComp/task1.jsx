import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
margin: 0 auto;
align-items: center;
`

const Input = styled.input`
margin:5px;
font-size: 18px;
`

const Button = styled.button`
padding: 5px;
margin: 2px;
background: red;
width: 50%;
border-radius: 8px;
text-align:center;

display:flex;
justify-content: center;
`

export const Task1 = () => {

    const [age, setAge] = useState('')

    function checkAge(event) {
        let ageNum = event.target.value
        ageNum <= 3
            ? setAge(3)
            : setAge(ageNum)
    }

    return (
        <Container>

            <Input placeholder='укажите свой возраст' />
            <Input type='number' value={age} onChange={(event) => checkAge(event)} />
            <Input type='password' />
            <Button disabled>acess</Button>
            <Button>send</Button>
            <Button type='reset'>reset</Button>

        </Container>
    )
}
