const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-slate-800/50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About <span className="text-sky-400">Me</span></h2>

                <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800 mb-10">
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        I am a passionate software engineer with a strong focus on building scalable, high-performance web applications.
                        With expertise in modern JavaScript frameworks and a keen eye for UI/UX design, I bridge the gap between complex engineering and intuitive user experiences.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        My journey involves continuous learning and applying cutting-edge technologies to solve real-world problems.
                        Whether it's front-end architecture or back-end optimization, I strive for excellence in every line of code.
                    </p>
                </div>

                <a href="#" className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-sky-500/30 transform hover:-translate-y-1">
                    Download Full Resume
                </a>
            </div>
        </section>
    )
}

export default About
