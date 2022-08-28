import React from 'react'

export default function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-light">
    <div className="container-fluid container">
      <a className="navbar-brand" href="#">JSON</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Posts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Commnets</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav></div>
  )
}
