import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const educationData = [
    {
        school: "New York University",
        degree: "M.S. in Computer Engineering",
        location: "New York, NY",
        year: "Expected 2025",
        description: "Specializing in Machine Learning and Software Engineering. Coursework in Deep Learning, Cloud Computing, and Algorithms.",
        logo: "NYU"
    },
    {
        school: "University of Mumbai",
        degree: "B.E. in Electronics Engineering",
        location: "Mumbai, India",
        year: "2019 - 2023",
        description: "Graduated with First Class Honors. Foundation in embedded systems, logic design, and computer programming.",
        logo: "MU"
    }
];

const Education = () => {
    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
                Education <span className="text-blue-400">Journey</span>
            </motion.h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {educationData.map((edu, index) => (
                    <EducationCard key={index} data={edu} index={index} />
                ))}
            </div>
        </section>
    );
};

const EducationCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-6xl select-none group-hover:opacity-10 transition-opacity">
                {data.logo}
            </div>

            <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 shrink-0">
                <GraduationCap size={32} />
            </div>

            <div className="flex-1 z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">{data.school}</h3>
                    <span className="text-blue-400 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        {data.year}
                    </span>
                </div>

                <p className="text-lg text-slate-300 font-medium mb-1">{data.degree}</p>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <MapPin size={14} />
                    <span>{data.location}</span>
                </div>

                <p className="text-slate-400 leading-relaxed max-w-2xl">
                    {data.description}
                </p>
            </div>
        </motion.div>
    );
};

export default Education;
