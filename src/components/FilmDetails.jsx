function FilmDetails({ film, onPlayTrailer, openEdit, handelDeleteFilm }) {
    function ytId(url) {
        if (!url) return null;
        const m = url.match(
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        );
        return m ? m[1] : null;
    }
    const id = ytId(film.trailer);
    const hasTrailer = !!id;

    const ytThumb = id
        ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
        : null;

    return (
        <div>
            <div className="relative h-72 overflow-hidden rounded-t-2xl">
                <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] to-transparent"></div>
            </div>


            <div className="p-6">
                <h2 className="text-4xl font-bold mb-3">{film.title}</h2>

                <div className="flex gap-3 text-sm text-gray-400 mb-3">
                    <span>{film.year}</span>
                    <span>•</span>
                    <span className="border  border-orange-500 text-orange-500 px-3">{film.genre}</span>
                    <span>•</span>
                    <span>{film.director}</span>
                </div>


                <p className="mb-4">⭐ {film.rating}/5</p>
                <div className="mb-5">
                    <div className="flex justify-between text-xs text-muted mb-1.5">
                        <span>Rating</span><span>{film.rating}/5</span>
                    </div>
                    <div className="h-1 rounded-full bg-border overflow-hidden">
                        <div
                            className="rating-bar h-full rounded-full transition-all"
                            style={{ width: `${(film.rating / 5) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {film.description && (
                    <p className="text-gray-400 mb-4">{film.description}</p>
                )}


                {film.actors?.length > 0 && (
                    <div className="mb-4">
                        <p className="text-xs uppercase mb-2">Cast</p>
                        <div className="flex flex-wrap gap-2">
                            {film.actors.map((actor, i) => (
                                <span key={i} className="px-2 py-1 border rounded border-violet-600 ">
                                    {actor}
                                </span>
                            ))}
                        </div>
                    </div>
                )}



                {hasTrailer && (
                    <div
                        onClick={() => onPlayTrailer(film)}
                        className="relative rounded-xl overflow-hidden mb-5 cursor-pointer group"
                    >
                        <img
                            src={ytThumb}
                            alt="Trailer"
                            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                        />


                        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-transform group-hover:scale-110">
                                <svg width="18" height="20" viewBox="0 0 11 13" fill="white">
                                    <path d="M0 0l11 6.5L0 13V0z" />
                                </svg>
                            </div>
                        </div>

                        <div className="absolute bottom-3 left-3 text-xs font-bold tracking-widest uppercase text-violet-300">
                            Watch Trailer
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-wrap gap-3 m-6 pt-4 border-t border-border">
               
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-400 border border-border hover:border-border2 hover:text-white transition-all"
                    onClick={() => openEdit(film)}
                >
                    <svg
                        width="13"
                        height="13"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    >
                        <path d="M11.5 2.5l2 2-9 9L2 15l.5-2.5 9-10z" />
                    </svg>
                    Edit
                </button>

              
                <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                    style={{
                        background: "rgba(244,63,94,0.1)",
                        color: "#fda4af",
                        border: "1px solid rgba(244,63,94,0.25)",
                    }}
                    onClick={() => handelDeleteFilm(film.id)}
                >
                    <svg
                        width="12"
                        height="13"
                        viewBox="0 0 16 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    >
                        <polyline points="1 4 3 4 15 4" />
                        <path d="M13 4l-.7 11a2 2 0 01-2 2H5.7a2 2 0 01-2-2L3 4" />
                        <path d="M6 4V2a1 1 0 011-1h2a1 1 0 011 1v2" />
                    </svg>
                    Delete
                </button>
            </div>
        </div>
    );
}
export default FilmDetails