import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Terminal } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="w-6 h-6 text-blue-400" />,
        skills: ["Python", "JavaScript (ES6+)", "C++", "SQL", "Java", "HTML/CSS"]
    },
    {
        title: "Frontend",
        icon: <Layout className="w-6 h-6 text-purple-400" />,
        skills: ["React.js", "Redux", "Tailwind CSS", "Framer Motion", "Material UI", "Next.js"]
    },
    {
        title: "Backend",
        icon: <Server className="w-6 h-6 text-green-400" />,
        skills: ["Node.js", "Express.js", "FastAPI", "Flask", "Django", "GraphQL"]
    },
    {
        title: "Databases",
        icon: <Database className="w-6 h-6 text-yellow-400" />,
        skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"]
    },
    {
        title: "Cloud & DevOps",
        icon: <Globe className="w-6 h-6 text-cyan-400" />,
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git/GitHub", "Linux"]
    }
];

const Skills = () => {
    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
                Technical <span className="text-blue-400">Expertise</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {skillCategories.map((category, index) => (
                    <SkillCard key={category.title} category={category} index={index} />
                ))}
            </div>
        </section>
    );
};

const SkillCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-xl hover:shadow-blue-500/10 transition-all border border-slate-700/50 hover:border-blue-500/30"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800/50 rounded-lg">
                    {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:text-white hover:border-slate-500 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
