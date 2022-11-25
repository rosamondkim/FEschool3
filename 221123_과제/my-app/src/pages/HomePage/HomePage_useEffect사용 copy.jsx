import { useState, useEffect } from 'react'

import Card from '../../components/Card/Card'
import Cart from '../../components/Cart/Cart'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'

// import { data } from '../../database/data'
import './homePage.css'


export default function HomePage() {
    // console.log(data)
    // const data = null
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(()=>{
        const getData = async () => {
            try {
                const res = await fetch('http://test.api.weniv.co.kr/mall')
                const result = await res.json()
                setItems(result)
                setIsLoaded(true)
            } catch (error) {
                setError(error)
            }
        }
        getData()
    }, [])

    if (error) {
        console.log(error)
        return <div>애러발생!</div>
    } else if (!isLoaded) {
        return <div>로딩중!</div>
    } else {
        return (
            <main className='product'>
            {
                <>
                    <ul className='product-list'>
                        {items.map(item =><Card key={item.id} {...item}/>)}
                    </ul>
                    <Cart/>
                </>
            }
            </main>
        )
    }
}
