export default function Header() {
  function write() {
    alert('yay');
  }
  return (
    <>
      <style jsx>
        {`
        .logo {
          font-weight:bold;
        }
        .header {
          color: #fff;
        }
        .header li {
          list-style:none;
        }
        .header nav, .header ul {
          background:#333;
          padding: 0 1rem;
          border-radius:0.3rem;
          gap:1rem;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .header a {
          color:inherit;
          text-decoration:none;
        }
        .btn-1 {
          color: #fff;
          border-radius: 5px;
          padding: 10px 25px;
          font-family: 'Lato', sans-serif;
          font-weight: 500;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
          box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
            7px 7px 20px 0px rgba(0,0,0,.1),
            4px 4px 5px 0px rgba(0,0,0,.1);
          outline: none;
         }
         
         .btn-1 {
          background: rgb(96,9,240);
          background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
          border: none;
         }
         
         .btn-1:before {
          height: 0%;
          width: 2px;
         }
         
         .btn-1:hover {
          box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
                       -4px -4px 6px 0 rgba(116, 125, 136, .5), 
             inset -4px -4px 6px 0 rgba(255,255,255,.2),
             inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
         }
         
      `}
      </style>
      <header class="header">
        <nav>
          <a href="/" class="logo">
            LOGO
          </a>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a class="btn-1" onClick={write}>
                Write!
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
