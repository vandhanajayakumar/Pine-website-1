// src/CursorEffectComponent.js
import React, { useEffect } from 'react';
import './CursorEffectComponent.css';
import gsap from 'gsap';

const CursorEffectComponent = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          }
        });
      }
    });

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    cursorScale.forEach(link => {
      link.addEventListener('mousemove', () => {
        cursor.classList.add('grow'); 
        if (link.classList.contains('small')) {
          cursor.classList.remove('grow');
          cursor.classList.add('grow-small');
        }
      });

      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
      });
    });
  }, []);

  return (
    <div>
      <div className="cursor"></div>

      {/* <header>
        <div className="header-row">
          <div className="logo cursor-scale small">
            <a href="#">PINESPHERE</a>
          </div>
          <nav className="nav">
            <ul className="cursor-scale small">
              <li><a href="#">WHY US</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">SERVICES</a></li>
              <li><a href="#">PRODUCTS</a></li>
              <li><a href="#">CAREERS</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header> */}

      <section className="hero-text">
        <div className="hero-text-content">
          <h1 className="cursor-scale">EMBRACE Inovation</h1>
          <h2 className="cursor-scale small">UNLEASH Potential</h2>
        </div>
      </section>

      {/* <footer className="footer">
        <div className="footer-wrapper">
          <ul className="footer-nav cursor-scale small">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
          <p className="cursor-scale small">Designed in 2022</p>
        </div>
      </footer> */}
    </div>
  );
};

export default CursorEffectComponent;
