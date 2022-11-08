import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Tab from "react-router";
import { publicUseEffectRoute } from "../../../route/RouteUseEffect";
import { publicUseStateRoute } from "../../../route/RouteUseState";
import { publicUseRefRoute } from "../../../route/RouteUseRef";
import { publicUseCallbackRoute } from "../../../route/RouteUseCallBack";
import { publicOtherRoute } from "../../../route/RouteOther";
function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dropdownitemlist = [
    { name: "Use State", routes: publicUseStateRoute },
    { name: "Use Effect", routes: publicUseEffectRoute },
    { name: "Use Ref", routes: publicUseRefRoute },
    { name: "Use CallBack", routes: publicUseCallbackRoute },
    { name: "Other", routes: publicOtherRoute },
  ];
  return (
    <div>
      <Navbar {...args} expand={true}>
        <NavbarBrand href="/">React Hook</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {dropdownitemlist.map((item, index) => {
              return (
                <div key={index}>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {item.name}
                    </DropdownToggle>
                    <DropdownMenu>
                      {item.routes.map((route, index) => {
                        if (route.root) return;
                        return (
                          <DropdownItem key={index}>
                            <Link className="nav-link active" to={route.path}>
                              {route.name}
                            </Link>
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              );
            })}
            <NavItem>
              <NavbarText></NavbarText>
            </NavItem>

            {/* <DropdownToggle nav caret>
                UseEffectComponents
              </DropdownToggle>
              <DropdownMenu>
                {console.log(publicUseStateRoute)}
                {publicUseEffectRoute.map((route, index) => {
                    if(route.root) return;                    
                    return (
                      <DropdownItem key={index}>
                        <NavLink href={route.path}>{route.name}</NavLink>
                      </DropdownItem>
                    );
                })}
              </DropdownMenu> */}

            {/* <NavItem active={false}>
              <form>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </NavItem>
            <NavItem active={false}>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </NavItem> */}
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
