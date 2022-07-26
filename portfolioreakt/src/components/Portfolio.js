import React from 'react';

export default function Welcome() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
       <header>
      <h1>Theo Pappas</h1>
    </header>
    <nav class="headnavbar">
      <ul class="pagenav">
        <li class="pagelist">About Me</li>
        <li class="pagelist">My Work</li>
        <li class="pagelist">Contact</li>
      </ul>
    </nav>
    </div>
  );
}