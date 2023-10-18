/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Item = ({ links, title }) => {
    return (
        <ul>
            <h1 className='mb-1 font-semibold'>{title}</h1>
            {links.map((link) => (
                <li key={link.name}>
                    <a className='text-gray-400 hover:text-televersantBlue duration-300 text-sm cursor-pointer leading-6' href={link.link}>{link.name}</a>
                </li>
            ))

            }
        </ul>
    )
}

export default Item;