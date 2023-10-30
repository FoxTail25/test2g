import React from 'react'
import styled from 'styled-components';

const Text1 = styled.p`
color: orangered;
font-weight:bold;
background:blue;
`



export const StyleComp = () => {
  return (
    <div>
        <Text1>text</Text1>
        <p>text</p>
        <p>text</p>
    </div>
  )
}
