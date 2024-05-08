import React from "react"
import styled from "styled-components"
import searchIcon from "assets/searchIcon.png"

const HeaderMain = styled.div`
    background-color : aqua;
    top : 0;
    width : 100%;
    height : 70px;
    display : flex;
    align-items : center;
    border-bottom : solid 2px #30cccc56;
`
const HeaderLeftComponent = styled.div`
    width : 30%;
    height:100%;
    display : flex;
    justify-content : flex-start;
    align-items : center;
`

const HeaderRightComponent = styled.div`
    width : 70%;
    height : 100%;
    display : flex;
    justify-content : flex-end;
    align-items : center;

`
const HeaderIcon = styled.div`
    position : relative;
    background-color : aqua;
    width : 30px;
    height : 30px;
    left : 20px;
    border : solid 10px white;
    border-radius : 50%;
`

const SearchBox = styled.div`
    position : relative;
    background-color : white;
    width : 40%;
    height : 30px;
    border-radius : 10px;
    display : flex;
    justify-content : end;
    align-items : center;
    margin-right : 20px;
    
`

const SearchIcon = styled.img`
    width : 20px;
    height : 20px;
    position : relative;
    right : 10px;
`

const ProfileIcon = styled.div`
    background-color : white;
    width : 35px;
    height : 35px;
    position : relative;
    margin-right: 20px;
    border-radius : 50%;
`

function Header(){
    return (
        <div>
            <HeaderMain>
                <HeaderLeftComponent>
                    <HeaderIcon/>
                </HeaderLeftComponent>
                <HeaderRightComponent>
                    <SearchBox>
                        <SearchIcon src={searchIcon}/>
                    </SearchBox>
                    <ProfileIcon/>
                </HeaderRightComponent>
            </HeaderMain>
        </div>
    )
}

export default Header;