import { createContext } from 'react'

async function callAPI(){
    const res = await fetch('http://test.api.weniv.co.kr/mall')
    const result = await res.json()
    return result
}

export const callAPIResponse = createContext(callAPI())