import { useState } from "react";

function Catalogue({ films, onOpenDetail,catalogueRef}) {
    const [genre, setGenre] = useState("all");
    const [rating, setRating] = useState(0);
    const genres = [...new Set(films.map((f) => f.genre))];
    const filteredFilms = films.filter((film) => {
        const matchGenre = genre === "all" || film.genre === genre;
        const matchRating = rating === 0 || film.rating >= rating;
        return matchGenre && matchRating;
    });
    return (
        <section className="relative z-10 max-w-screen-2xl mx-auto px-6 py-16" ref={catalogueRef}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
                <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2 text-fuchsia-500">
                        <svg width="16" height="2" viewBox="0 0 16 2">
                            <rect width="16" height="2" rx="1" fill="#d946ef" />
                        </svg>
                        Catalogue
                    </p>

                    <h2 className="font-display text-4xl md:text-5xl tracking-wide">
                        ALL <span className="grad-text">FILMS</span>
                    </h2>
                </div>
                <div className="flex mr-7 items-center gap-3">
                    <select
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="form-input text-sm"
                    >
                        <option value="all">All Genres</option>
                        {genres.map((g) => (
                            <option key={g} value={g}>
                                {g}
                            </option>
                        ))}
                    </select>

                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="form-input text-sm"
                    >
                        <option value={0}>Any Rating</option>
                        <option value={3}>3★ and up</option>
                        <option value={4}>4★ and up</option>
                        <option value={5}>5★ only</option>
                    </select>

                    <button
                        onClick={() => { setGenre("all"); setRating(0) }}
                        className="px-4 py-2 rounded-lg text-xs font-bold tracking-wide text-gray-400 border border-border hover:border-border2 hover:text-white transition-all"
                    >
                        Reset
                    </button>

                    <span className="text-xs font-mono text-muted">
                        {films.length} films
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredFilms.map((film) => (
                    <div
                        key={film.id}
                        className="relative group rounded-xl overflow-hidden bg-surface cursor-pointer"
                    >
                        <img
                            src={film.image}
                            alt={film.title}
                            className="w-full h-[19rem] object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400";
                            }}
                        />

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/60">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.6)]" onClick={() => onOpenDetail(film)}>
                                <svg width="16" height="18" viewBox="0 0 11 13" fill="white">
                                    <path d="M0 0l11 6.5L0 13V0z" />
                                </svg>
                            </div>
                        </div>

                        <div className="p-2">
                            <p className="text-sm font-semibold">{film.title}</p>
                            <p className="text-xs text-gray-400">{film.year}</p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredFilms.length === 0 && (
                <div className="text-center py-24">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-violet-500/10 border border-violet-500/20">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="1.5"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <path d="M3 9h18M9 21V9" />
                        </svg>
                    </div>

                    <p className="font-display text-2xl text-gray-600 mb-2">
                        NO FILMS FOUND
                    </p>
                    <p className="text-sm text-muted">
                        Try different filters or add a new film.
                    </p>
                </div>
            )}
        </section>
    );
}

export default Catalogue;