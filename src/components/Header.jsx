import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import '../assets/styles/header.scss';

export default function Header() {
  return (
    <header>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container className='d-flex align-items-center'>
          <Image
            src='https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png'
            alt='Image de Mexicain qui fait de la guitare'
            className='header-image'
          />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
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
    </header>
  );
}
