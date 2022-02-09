import React from "react";
import ReactDOM from "react-dom";

import Header from 'header/Header';
import { Footer } from 'footer/Footer';
import { Todos } from 'todos/Todos';

import "./index.scss";

const App = () => (
  <>
    <div className="border-4 border-dashed border-red-500 m-2">
      <Header />
    </div>
    <div className="border-4 border-dashed border-blue-500 m-2">
      <Todos />
    </div>
    <div className="border-4 border-dashed border-yellow-500 m-2">
      <Footer />
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
