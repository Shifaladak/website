import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Data Science Fellow",
        company: "NYU Tandon",
        period: "May 2024 - Present",
        description: "Mentoring undergraduate students in data science methodologies and conducting research on urban data analysis.",
        tags: ["Python", "Pandas", "Mentorship"]
    },
    {
        id: 2,
        role: "Software Engineering Intern",
        company: "EDC",
        period: "June 2023 - Aug 2023",
        description: "Developed automated ETL pipelines reducing processing time by 40%. Collaborated on full-stack internal tools.",
        tags: ["React", "Node.js", "AWS"]
    },
    {
        id: 3,
        role: "Technical Lead",
        company: "ACM Student Chapter",
        period: "Aug 2021 - May 2022",
        description: "Led a team of 10 developers to build community projects and organized technical workshops for 200+ students.",
        tags: ["Leadership", "Project Management"]
    }
];

const Experience = () => {
    return (
        <section className="py-20 relative">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                    Professional Journey
                </span>
            </motion.h2>

            <div className="relative max-w-4xl mx-auto px-4">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ data, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 z-10 mt-6" />

            {/* Content Spacer */}
            <div className="flex-1 hidden md:block" />

            {/* Content Card */}
            <div className="flex-1 ml-12 md:ml-0">
                <div className="glass-card p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Briefcase size={16} />
                        <span className="font-semibold">{data.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{data.role}</h3>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                        <Calendar size={14} />
                        <span>{data.period}</span>
                    </div>
                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {data.tags.map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
