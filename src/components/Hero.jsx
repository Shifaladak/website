import Spline from '@splinetool/react-spline';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* 3D Spline Scene Background */}
            <div className="absolute inset-0 z-0">
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            </div>

            {/* Overlay to ensure text readability if needed */}
            <div className="absolute inset-0 bg-slate-950/60 z-0 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6">
                    Computer Engineering Master’s Candidate
                </span>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Shifa Ladak
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Building intelligent systems and scalable web solutions at <span className="text-blue-400 font-semibold">NYU</span>.
                    Passionate about Data Science and Full Stack Development.
                </p>

                <div className="flex gap-4 justify-center">
                    <SocialLink href="https://github.com/Shifaladak" icon={<Github size={20} />} label="GitHub" />
                    <SocialLink href="https://www.linkedin.com/in/shifa-ladak/" icon={<Linkedin size={20} />} label="LinkedIn" />
                    <SocialLink href="mailto:shl8628@nyu.edu" icon={<Mail size={20} />} label="Email" />
                </div>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <motion.a
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        whileTap={{ scale: 0.95 }}
        href={href}
        className="p-4 rounded-xl glass-card text-slate-300 hover:text-white transition-colors"
        aria-label={label}
    >
        {icon}
    </motion.a>
);

export default Hero;
