import styled from "styled-components";
import logo from "../../assets/img/taco.png"
import {RiHome3Line, RiPercentLine} from "react-icons/ri"

const StyledContainer = styled.nav`
  background-color: #1f1c2a;
  width: 90px;
  height:100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
`;
const ContenedorItems = styled.ul`
margin-left:15px;
`;
const Logo = styled.img`
    width:50px;
`
const Items = styled.li`
list-style:none;
background-color:red;
display:flex;
justify-content:center;
padding:5px;

`

export const SideBar = () => {
  return (
    <StyledContainer>
      <ContenedorItems>
        <Items>
           <Logo src={logo} alt="logo-dashboard" /> 
        </Items>
        <Items>
           <RiHome3Line/> 
        </Items>
        <Items>
           <RiPercentLine/> 
        </Items>
        </ContenedorItems>
    </StyledContainer>
  );
};
