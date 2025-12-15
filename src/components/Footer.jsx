const Footer = () => {
    return (
        <footer id="footer" className="bg-slate-900 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-400 text-sm">
                    &copy; {new Date().getFullYear()} Venkata Subbarao Gorantla. All rights reserved.
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/gvsrusa" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/gvsrusa/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:contact@gvsrusa.com" className="text-slate-400 hover:text-sky-400 transition-colors">
                        Email
                    </a>
                </div>

                <div className="text-slate-500 text-xs">
                    Deployed at <a href="https://portfolio.via.org.in" className="hover:text-sky-400 transition-colors">portfolio.via.org.in</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
