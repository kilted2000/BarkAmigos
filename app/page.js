"use client";
import './globals.css'
import {  FaCodeBranch, FaEye } from 'react-icons/fa';

import { useEffect, useState } from 'react';


export default function Home() {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchStoicQuote();
  }, []);

  const fetchStoicQuote = async () => {
    const response = await fetch('https://api.themotivate365.com/stoic-quote');
    const data = await response.json();
    setQuote(data.quote);
    setAuthor(data.author);
  };
  
  return (
    <>
      <div className="header">
        <div id="title">
          <div className="container-fluid">

            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand"><img id="nav-img" src="/namenoback.png" alt="" /></a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto">
                  <li className="navbar-item">
                    <a className="nav-link" href="#footer">Contact</a>
                  </li>
                  <li className="navbar-item">
                    <a className="nav-link" href="#pricing">Pricing</a>
                  </li>
                  <li className="navbar-item">
                    <a className="nav-link" href="#cta">Sign In</a>
                  </li>
                </ul>
              </div>
            </nav>


            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
                <button type="button" className="btn btn-dark btn-lg download-button">
                  <i className="fa-solid fa-paw"></i> Sign In
                </button>
                <button type="button" className="btn btn-dark btn-lg download-button">
                <FaEye /> Sign Up
                </button>
              </div>
              <div className="phone-img col-md-6 col-sm-12">
                <img
                  className="rotate_image img-fluid title-image"
                  src="/img-clear.jpeg"
                  alt="logo-mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="features">
        <div className="row feat">
          <div className="col-sm-12 col-md-4 des">
            <i className="fa-solid fa-magnifying-glass fa-3x fi"></i>
            <h3 className="feature">Easy to use.</h3>
            <p className="fd">Find furry companions near you. </p>
          </div>
          <div className="col-sm-12 col-md-4 des">
            <i className="fa-solid fa-dog fa-3x fi"></i>
            <h3 className="feature">Never lose your new friends.</h3>

            <p className="fd"> Quickly get togther with all you new puppy pals.</p>
          </div>
          <div className="col-sm-12 col-md-4 des">
            <i className="fa-regular fa-calendar-days fa-3x fi"></i>
            <h3 className="feature">Integrated Calendar.</h3>
            <p className="fd">Never miss a doggie date.</p>
          </div>
        </div>
      </div>

      <div id="pricing">
        <h2>A Plan for Every Dog's Neeeds</h2>
        <p>Simple and affordable price plans for your and your dog.</p>

        <div className="row">
          <div className="card-group price">
            <div className="pricing-column col-md-4 col-sm-6 col-xs-12 cards" id="card1">
              <div className="card">
                <div className="card-header"><h3>Free</h3></div>
                <div className="card-body">
                  <h2>Risk free</h2>
                  <p>5 Matches Per Week</p>
                  <p>10 Messages Per Day</p>
                  <p>Unlimited App Usage</p>
                  <p style={{ visibility: 'hidden' }}>.</p>
                  <button className="w-100 btn btn-lg btn-dark" type="button">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div className="pricing-column col-md-4 col-sm-6 col-xs-12 cards">
              <div className="card">
                <div className="card-header"><h3>Premium Plus</h3></div>
                <div className="card-body">
                  <h2>$49 / mo</h2>
                  <p>Unlimited Matches</p>
                  <p>Unlimited Messages</p>
                  <p>Unlimited App Usage</p>
                  <p style={{ visibility: 'hidden' }}>.</p>

                  <button className="w-100 btn btn-lg btn-dark" type="button">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className='api'>
       <button>{quote}</button>
        <p>- {author}</p>
       </div>
      <div id="pics" className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <img src="/catch.JPG" alt="" class=" pic" />
          </div>
          <div className="col">
            <img src="/dogmass.jpeg" alt="" class=" pic" />
          </div>
          <div className="col">
            <img src="/Marigold.JPG" alt="" class=" pic" />
          </div>
          <div className="col">
            <img src="/milie1.jpeg" alt="" class=" pic" />
          </div>
          <div className="col">
            <img src="/milie2.jpeg" alt="" class=" pic" />
          </div>
          <div className="col">
            <img src="/sundog.jpeg" alt="" class=" pic" />
          </div>
        </div>
      </div>

      <div id="cta">
        <h3 className="cta-text">Find Your Furry Friends, Furry Friend Today.</h3>
        <button className="download-button btn btn-dark btn-lg" type="button">
          <i className="fa-solid fa-paw"></i> Sign In
        </button>
        <button className="download-button btn btn-dark btn-lg" type="button">
          <i className="fa-solid fa-paw"></i> Sign Up
        </button>
      </div>

      <div id="footer">
        <a href="https://twitter.com/RichardWhitDev" target="_blank"><i className="foot-icon fa-brands fa-twitter"></i></a>
        <a href="https://www.facebook.com/richard.whittington.35" target="_blank"><i className="foot-icon fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/rlwhttng/" target="_blank"><i className="foot-icon fa-brands fa-instagram"></i></a>
        <a href="mailto:richardlwhittington@gmail.com"><i className="foot-icon fa-solid fa-envelope"></i></a>
        <p className="copyright-text">©Copyright 2023 MilieDog Enterprises</p>
      </div>

</>
  )
}
