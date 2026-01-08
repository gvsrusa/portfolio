import { useState, useEffect, useRef } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Resume', href: '/resume.html', target: '_blank' },
        { name: 'Contact', href: '#footer' },
    ]

    return (
        <header className="fixed w-full top-6 z-50 px-4 flex justify-center">
            <div className={`
                flex justify-between items-center 
                transition-all duration-300 transform 
                ${isScrolled ? 'w-[92%] md:w-[70%] lg:w-[50%]' : 'w-[95%] md:w-[80%] lg:w-[60%]'}
                glass-panel rounded-full px-6 py-3
            `}>
                <a href="#" className="flex items-center space-x-3 group">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm md:text-lg font-bold tracking-tight text-white group-hover:text-accent-purple transition-colors">
                        Venkata Subbarao Gorantla
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.target}
                            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                            className="text-sm text-slate-300 hover:text-white font-medium transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    ref={buttonRef}
                    className="md:hidden text-slate-300 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Nav Dropdown */}
                {isMenuOpen && (
                    <div
                        ref={menuRef}
                        className="absolute top-full left-0 right-0 mt-4 mx-4 bg-black/80 backdrop-blur-xl rounded-2xl md:hidden flex flex-col items-center py-4 space-y-4 animate-fade-in-up z-[100] shadow-2xl border border-white/10"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.target}
                                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                className="text-slate-300 hover:text-white text-lg font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
