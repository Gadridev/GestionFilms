function Hero({ films, onOpenDetail,heroRef ,onPlayTrailer}) {
    // const [selectedFilm, setSelectedFilm] = useState(null)
    // const [isOpen, setIsOpen] = useState(false);
    // const [trailer, setTrailerFilm] = useState(null)
    const newfilm = [...films];
    // const filteredFilm=
    const topOne = newfilm.sort((a, b) => b.rating - a.rating).slice(0, 1)
    const film = topOne[0]
    // function handlePlayTrailer(film) {
    //     setTrailerFilm(film);
    // }
    function openDetail(film) {
        onOpenDetail(film);
    }
    return (
        <section
            id="hero"
            className="hero relative min-h-[88vh] flex items-end overflow-hidden"
            ref={heroRef}
        >
            {/* Image */}
            <div className="hero-img-wrap">
                <img
                    id="hero-img"
                    src={film?.image || ""}
                    alt={film?.title || ""}
                    onError={(e) => {
                        e.currentTarget.src =
                            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80";
                    }}
                />
            </div>
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        "linear-gradient(to top, #09090f 0%, rgba(9,9,15,0.75) 45%, rgba(9,9,15,0.2) 100%)",
                }}
            ></div>

            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        "linear-gradient(to right, #09090f 0%, rgba(9,9,15,0.6) 50%, transparent 100%)",
                }}
            ></div>

            <div className="relative z-20 w-full max-w-screen-2xl mx-auto px-6 pb-20 md:pb-28">
                <div className="max-w-2xl animate-fade-in">
                    <div className="flex items-center gap-3 mb-5">
                        <div
                            className="flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold tracking-widest uppercase"
                            style={{
                                background: "rgba(139,92,246,0.12)",
                                borderColor: "rgba(139,92,246,0.35)",
                                color: "#c4b5fd",
                            }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse inline-block"></span>
                            Top Rated Film
                        </div>
                    </div>
                    <h1 className="font-display text-6xl md:text-8xl tracking-wide leading-none mb-4">
                        {film?.title}
                    </h1>
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <span className="text-sm font-mono text-gray-400">
                            {film?.year}
                        </span>
                        <span className="text-gray-700">·</span>
                        <span className="badge border">{film?.genre}</span>
                        <span className="text-gray-700">·</span>
                        <span className="text-sm text-gray-400">
                            {film?.director}
                        </span>
                    </div>
                    <div className="flex gap-1 mb-5">
                        {Array.from({ length: film?.rating || 0 }).map((_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg line-clamp-3">
                        {film?.description}
                    </p>

                    <div className="flex gap-3 flex-wrap">
                        <button
                            onClick={() => openDetail(film)}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 active:scale-95"
                            style={{
                                background:
                                    "linear-gradient(135deg,#8b5cf6,#d946ef)",
                                boxShadow:
                                    "0 0 24px rgba(139,92,246,0.5)",
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle
                                    cx="7"
                                    cy="7"
                                    r="6"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M5.5 4.5l4 2.5-4 2.5V4.5z"
                                    fill="white"
                                />
                            </svg>
                            View Details
                        </button>

                        <button
                            onClick={()=>onPlayTrailer(film)}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 hover:bg-white/10"
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <svg width="11" height="13" viewBox="0 0 11 13" fill="white">
                                <path d="M0 0l11 6.5L0 13V0z" />
                            </svg>
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-6 right-8 z-20 hidden md:flex flex-col items-center gap-2 opacity-40">
                <span className="text-xs tracking-widest uppercase font-mono text-gray-500">
                    Scroll
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-transparent to-violet-500"></div>
            </div>

        </section>
    );
}
export default Hero
