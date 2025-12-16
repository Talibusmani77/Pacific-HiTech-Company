// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Expertise from './pages/Expertise';
import Work from './pages/Work';
import Equipments from './pages/Equipments';
import Branches from './pages/Branches';
import Contact from './pages/Contact';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/expertise" element={<Expertise />} />
                            <Route path="/work" element={<Work />} />
                            <Route path="/equipments" element={<Equipments />} />
                            <Route path="/branches" element={<Branches />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
