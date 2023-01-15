import Menu from "../../components/menu/menu.component";
import { FolderContainer, HomeContainer, LogoTextoContainer } from "./home.styles";
import { ReactComponent as LogoPastaSvg } from '../../assets/pasta-ja.svg';
import { ReactComponent as TextoLogoSvg } from '../../assets/texto-logo.svg';


const Home = () => {

    return (
        <>
            
            <HomeContainer>
                <LogoTextoContainer>
                    <TextoLogoSvg />
                </LogoTextoContainer>

                <Menu />

                <FolderContainer>
                    <LogoPastaSvg />
                </FolderContainer>
            </HomeContainer>
        </>
    )
}

export default Home;