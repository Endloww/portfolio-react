import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHome, faTasks, faTools, faUser, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    const navLinks = [
        { to: "/", text: "Accueil", icon: faHome },
        { to: "/projets", text: "Mes projets", icon: faTasks },
        { to: "/competences", text: "Mes compétences", icon: faTools },
        { to: "/parcours", text: "Mon parcours", icon: faUser },
        { to: "/contact", text: "Contact", icon: faEnvelope },
    ];
    return (
        <div>
            <>
                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className=" mb-3 fixed-top navBg">
                        <Container fluid>
                            <Navbar.Brand><a href='/'><img className="navbrand" src="./AUBL.png" alt="Description de l'image" /></a></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="custom-toggler">
                                <FontAwesomeIcon icon={faBars} />
                            </Navbar.Toggle>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <h2 className='apropos-title'>A propos</h2>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3 apropos">
                                        {navLinks.map(({ to, text, icon }) => (
                                            <NavLink key={to} to={to} className="nav-link" activeClassName="">
                                                <FontAwesomeIcon icon={icon} className="nav-icon" />
                                                <h2>{text}</h2>
                                            </NavLink>
                                        ))}
                                    </Nav>
                                    <div className="text-at-bottom">
                                        <h5>Suivez-moi sur mes réseaux !</h5>
                                        <hr />
                                        <div className="social-icons">
                                            <a href="https://github.com/Endloww" target="_blank" className='github' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                            <a href="https://www.linkedin.com/in/aurelien-blanchet-7a934a275/" className='linkedin' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                            <a href="https://www.instagram.com/aubl.https/" target="_blank" className='instagram' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                                            <a href="https://wa.link/ygbzv2" target="_blank" className='whatsapp' rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                        </div>
                                    </div>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        </div>
    );
};

export default Navigation;