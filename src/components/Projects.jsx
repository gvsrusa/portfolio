const projects = [
    {
        title: 'Insight Agent',
        description: 'An AI-powered investigation platform featuring real-time research agents, deep-dive capabilities, and interactive history logging.',
        tech: ['React 19', 'LangChain', 'Vercel AI SDK', 'Postgres'],
        repo: 'https://github.com/gvsrusa/insight-agent',
        demo: 'https://insight-agent.via.org.in/',
        image: '/projects/insight-agent.png',
        color: 'from-blue-600 to-indigo-600'
    },
    {
        title: 'Lottery Wheels',
        description: 'A comprehensive lottery wheeling system generator with smart pick strategies and randomized distribution logic.',
        tech: ['JavaScript', 'React', 'Algorithms'],
        repo: 'https://github.com/gvsrusa/lottery-wheels',
        demo: 'https://lottery-wheels.vercel.app',
        image: '/projects/lottery-wheels.png',
        color: 'from-purple-500 to-indigo-500'
    },
    {
        title: 'Miowsis',
        description: 'Micro Investment Optimizer - AI-powered platform for tracking micro-investments with ESG impact scoring.',
        tech: ['React', 'AI', 'Finance API'],
        repo: 'https://github.com/gvsrusa/miowsis',
        demo: 'https://miowsis-frontend.vercel.app',
        image: '/projects/miowsis.png',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Agri Connect',
        description: 'Platform connecting farmers with experts, featuring crop recommendations and real-time weather updates.',
        tech: ['Node.js', 'React', 'MongoDB'],
        repo: 'https://github.com/gvsrusa/agri-connect',
        demo: 'https://agri-connect3.vercel.app',
        image: 'bg-gradient-to-br from-green-500 to-lime-600',
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Market Viewer',
        description: 'Real-time financial market dashboard with interactive charts and trading widgets.',
        tech: ['React', 'TracingView API', 'Data Visualization'],
        repo: 'https://github.com/gvsrusa/market-viewer',
        demo: 'https://market-viewer.vercel.app',
        image: '/projects/market-viewer.png',
        color: 'from-orange-500 to-red-500'
    },
    {
        title: 'Smart Agriculture',
        description: 'IoT-based system for monitoring soil moisture and environmental conditions to optimize irrigation.',
        tech: ['Python', 'IoT', 'React', 'Sensors'],
        repo: 'https://github.com/gvsrusa/smart-agriculture',
        demo: 'https://smart-agriculture.vercel.app',
        image: 'bg-gradient-to-br from-teal-500 to-green-700',
        color: 'from-teal-500 to-green-500'
    },
    {
        title: 'Sevak Firebase',
        description: 'Backend service layer utilizing Firebase for real-time data synchronization and user authentication.',
        tech: ['Firebase', 'Node.js', 'Cloud Functions'],
        repo: 'https://github.com/gvsrusa/sevak-firebase',
        demo: 'https://sevak-firebase.vercel.app',
        image: '/projects/sevak-firebase.png',
        color: 'from-yellow-500 to-amber-500'
    },
    {
        title: 'Calc',
        description: 'A modern, scientific calculator application with advanced mathematical functions and history tracking.',
        tech: ['React', 'CSS', 'Math.js'],
        repo: 'https://github.com/gvsrusa/Calc',
        demo: 'https://calc-seven-psi.vercel.app',
        image: '/projects/calc.png',
        color: 'from-pink-500 to-rose-500'
    }
]

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            {/* Image Preview */}
            <div className="h-48 w-full relative overflow-hidden shrink-0 border-b border-white/5">
                {project.image.startsWith('/') ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className={`w-full h-full ${project.image}`}></div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {project.title}
                </h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-white/5 rounded-md border border-white/5">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                    {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 text-center py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors">
                            Live Demo
                        </a>
                    )}
                    <a href={project.repo} target="_blank" rel="noreferrer" className={`flex-1 text-center py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10 ${project.demo === '#' ? 'w-full' : ''}`}>
                        Code
                    </a>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Featured <span className="text-gradient">Projects</span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    A collection of applications demonstrating my expertise in full-stack development, AI integration, and modern UI/UX design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
