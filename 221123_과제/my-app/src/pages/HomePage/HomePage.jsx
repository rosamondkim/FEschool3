import Card from '../../components/Card/Card'
import Cart from '../../components/Cart/Cart'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'
import { data } from '../../database/data'
import './homePage.css'

export default function HomePage() {
    // console.log(data)
    // const data = null
    return (
        <main className='product'>
        {
            data !== null ? 
                <>
                    <ul className='product-list'>
                        {data.map(item =><Card key={item.id} {...item}/>)}
                    </ul>
                    <Cart/>
                </>
            : <FailLoadData />
        }
        </main>
    )
}
