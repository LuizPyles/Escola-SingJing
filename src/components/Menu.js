import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { GiCompactDisc, GiFlute, GiOpenBook } from "react-icons/gi";
import { LuPartyPopper } from "react-icons/lu";
import { MdHeadsetMic } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";
import { FaGuitar, FaDrum, FaItunesNote } from "react-icons/fa";
import "./Menu.components.css";

function Menu() {
  //const [paginaAtual, mudaPaginaAtual] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation().pathname;
  return (
    <div>
      <Navbar color="danger" danger expand="md" className='p-4'>
        <Link to="/" className='navbar-brand'><GiCompactDisc /> SingJing</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={location === '/corda' || location === '/percussao' || location === '/sopro' || location === '/canto' ? 'nav-link active' : 'nav-link'}>
                <GiOpenBook /> Cursos
              </DropdownToggle>
              <DropdownMenu right className='bg-danger'>
              <DropdownItem>
                  <Link to="/canto" className={location === '/canto' ? 'nav-link active' : 'nav-link'}><FaItunesNote /> Canto</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/corda" className={location === '/corda' ? 'nav-link active' : 'nav-link'}><FaGuitar /> Corda</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/percussao" className={location === '/percussao' ? 'nav-link active' : 'nav-link'}><FaDrum /> Percussão</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/sopro" className={location === '/sopro' ? 'nav-link active' : 'nav-link'}><GiFlute /> Sopro</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/eventos" className={location === '/eventos' ? 'nav-link active' : 'nav-link'}><LuPartyPopper /> Eventos</Link>
            </NavItem>
            <NavItem>
              <Link to="/contato" className={location === '/contato' ? 'nav-link active' : 'nav-link'}><MdHeadsetMic /> Contato</Link>
            </NavItem>
            <NavItem>
              <Link to="/sobre" className={location === '/sobre' ? 'nav-link active' : 'nav-link'}><FaBuildingUser /> Sobre</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default Menu