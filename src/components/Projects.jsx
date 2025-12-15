const projects = [
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.',
        tech: ['React', 'Tailwind', 'Vite'],
        repo: 'https://github.com/gvsrusa',
        demo: 'https://portfolio.via.org.in',
        image: 'bg-gradient-to-br from-indigo-500 to-purple-600' // Placeholder gradient
    },
    {
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing products, orders, and analytics.',
        tech: ['Next.js', 'Typescript', 'Prisma'],
        repo: 'https://github.com/gvsrusa',
        demo: '#',
        image: 'bg-gradient-to-br from-emerald-500 to-teal-600'
    },
    {
        title: 'Task Management App',
        description: 'Real-time task collaboration tool with drag-and-drop functionality.',
        tech: ['React', 'Firebase', 'DnD kit'],
        repo: 'https://github.com/gvsrusa',
        demo: '#',
        image: 'bg-gradient-to-br from-orange-500 to-red-600'
    }
]

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-700 hover:border-sky-500/30">
            {/* Image Placeholder */}
            <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-medium text-sky-300 bg-sky-900/30 rounded-full border border-sky-800">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium transition-colors">
                        Live Demo
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors border border-slate-600">
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
