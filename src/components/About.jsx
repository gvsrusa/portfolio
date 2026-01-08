const About = () => {
    return (
        <section id="about" className="py-20 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[80px] -z-10"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
                    About <span className="text-gradient">Me</span>
                </h2>

                <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12 transform hover:scale-[1.01] transition-transform duration-500">
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
                        I am a Senior Full Stack Developer and AI Engineer passionate about bridging the gap between cutting-edge artificial intelligence and intuitive user experiences.
                        My expertise lies in building <span className="text-white font-semibold">Autonomous Agents</span>, <span className="text-white font-semibold">RAG Pipelines</span>, and scalable web architectures.
                    </p>
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                        Beyond traditional development, I am deeply researching <span className="text-white font-semibold">Quantum Computing</span> to solve complex computational problems.
                        Whether it's automating complex workflows or optimizing large-scale systems, I strive for innovation in every line of code.
                    </p>
                </div>

                <a href="/resume.html" target="_blank" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    View Resume
                </a>
            </div>
        </section>
    )
}

export default About
