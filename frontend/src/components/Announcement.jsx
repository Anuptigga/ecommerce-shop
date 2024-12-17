import styled from "styled-components";
const Container=styled.div`
height:30px;
display:flex;
align-items:center;
justify-content:center;
background:Teal;
color:white;
font-size:14px;
font-weight:600;`
function Announcement(){
    return(
        <Container>
            Super Deal! Free shipping on orders above Rs.499/-
        </Container>
    )
}
export default Announcement;