import React , {useState} from "react";
import { Container, LogoImg, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./Navbar.elements";
import { FaJava,FaAlignJustify,FaEnvelope,FaCameraRetro,FaMugHot,FaStore } from "react-icons/fa";
import { IconContext } from "react-icons";





const Navbar = ()=> {
          const [menuOption, setMenuOption]  = useState(false)
    
    return(
        <Container>
            <Wrapper>
                {/* estilos globales a los iconos */}
                <IconContext.Provider value={{ style: {fontSize: "2em"}}}>
                    <LogoImg>
                        <FaJava/>
                        <p>
                            CoffyTime
                        </p>
                    </LogoImg>
                    
                    <MobileIcon onClick={() => setMenuOption(!menuOption)}>
                        <FaAlignJustify/>
                    </MobileIcon>

                    <Menu open={menuOption}>
                        <MenuItem>
                            <MenuItemLink onClick={() => setMenuOption(!menuOption)}>
                            <div>
                            <FaStore/>
                            HOME
                            </div>
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setMenuOption(!menuOption)}>
                            <div>
                            <FaCameraRetro/>
                            GALERIA
                            </div>
                            </MenuItemLink>
                        </MenuItem> <MenuItem>
                            <MenuItemLink onClick={() => setMenuOption(!menuOption)}>
                            <div>
                            <FaMugHot/>
                            PRODUCTOS
                            </div>
                            </MenuItemLink>
                        </MenuItem> 
                        <MenuItem>
                            <MenuItemLink onClick={() => setMenuOption(!menuOption)}>
                            <div>
                            <FaEnvelope/>
                            CONTACTO
                            </div>
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>

    )
}



export default Navbar;