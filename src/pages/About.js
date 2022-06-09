import React, { Component } from 'react';
import "./About.css";
import "../assets/profile_pic.jpeg";
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            // Image goes here
            alt="Profile Pic" src = {"../assets/profile_pic.jpeg"}
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Yvonne Chen</div>
          <div className="brief_description">
            <p>I am a rising junior at Brooklyn College.</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}