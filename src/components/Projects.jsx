const projects = [
    {
        title: 'Lottery Wheels',
        description: 'A comprehensive lottery wheeling system generator with smart pick strategies and randomized distribution logic.',
        tech: ['JavaScript', 'React', 'Algorithms'],
        repo: 'https://github.com/gvsrusa/lottery-wheels',
        demo: 'https://lottery-wheels.vercel.app',
        image: 'bg-gradient-to-br from-indigo-500 to-purple-600'
    },
    {
        title: 'Miowsis',
        description: 'Micro Investment Optimizer - AI-powered platform for tracking micro-investments with ESG impact scoring.',
        tech: ['React', 'AI', 'Finance API'],
        repo: 'https://github.com/gvsrusa/miowsis',
        demo: 'https://miowsis-frontend.vercel.app',
        image: 'bg-gradient-to-br from-emerald-400 to-cyan-500'
    },
    {
        title: 'Agri Connect',
        description: 'Platform connecting farmers with experts, featuring crop recommendations and real-time weather updates.',
        tech: ['Node.js', 'React', 'MongoDB'],
        repo: 'https://github.com/gvsrusa/agri-connect',
        demo: 'https://agri-connect3.vercel.app',
        image: 'bg-gradient-to-br from-green-500 to-lime-600'
    },
    {
        title: 'Market Viewer',
        description: 'Real-time financial market dashboard with interactive charts and trading widgets.',
        tech: ['React', 'TradingView API', 'Data Visualization'],
        repo: 'https://github.com/gvsrusa/market-viewer',
        demo: 'https://market-viewer.vercel.app',
        image: 'bg-gradient-to-br from-blue-600 to-indigo-800'
    },
    {
        title: 'Smart Agriculture',
        description: 'IoT-based system for monitoring soil moisture and environmental conditions to optimize irrigation.',
        tech: ['Python', 'IoT', 'React', 'Sensors'],
        repo: 'https://github.com/gvsrusa/smart-agriculture',
        demo: 'https://smart-agriculture.vercel.app',
        image: 'bg-gradient-to-br from-teal-500 to-green-700'
    },
    {
        title: 'Sevak Firebase',
        description: 'Backend service layer utilizing Firebase for real-time data synchronization and user authentication.',
        tech: ['Firebase', 'Node.js', 'Cloud Functions'],
        repo: 'https://github.com/gvsrusa/sevak-firebase',
        demo: 'https://sevak-firebase.vercel.app',
        image: 'bg-gradient-to-br from-orange-400 to-yellow-500'
    },
    {
        title: 'Calc',
        description: 'A modern, scientific calculator application with advanced mathematical functions and history tracking.',
        tech: ['React', 'CSS', 'Math.js'],
        repo: 'https://github.com/gvsrusa/Calc',
        demo: 'https://calc-seven-psi.vercel.app',
        image: 'bg-gradient-to-br from-pink-500 to-rose-600'
    }
]

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-700 hover:border-sky-500/30 flex flex-col h-full">
            {/* Image Placeholder */}
            <div className={`h-48 w-full ${project.image} relative overflow-hidden shrink-0`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-medium text-sky-300 bg-sky-900/30 rounded-full border border-sky-800">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    {project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors">
                            Live Demo
                        </a>
                    )}
                    <a href={project.repo} target="_blank" rel="noreferrer" className={`flex-1 text-center py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors border border-slate-600 ${project.demo === '#' ? 'w-full' : ''}`}>
                        Code
                    </a>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                Featured <span className="text-sky-400">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
