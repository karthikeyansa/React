import './App.css';
import React from 'react';
import Row from './components/row.js';
import requests from './requests.js';
import Banner from './components/banner.js';
import Nav from "./components/nav.js";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS"  islargeRow={true} fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
