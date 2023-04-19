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
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 10px;
  .active {
    background-color: #262736;
  }
  .active a {
    background-color: #e87969;
    color: white;
  }
`;
const Logo = styled.img`
  width: 50px;
`;
const ItemLogo = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom:10px;
`;
const Items = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 14px;
  font-size: 18px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: all .5s ease;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    border-radius: 5px;
    color: #e87969;
  }
  :hover {
    background-color: #262736;
  }
`;

export const SideBar = () => {
  return (
    <StyledContainer>
      <ContenedorItems>
        <ItemLogo>
          <Logo src={logo} alt="logo-dashboard" />
        </ItemLogo>
        <Items className="active">
          <a href="#">
            {" "}
            <RiHome3Line />
          </a>
        </Items>
        <Items>
          <a href="#">
            <RiPercentLine />
          </a>
        </Items>
        <Items>
          <a href="#">
            {" "}
            <RiPieChartLine />
          </a>
        </Items>
        <Items>
          <a href="#">
            <RiMailLine />
          </a>
        </Items>
        <Items>
          <a href="#">
            <RiNotification4Line />
          </a>
        </Items>
        <Items>
          <a href="#">
            {" "}
            <RiSettings4Line />
          </a>
        </Items>
      </ContenedorItems>
      <ContenedorItems>
        <Items>
          <a href="#">
            {" "}
            <RiLogoutCircleLine />
          </a>
        </Items>
      </ContenedorItems>
    </StyledContainer>
  );
};
