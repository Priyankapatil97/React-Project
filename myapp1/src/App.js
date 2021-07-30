import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


import { BrowserRouter, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <NavMenu />

      <Route exact={true} path="/page1" component={Page1} />
      <Route exact={true} path="/page2" component={Page2} />
      <Route exact={true} path="/page3" component={Page3} />
      {/* <Route exact={true} path="/hw" component={HelloWorld} />
      <Route exact={true} path="/hu" component={HelloUniverse} /> */}
      <Route exact={true} path="/" component={Page1} />
    </BrowserRouter>
  );
}

function NavMenu() {
  return (
    <div>
      <Link to="/hw"> Hellooo</Link>
      <Link to="/hu"> Universe</Link>
      <Link to="/page1"> Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
    </div>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page1 Lonavala</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique
        aut sapiente delectus, dignissimos nesciunt perferendis velit ad
        repellendus facere consequuntur debitis! Quidem iste dolor veniam
        accusamus, molestiae commodi modi!
      </p>

      <h1>Page1 Lonavala</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique
        aut sapiente delectus, dignissimos nesciunt perferendis velit ad
        repellendus facere consequuntur debitis! Quidem iste dolor veniam
        accusamus, molestiae commodi modi!
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>Page2 Goa</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique
        aut sapiente delectus, dignissimos nesciunt perferendis velit ad
        repellendus facere consequuntur debitis! Quidem iste dolor veniam
        accusamus, molestiae commodi modi!
      </p>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <h1>Page3 Delhi</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique
        aut sapiente delectus, dignissimos nesciunt perferendis velit ad
        repellendus facere consequuntur debitis! Quidem iste dolor veniam
        accusamus, molestiae commodi modi!
      </p>
    </div>
  );
}

