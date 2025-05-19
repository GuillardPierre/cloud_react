import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import '../assets/styles/header.scss';

export default function Header() {
  return (
    <header>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container className='d-flex align-items-center justify-content-betweenjustify-content-between'>
          <Image
            src='https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png'
            alt='Image de Mexicain qui fait de la guitare'
            className='header-image'
          />
          <Nav className='ms-auto'>
            <Nav.Link href='/'>Menu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
