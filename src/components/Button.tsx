import React from 'react';

interface ButtonProps {
    text: string,
    color: string,
    size: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <button style={{ color: props.color, fontSize: props.size }}>{props.text}</button>
}

export default Button;