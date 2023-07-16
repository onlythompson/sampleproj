
import Navigation from "./Navigation";
import './Header.css'
import Logo from '../../assets/Logo.svg'

export default function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo"/>
            <Navigation />
        </header>
    );
}