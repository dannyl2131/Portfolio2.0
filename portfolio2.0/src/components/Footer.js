import React from 'react';

export default function Footer(){
    return (
        <div className="container" fixed='bottom'>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        Danny Lindquist
      </a>
      <span className="mb-3 ml-3 mb-md-0 text-muted"><a href='https://github.com/dannyl2131'>Github</a>  <a href='www.linkedin.com/in/daniel-lindquist0a921ab'>LinkedIn</a> <a href='/'>Dice</a></span>
      <span className="mb-3 ml-3 mb-md-0 text-muted">  </span>
      <span className="mb-3 ml-3 mb-md-0 text-muted"></span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
    </ul>
  </footer>
</div>
    )
}