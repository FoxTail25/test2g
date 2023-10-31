import React from 'react'
import { SmallBox } from './SmallBox'

export const Middlebox = () => {
    return (
        <div className='box'>
            Middlebox
        <SmallBox/>
        <SmallBox/>
        </div>
    )
}
