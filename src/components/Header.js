import {goToHomePage, goToProfilePage, goToLoginPage} from "../Router/coordinator"
import { useNavigate } from "react-router-dom"
import { HeaderContainer } from './styles'




function Header() {

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <button onClick={()=>goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={()=>goToProfilePage(navigate, 'Marcelo')}>
        Ir para página de perfil
      </button>
      <button onClick={()=>goToLoginPage(navigate)}>
        Ir para página de login
      </button>
    </HeaderContainer>
  );
}

export default Header;
