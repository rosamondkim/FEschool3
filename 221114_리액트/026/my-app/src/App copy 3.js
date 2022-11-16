import styled, {css} from 'styled-components'

const One = css`
    color: red;
`
const Two = css`
    font-size: 32px;
`

const Three = styled.div`
    ${One}
    ${Two}
`

function App(){
    return (
        <>
            <Three>10</Three>
        </>
    )
}

export default App;