import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-secondary mx-2 my-4 px-4 pb-5 rounded">
  <h1 className="display-4">A Warm Welcome!</h1>
  {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/> */}
  <p>
Aquí tienes un texto de ejemplo de Lorem Ipsum:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p className="lead">
    <a className="btn btn-primary btn-md" href="https://4geeks.com/" role="button">Call to action!</a>
  </p>
</div>
	);
};

export default Jumbotron;