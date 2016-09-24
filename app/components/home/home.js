import React from 'react'
import PlantsView from  '../plants/plants-view'
import grassImg from '../../images/grass2.wide.png'
import './home.css'

const Home = (props) => (
    <div className="homeDiv">
      <img id="grassImg" src={grassImg} alt="grass"/>
      <div className="page-header" id="header">
        <h1>Plants</h1>
      </div>
      <PlantsView />

    </div>
);

export default Home;