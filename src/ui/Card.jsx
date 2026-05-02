function Card({film,index,onOpenDetail}) {
    return  (
    <div
      className="top3-card relative overflow-hidden rounded-2xl cursor-pointer group anim-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={()=>onOpenDetail(film)}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={film.image}
          alt={film.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600";
          }}
        />
      </div>

   
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top,rgba(9,9,15,1) 0%,rgba(9,9,15,0.5) 50%,rgba(9,9,15,0.05) 100%)",
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse at bottom,rgba(139,92,246,0.15) 0%,transparent 70%)",
        }}
      ></div>

      <div className="rank-ghost">{index + 1}</div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2"
          style={{ color: "#8b5cf6" }}
        >
          <span
            className="w-4 h-px inline-block"
            style={{ background: "#8b5cf6" }}
          ></span>
          {index === 0
            ? "1st Place"
            : index === 1
            ? "2nd Place"
            : "3rd Place"}
        </p>

        <h3 className="font-display text-2xl tracking-wide leading-tight mb-3">
          {film.title}
        </h3>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex gap-0.5">
            {Array.from({ length: film.rating }).map((_, i) => (
              <svg
                key={i}
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="#f59e0b"
              >
                <path d="M8 1.5l1.65 3.35 3.7.54-2.67 2.6.63 3.68L8 9.77l-3.31 1.9.63-3.68L2.65 5.39l3.7-.54z" />
              </svg>
            ))}
          </div>

          <span className="badge border">{film.genre}</span>

          <span className="text-xs font-mono text-gray-500">
            {film.year}
          </span>
        </div>
      </div>

      <div
        className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center font-display text-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "rgba(139,92,246,0.9)",
          boxShadow: "0 0 16px rgba(139,92,246,0.6)",
        }}
      >
        {index + 1}
      </div>
    </div>
  );
}

export default Card
