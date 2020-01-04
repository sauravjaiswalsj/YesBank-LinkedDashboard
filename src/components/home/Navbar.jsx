import React, {useState} from "react";
import './Navigation.css'
import {
  Collapse, 
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Container,
} from "reactstrap"

const NavBar =(props)=>{

        const [isOpen, setIsOpen] = useState(false);
        // const [colorChange, setColorChange] = useState();
        // const changeColor = () => {
        //   if (
        //     document.documentElement.scrollTop > 99 ||
        //     document.body.scrollTop > 99
        //   ) {
        //     this.setState({
        //       color: "bg-info"
        //     });
        //   } else if (
        //     document.documentElement.scrollTop < 100 ||
        //     document.body.scrollTop < 100
        //   ) {
        //     this.setState({
        //       color: "navbar-transparent"
        //     });
        //   }
        // };
        const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="Navigation">
        <Navbar style={{background:'transparent', color:'white'}} className="text-white sticky-top navbar-light" expand="md" >
        <Container>
        <NavbarBrand href="/" className="text-white">Yes Bank </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/" className="text-white">Open Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="text-white">Digital</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
                Internet Banking
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Phone Banking
                </DropdownItem>
                <DropdownItem>
                  Fixed Deposits
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Recurring Deposits
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
        </Collapse>
        </Container>
        <Nav className="mr-auto" navbar>
        <NavItem>
                <NavLink href="/components/" className="text-white" style={{textDecoration:'none'}}><span>Login </span></NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/components/" className="text-white" style={{textDecoration:'none'}}><span>Sign up </span></NavLink>
        </NavItem> 
        </Nav>
      </Navbar>
    </div>
    );
};

export default NavBar;
