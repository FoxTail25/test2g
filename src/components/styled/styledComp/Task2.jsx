import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
margin: 0 auto;
align-items: center;
`

const Input = styled.input`
background: ${(props)=> (props.$first ? 'yellow': 'green')};
margin:5px;
font-size: 18px;
`

const Button = styled.button`
padding: 5px;
margin: 2px;
width: 50%;
border-radius: 8px;
text-align:center;
color: ${(p)=> p.$warm ? 'red': 'green'};
background: ${(p)=> p.$warm ? 'yellow': 'white'};

display:flex;
justify-content: center;
`

const MdButton = styled(Button) `
background: blue;
color: violet;
`

export const Task2 = () => {
 

 
    return (
    <Container>
        <Input $first/>
        <Input />
        <Button $warm>test</Button>
        <Button>test</Button>
        <MdButton>test</MdButton>

    </Container>
  )
}
