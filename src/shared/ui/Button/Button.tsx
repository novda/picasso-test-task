import React from 'react';
import './Button.scss'

interface Props {
    text: string
    onClick: () => void
}

const Button: React.FC<Props> = ({ text, onClick }) => {
    return <button className='Button' onClick={onClick}>{text}</button>
    
}

export default Button
