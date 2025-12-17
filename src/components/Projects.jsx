import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "AI-Powered Rescue Assistance",
        description: "Real-time resource allocation system for emergency response using reinforcement learning. Achieved 92% accuracy in prediction models.",
        tags: ["Python", "TensorFlow", "FastAPI"],
        link: "#",
        github: "#"
    },
    {
        title: "Movie Recommendation App",
        description: "Personalized movie suggestion engine processing 100k+ ratings. Implemented collaborative filtering algorithms.",
        tags: ["React", "Flask", "Scikit-learn"],
        link: "#",
        github: "#"
    },
    {
        title: "PERN Task Manager",
        description: "Full-stack productivity tool with drag-and-drop kanban boards, real-time updates, and team collaboration features.",
        tags: ["PostgreSQL", "Express", "React", "Node.js"],
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-16 text-center"
            >
                Featured <span className="text-blue-400">Projects</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <TiltCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

const TiltCard = ({ project }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass-card rounded-2xl p-8 relative min-h-[300px] flex flex-col group cursor-pointer"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="flex-1 flex flex-col"
            >
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
