import styled from 'styled-components'

const One = styled.div`
    color: red;
`
// css 작성하는것을 one이라는 컴포넌트가 가질 수 있게 되었다. 스타일된 컴포넌트

const Two = styled.div`
    color: green;
    font-size: ${(props) => props.size + 'px'};
`

// const Two = styled.div`
//     color: green;
//     font-size: ${({size}) => size + 'px'};
// `
// 컴포넌트니까 프롭스 받을 수 있다 그래서 Two size ={32} 이런식으로 한거임

const Three = styled.div`
    color: ${(옵션) => 옵션.option === '하나' ? 'red' : 'pink'};
`
const Four = styled.div`
    color: 'red';
    ${({border})=>border}
`

function App(){
    return (
        <>
            <One>hello</One>
            <Two size={32}>world</Two>
            <Three option={'하'}>hello</Three>
            <Four border ='border:1px solid black'> hello</Four>
        </>
    )
}

export default App;