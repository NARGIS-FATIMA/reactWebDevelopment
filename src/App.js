import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
      </div>
    </Router>
    
    
  </>
  );
}

export default App;
