export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
      }}
    >
      <img
        src='https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png'
        style={{ height: '100%' }}
      />
      <h1>This is le header !</h1>
      <nav>
        <ul>
          <a href='./accueil'>
            <li>Menu</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
