

function Navbar({ films, openAdd, onHero, onTop, onCatalogue }) {

    return (
        <nav
            className="sticky top-0 z-50 border-b border-border/60"
            style={{
                background: "rgba(9,9,15,0.88)",
                backdropFilter: "blur(20px)",
            }}
        >
            <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 shrink-0">
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center relative"
                        style={{
                            background: "linear-gradient(135deg,#8b5cf6,#d946ef)",
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <rect x="1" y="2.5" width="2" height="11" rx="1" fill="white" />
                            <rect x="4.5" y="2.5" width="7" height="2.5" rx="1" fill="white" />
                            <rect x="4.5" y="11" width="7" height="2.5" rx="1" fill="white" />
                            <rect x="13" y="2.5" width="2" height="11" rx="1" fill="white" />
                            <rect
                                x="4.5"
                                y="6.75"
                                width="7"
                                height="2.5"
                                rx="1"
                                fill="white"
                                opacity="0.4"
                            />
                        </svg>

                        <div
                            className="absolute inset-0 rounded-lg"
                            style={{
                                boxShadow: "0 0 16px rgba(139,92,246,0.6)",
                            }}
                        ></div>
                    </div>

                    <span className="font-display text-2xl tracking-wider text-white">
                        FILMVAULT
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-1">
                    <a className="px-4 py-2 cursor-pointer rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all" onClick={onHero}>
                        Home
                    </a>
                    <a className="px-4 py-2 cursor-pointer rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all" onClick={onTop}>
                        Top Rated
                    </a>
                    <a className="px-4 py-2 cursor-pointer rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all" onClick={onCatalogue}>
                        Catalogue
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-mono text-muted bg-surface border border-border rounded-full px-3 py-1">
                        {films || 0}
                    </span>

                    <button
                        onClick={() => openAdd()}
                        className="relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                        style={{
                            background: "linear-gradient(135deg,#8b5cf6,#d946ef)",
                            boxShadow: "0 0 20px rgba(139,92,246,0.4)",
                        }}
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M6 1v10M1 6h10"
                                stroke="white"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                            />
                        </svg>
                        Add Film
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar