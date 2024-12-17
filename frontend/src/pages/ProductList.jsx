import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Container=styled.div``
;
const Title=styled.h1`
margin:20px;
`;
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;

`;
const Filter=styled.div`
margin:20px;
${mobile({
    margin:"0px 10px",
    display:"flex",
    flexDirection:"column",
})};
`;
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({
    marginRight:"0px",
})};
`;
const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({
    margin:"10px 0px",
})};
`;
const Options=styled.option`
`;



function ProductList(){
    const location= useLocation();
    const cat= location.pathname.split("/")[2];
    const [filters,setFilters]= useState({});
    const [sort, setSort]= useState("newest");

    const handleFilter=(event)=>{
        const value=event.target.value;
        setFilters({
            ...filters,[event.target.name]:value
        })
    }
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Options disabled>
                            Color
                        </Options>
                        <Options>white</Options>
                        <Options>blue</Options>
                        <Options>yellow</Options>
                        <Options>blue</Options>
                        <Options>black</Options>
                        <Options>red</Options>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                        <Options disabled> 
                            Size
                        </Options>
                        <Options>XS</Options>
                        <Options>S</Options>
                        <Options>M</Options>
                        <Options>L</Options>
                        <Options>XL</Options>
                        <Options>XXL</Options>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(event)=>setSort(event.target.value)}>
                        <Options value="newest">Newest</Options>
                        <Options value="asc">Price (asc)</Options>
                        <Options value="desc">Price (desc)</Options>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default ProductList;