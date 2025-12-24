const Footer = () => {
    return (
        <footer id="footer" className="py-12 border-t border-white/5 relative bg-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
                <a href="#" className="flex items-center space-x-3 group opacity-80 hover:opacity-100 transition-opacity">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-xl font-bold tracking-tight text-white">VSG</span>
                </a>

                <div className="flex space-x-8">
                    <a href="https://github.com/gvsrusa" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/gvsrusa/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                        LinkedIn
                    </a>
                    <a href="mailto:contact@gvsrusa.com" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                        Email
                    </a>
                </div>

                <div className="text-slate-600 text-xs text-center">
                    &copy; {new Date().getFullYear()} Venkata Subbarao Gorantla. <br className="md:hidden" />
                    Deployed at <a href="https://portfolio.via.org.in" className="hover:text-slate-400 transition-colors border-b border-transparent hover:border-slate-400">portfolio.via.org.in</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
