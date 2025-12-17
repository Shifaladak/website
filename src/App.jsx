import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
    return (
        <div className="min-h-screen container mx-auto px-4 py-8 space-y-24">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />

            <footer className="text-center text-slate-500 py-12">
                <p>© {new Date().getFullYear()} Shifa Ladak. Built with React & Framer Motion.</p>
            </footer>
        </div>
    );
}

export default App;
