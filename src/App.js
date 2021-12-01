import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filter/Filter";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Footer from './Footer';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import About from './Pages/About';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/episodes" element={<Episodes/>}></Route>
        <Route path="/location" element={<Location/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  )
}
const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
  
  useEffect(() => {
    (async function () {
      let data  = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      {/* <Navbar/> */}
      
      <Search setSearch = {setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
          <Filters setStatus={setStatus} setGender={setGender} setPageNumber={setPageNumber} setSpecies={setSpecies}/>
          
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
              </div>
          </div>
        </div>
      </div>

      <Pagination info = {info} setPageNumber = {setPageNumber} pageNumber = {pageNumber}/>


      <Footer/>
    </div>
  );
}

export default App;
