import { EmailOutlined, Facebook, Instagram, Phone, Pinterest, Place, X } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container=styled.div`
    display:flex;
    ${mobile({
        flexDirection:"column",
    })};
`;
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;  

const Logo=styled.h1``;
const Desc=styled.p`
margin:20px 0px;
`;
const SocialContainer=styled.div`
display:flex;
`;
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
background-color:${props=>props.colour}
`;
const Center=styled.div`
    flex:1;
    padding:20px;
    ${mobile({
        display:"none",
    })};
`;
const Title=styled.h3`
margin-bottom:30px;
`;
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`;
const Right=styled.div`
    flex:1;
    padding:20px;
    ${mobile({
        backgroundColor:"#eee",
    })};
`;
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;
const Payment=styled.img`
    width:50%;
`;

function Footer(){
    return(
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for 
                    those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                     Cicero are also reproduced in their exact original form, accompanied by English versions
                      from the 1914 translation by H. Rackham.</Desc>
                <SocialContainer>
                <SocialIcon colour=" #0165E1">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon colour=" #E1306C">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon colour="#14171a">
                    <X/>
                </SocialIcon>
                <SocialIcon colour="#E60023">
                    <Pinterest/>
                </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Kids Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wsihlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Place style={{marginRight:"20px"}}/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu sollicitudin elit.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"20px"}}/>
                    +10 123 456 7890
                </ContactItem>
                <ContactItem>
                    <EmailOutlined style={{marginRight:"20px"}}/>
                    contact@lama.dev
                </ContactItem>
                <Payment src={require("../assets/payment.png")}/>
            </Right>
        </Container>
    )
}
export default Footer;