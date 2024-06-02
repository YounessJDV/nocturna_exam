import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

// AOS ANIMATIONS //
import AOS from "aos";
import "aos/dist/aos.css";

// SCROLL TO TOP when NAVIGATION //
import ScrollToTop from './components/scrolltotop';

// COMPONENTS 
import Navbar from './components/Navbar'
import Header from './components/header'
import Features from './components/features'
import SectionOne from './components/sectionOne'
import Offres from './components/offres'
import Faq from './components/faq'
import Cta from './components/cta'
import Footer from './components/footer'
import Realisations from "./components/realisations"

// PAGES
import Contact from './pages/contact';
import MentionsLegales from './pages/mentionsLegales';
import AjoutProjet from './pages/AjoutProjet';

// SYSTEME DE CONNEXION
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './contexts/PrivateRoute';
import Logout from './pages/Logout';

function App() {
  
  useEffect(() => {
    AOS.init(); 
   }, []);

  return (
    <Router>
      <AuthProvider>

        <ScrollToTop />
        <div className="App" id="scrolltest">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar /> 
                  <Header className="z-10" />
                  <Features className="z-0"  />
                  <SectionOne/>
                  <Realisations />
                  <Offres/>
                  <Faq/>
                  <Cta/>
                  <Footer/>
                </>
              }
            />
            <Route path="/contact" element={ <> <Contact /> </> } />
            <Route path="/mentionsLegales" element={<> <MentionsLegales /> </> } />
            <Route path="/login" element={
                <>
                  <Navbar /> 
                  <Login />
                </>
              }
            />
            <Route path="/register" element={
                <>
                  <Navbar /> 
                  <Register />
                </>
              }
            />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/ajoutprojet" element={<AjoutProjet />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
