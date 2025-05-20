import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <button 
          className="navbar-toggler position-fixed d-md-none" 
          style={{ top: '10px', left: '10px', zIndex: 1030 }}
          onClick={toggleSidebar}
        >
          <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.5rem' }}></i>
        </button>
      )}

      <nav 
        id="sidebar" 
        className={`col-md-3 col-lg-3 d-md-block bg-light sidebar ${isOpen ? 'show' : 'collapse'}`}
        style={{
          height: '100vh',
          position: isMobile ? 'fixed' : 'relative',
          zIndex: isMobile ? 1020 : 'auto',
          width: isMobile ? '250px' : 'auto',
          left: 0,
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className="position-sticky pt-3 sidebar-sticky">
          <div className="mx-4">
            <h5 className="text-primary fw-bold mb-0">TEAMROOM DOCS <sup><span className="badge bg-secondary text-white mb-3" style={{fontSize : ".5rem"}}>v1.0.0</span></sup></h5>
          </div>

          <div className="px-3">
            <div className="mb-3">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-2 text-uppercase fw-bold">
                <span>Getting Started</span>
              </h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    to="/introduction"
                    className={`nav-link ${location.pathname === '/introduction' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <i className="bi bi-file-text me-2"></i>
                    Introduction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/installation"
                    className={`nav-link ${location.pathname === '/installation' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <i className="bi bi-download me-2"></i>
                    Installation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-2 text-uppercase fw-bold">
                <span>Core Concepts</span>
              </h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    to="/authentication"
                    className={`nav-link ${location.pathname === '/authentication' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <i className="bi bi-shield-lock me-2"></i>
                    Authentication Flow
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/booking"
                    className={`nav-link ${location.pathname === '/booking' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Booking Flow
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-2 text-uppercase fw-bold">
                <span>Frontend Development</span>
              </h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    to="/authentication-pages"
                    className={`nav-link ${location.pathname === '/authentication-pages' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <i className="bi bi-person-badge me-2"></i>
                    Authentication Pages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/public-pages"
                    className={`nav-link ${location.pathname === '/public-pages' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <i className="bi bi-globe me-2"></i>
                    Public Pages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/admin-pages"
                    className={`nav-link ${location.pathname === '/admin-pages' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <i className="bi bi-speedometer2 me-2"></i>
                    Admin Pages
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-2 text-uppercase fw-bold">
                <span>Backend Development</span>
              </h6>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    to="/database"
                    className={`nav-link ${location.pathname === '/database' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}>
                    <i className="bi bi-database me-2"></i>
                    Database
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/authentication-process"
                    className={`nav-link ${location.pathname === '/authentication-process' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}>
                    <i className="bi bi-shield me-2"></i>
                    Authentication
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/authorization"
                    className={`nav-link ${location.pathname === '/authorization' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}>
                    <i className="bi bi-key me-2"></i>
                    Authorization
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/models"
                    className={`nav-link ${location.pathname === '/models' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}>
                    <i className="bi bi-diagram-3 me-2"></i>
                    Models
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/controllers"
                    className={`nav-link ${location.pathname === '/controllers' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}>
                    <i className="bi bi-cpu me-2"></i>
                    Controllers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/routing"
                    className={`nav-link ${location.pathname === '/routing' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}>
                    <i className="bi bi-signpost-split me-2"></i>
                    Routing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/middlewares"
                    className={`nav-link ${location.pathname === '/middlewares' ? 'active' : ''}`}
                    onClick={() => isMobile && setIsOpen(false)}>
                    <i className="bi bi-layers me-2"></i>
                    Middlewares
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {isMobile && isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1010
          }}
        />
      )}
    </>
  );
}