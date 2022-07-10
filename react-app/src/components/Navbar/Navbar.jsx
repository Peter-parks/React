import React, { useState } from "react";
import { Container, LogoImg, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./Navbar.elements";
import { FaJava, FaAlignJustify, FaEnvelope, FaCameraRetro, FaMugHot, FaStore } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";





const Navbar = () => {

    /* hook para el estado del menu, asi poder desplegarlo */
    const [menuOption, setMenuOption] = useState(false)

    return (
        <Container>
            <Wrapper>
                {/* estilos globales a los iconos */}
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoImg>
                        <FaJava />
                        <p>
                            CoffyTime
                        </p>
                    </LogoImg>

                    <MobileIcon onClick={() => setMenuOption(!menuOption)}>
                        <FaAlignJustify />
                    </MobileIcon>

                    <Menu open={menuOption}>
                        <MenuItem>
                            <Link to='/home'>
                                <MenuItemLink onClick={() => setMenuOption(!menuOption)} >
                                <div>
                                    <FaStore />
                                    HOME 
                                </div>
                                </MenuItemLink>
                            </Link>    
                        </MenuItem>
                        <MenuItem>
                            <Link to='/galeria'>
                                <MenuItemLink onClick={() => setMenuOption(!menuOption)}>
                                    <div>
                                    
                                        <FaCameraRetro />
                                        GALERIA
                                    
                                    </div>
                                </MenuItemLink>
                            </Link>    
                        </MenuItem> 
                        <MenuItem>
                            <Link to='/producto'>
                                <MenuItemLink onClick={() =>    setMenuOption(!menuOption)}>
                                    <div>
                                        <FaMugHot />
                                        PRODUCTOS
                                    </div>
                                </MenuItemLink>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/contacto'>
                                <MenuItemLink onClick={() => setMenuOption(!menuOption)}>
                                    <div>
                                        <FaEnvelope />
                                        CONTACTO
                                    </div>
                                </MenuItemLink>
                            </Link>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>

    )
}



export default Navbar;