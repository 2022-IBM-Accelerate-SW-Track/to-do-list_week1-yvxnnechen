import React, { Component } from 'react';
import "./About.css";
import picture from "../assets/profile_pic.jpeg";
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src = {picture}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">
            <h1>Yvonne Chen</h1>
          </div>
          <div className="brief_description">
            <p>I am a rising junior majoring in Computer Science at Brooklyn College.</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}