import Router from "./Router/Router"
import { createGlobalStyle } from "styled-components"
import { MainContainer } from './styles'

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {

  return (
    <MainContainer>
      <GlobalStyled/>
      <h1>Aula de React Router</h1>
      <Router/>
    </MainContainer>
  )
}

export default App
