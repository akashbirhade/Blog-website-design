

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
    const [activeTab, setActiveTab] = useState("world");
    const tabs = [
      { name: "world", label: "World" },
      { name: "us", label: "U.S." },
      { name: "technology", label: "Technology" },
      { name: "design", label: "Design" },
      { name: "culture", label: "Culture" },
      { name: "business", label: "Business" },
      { name: "politics", label: "Politics" },
      { name: "opinion", label: "Opinion" },
      { name: "science", label: "Science" },
      { name: "health", label: "Health" },
      { name: "style", label: "Style" },
      { name: "travel", label: "Travel" },
    ];
  
    const handleTabClick = (tabName: string) => {
      setActiveTab(tabName);
    };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#" 
        style={{
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>Large</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Subscribe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Design</a>
            </li>
          </ul>
          
          <button className="btn btn-outline-primary me-2" type="button">Sign up</button>
          <button className="btn btn-outline-success me-2" type="button">Login In</button>
        </div>
      </div>
    </nav>
    <div className="container">
      <div className="tab-container">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.name}>
              <button
                className={`nav-link ${activeTab === tab.name ? "active" : ""}`}
                onClick={() => handleTabClick(tab.name)}
                style={{
                    color: 'black',
                    fontWeight: 'bold'
                  }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              className={`tab-pane fade ${
                activeTab === tab.name ? "show active" : ""
              }`}
              id={tab.name}
              key={tab.name}
            >
              <div className="tab-content-item">
                <p>
                  Content for the {tab.label} tab. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Maecenas sed diam eget risus varius
                  blandit sit amet non magna.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;