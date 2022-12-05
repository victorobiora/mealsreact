import Header from "./Components/Layout/Header";
import { React, Fragment } from 'react';
import Meals from "./Components/Meals/Meals";

function App() {
  return <Fragment>
            <Header/>
            <main>
                <Meals/>
            </main>
         </Fragment>
}

export default App;
