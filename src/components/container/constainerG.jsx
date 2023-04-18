import styled from "styled-components"
const StyleContainer = styled.div`
    width:100%;
`
export const ContainerG = ({children})=>{
    return(<StyleContainer>{children}</StyleContainer>)
}