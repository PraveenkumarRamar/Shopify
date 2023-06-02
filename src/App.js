import React,{useState} from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let[cartValue, setCartValue] = useState(0);
  return <>
  {/* <h1>React works</h1>*/}
  <Navbar cartValue={cartValue}/>
  <Header/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <Card setCartValue={setCartValue}/>
                  <Card setCartValue={setCartValue}/>
                  <Card setCartValue={setCartValue}/>
                  <Card setCartValue={setCartValue}/>
                </div>
              </div>
        </section>
<Footer/>
  </>
}

export default App;
