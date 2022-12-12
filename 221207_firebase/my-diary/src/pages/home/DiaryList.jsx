import React from 'react'
import styles from './Home.module.css'

export default function DiaryList({diaries}) {
    return (
        <>
        {diaries.map((item)=>{
            return (
                <li key={item.id}>
                    <strong>{item.title}</strong>
                    <p> {item.text}</p>
                </li>
            )
        })}
        </>
    )
}
