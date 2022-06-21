import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 70px;
    background-color: #2a201e;

`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoImg = styled.div`
    
    margin-left: 0.5rem;
    display: flex;
    align-items:center;
    font-size: 2.2rem;
    font-family: sans-serif;
     
    p{
        padding: 10px;
        
        font-weight: 100;
        color: #e0792a;
    }

    svg{
        fill: #e0792a;
        
    }

`;

export const Menu = styled.ul`

    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    

    @media screen and (max-width: 960px){
        background-color: #2a201e;
        position: absolute;
        top: 70px;
        
        right: ${({open}) => (open ? "0" : "-100%")};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.7s all ease;
    }
    
`;

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px){

        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`;

export const MenuItemLink = styled.a`

    heigth: 100%;
    display: flex;
    justify-content:center;
    margin-top: 20px;
    
    padding: 0.5rem 2.5rem;
    color: #bc8153;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 800;
    cursor: pointer;
    transition: 0.5s all ease;
    
    div {
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items:center;
       
        
         

        svg{
            
            display:none ;
            fill: #e0792a;
            padding-right: 7px;    
            
        }
    }

    &:hover{
        
        color: #fff;
        background-color: #e0792a;
        transition: 0.5s all ease;
    }



    @media screen and (max-width: 960px){
       width:100%;

       div{
            width:30%;
            justify-content: left;
        
        svg{
            display:flex;
            
       
        }

    }

    @media screen and (max-width: 880px){
        div{
            width:40%;
            justify-content: left;
        
        svg{
            display:flex;
            
       
        }
    }

    @media screen and (max-width: 500px){
        div{
            width:60%;
            justify-content: left;
        
        svg{
            display:flex;
            
       
        }
    }

    @media screen and (max-width: 260px){
        div{
            width:100%;
            justify-content: left;
        
        svg{
            display:flex;
            
       
        }
    }

      
    

`;

export const MobileIcon = styled.div`

    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-right: 10px;
       
        svg{

            
            fill: #e0792a;
        
        
        }
    }


`;

