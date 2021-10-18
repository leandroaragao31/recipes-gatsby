import React from 'react'

export function Header({
    title,
    img
}) {
    return (
        <div>
            <p>{title}</p>
            <img src={img} alt="" />
        </div>
    )
}
