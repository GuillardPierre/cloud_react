import { Badge, Container, Image, Nav, Navbar, Stack } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import '../assets/styles/header.scss';
import logo from '../assets/logo.webp';
import useCart from '../hooks/useCart';

export default function Header() {
  const prevCartCountRef = useRef();
  const { totalCard } = useCart();
  useEffect(() => {
    prevCartCountRef.current = totalCard;
  }, [totalCard]);

  return (
    <header>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Image src={logo} alt='Image de Mexicain qui fait de la guitare' />
          <Navbar.Toggle />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav>
              <Nav.Link href='/'>Accueil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Badge bg='info'>
        {' '}
        {`Le panier est passé de ${prevCartCountRef.current} à ${totalCard}`}
      </Badge>
    </header>
  );
}
