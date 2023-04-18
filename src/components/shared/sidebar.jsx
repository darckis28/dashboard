import styled from "styled-components";
import logo from "../../assets/img/taco.png";
import {
  RiHome3Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification4Line,
  RiSettings4Line,
  RiLogoutCircleLine,
} from "react-icons/ri";

const StyledContainer = styled.nav`
  background-color: #1f1c2a;
  width: 80px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContenedorItems = styled.ul`
  margin:20px 0;
  display:flex;
  flex-direction:column;
  gap:2px;
  padding-left:10px;
  .logo{
    background-color:#1f1c2a;
  }
`;
const Logo = styled.img`
  width: 50px;
`;
const Items = styled.li`
  list-style: none;
  background-color: #262736;
  display: flex;
  justify-content: center;
  padding: 14px;
  font-size:18px;
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;
  a{
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    background-color:#E87969;
    padding:8px 12px;
    border-radius:5px;
  }
`;

export const SideBar = () => {
  return (
    <StyledContainer>
      <ContenedorItems>
        <Items className="logo">
          <Logo src={logo} alt="logo-dashboard" />
        </Items>
        <Items>
          <a href="#"> <RiHome3Line /></a>
         
        </Items>
        <Items>
          <a href="#"><RiPercentLine /></a>
          
        </Items>
        <Items>
          <a href="#"> <RiPieChartLine /></a>
         
        </Items>
        <Items>
        <a href="#"><RiMailLine /></a>
          
        </Items>
        <Items>
        <a href="#"><RiNotification4Line /></a>
          
        </Items>
        <Items>
        <a href="#"> <RiSettings4Line /></a>
         
        </Items>
      </ContenedorItems>
      <ContenedorItems>
        <Items>
        <a href="#"> <RiLogoutCircleLine /></a>
         
        </Items>
      </ContenedorItems>
    </StyledContainer>
  );
};
