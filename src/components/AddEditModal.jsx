import { useEffect, useState } from "react";

function AddEditModal({ onClose, onSubmit, mode = "add", film }) {
    const initialForm = {
        title: "",
        year: "",
        genre: "",
        director: "",
        rating: 0,
        description: "",
        actors: [],
        image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    };
    function handelAddActor(e) {
        if (e.key === "Enter" && actorInput.trim()) {
            e.preventDefault();
            setForm((prev) => ({
                ...prev,
                actors: [...prev.actors, actorInput]
            }))
            setActorInput("")
        }
    }
    function removeActor(index) {
        setForm((prev) => ({
            ...prev,
            actors: prev.actors.filter((_, i) => i !== index),
        }));
    }
    const [form, setForm] = useState(initialForm);
    useEffect(() => {
        if (mode === "edit" && film) {
            setForm(film);
        }
    }, [mode, film]);
    const [actorInput, setActorInput] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(form);
        onClose();
    }
    return (
        <>
            <div className="flex items-start justify-between px-8 pt-7 pb-5 border-b border-border">
                <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1 text-violet-500">
                        {mode === "edit" ? "Edit Film" : "New Film"}
                    </p>
                    <h2 className="font-display text-3xl tracking-wide">
                        {mode === "edit" ? "UPDATE FILM" : "ADD TO VAULT"}
                    </h2>
                </div>

                <button onClick={onClose}>×</button>
            </div>

            <div className="overflow-y-auto modal-scroll px-8 py-6">
                <form onSubmit={handleSubmit}>
                    <input type="hidden" value={film?.id || ""} />

                    <div className="grid grid-cols-2 gap-4">

                        <div className="col-span-2">
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-2">
                                Title *
                            </label>
                            <input
                                name="title"
                                type="text"
                                className="form-input"
                                placeholder="Enter film title"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-2">
                                Year *
                            </label>
                            <input
                                name="year"
                                type="number"
                                className="form-input"
                                placeholder="2024"
                                min="1888"
                                max="2030"
                                value={form.year}
                                onChange={(e) => setForm({ ...form, year: e.target.value })}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-2">
                                Genre *
                            </label>
                            <select
                                className="form-input"
                                value={form.genre}
                                onChange={(e) => setForm({ ...form, genre: e.target.value })}
                                required
                            >
                                <option value="">Select genre</option>
                                <option>Action</option>
                                <option>Adventure</option>
                                <option>Animation</option>
                                <option>Comedy</option>
                                <option>Crime</option>
                                <option>Documentary</option>
                                <option>Drama</option>
                                <option>Fantasy</option>
                                <option>Horror</option>
                                <option>Mystery</option>
                                <option>Romance</option>
                                <option>Sci-Fi</option>
                                <option>Thriller</option>
                                <option>Western</option>
                            </select>
                        </div>

                        <div className="col-span-2">
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-2">
                                Director *
                            </label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Director's name"
                                value={form.director}
                                onChange={(e) => setForm({ ...form, director: e.target.value })}
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-3">
                                Rating
                            </label>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (

                                    <span
                                        key={star}
                                        onClick={() => setForm({ ...form, rating: star })}
                                        className={`cursor-pointer text-lg ${form.rating >= star ? "text-orange-400" : "text-gray-500"
                                            }`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-2">
                                Synopsis
                            </label>
                            <textarea
                                className="form-input resize-none"
                                rows="3"
                                value={form.description}
                                onChange={(e) =>
                                    setForm({ ...form, description: e.target.value })
                                }
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-2">
                                Cast — press Enter to add
                            </label>

                            <input
                                type="text"
                                className="form-input"
                                placeholder="Type actor name & press Enter…"
                                value={actorInput}
                                onChange={(e) => setActorInput(e.target.value)}
                                onKeyDown={handelAddActor}

                            />

                            <div className="flex flex-wrap gap-2 mt-3">
                                {form.actors.map((actor, i) => (
                                    <span
                                        key={i}
                                        onClick={() => removeActor(i)}
                                        className="px-2 py-1 bg-gray-700 rounded cursor-pointer"
                                    >
                                        {actor} ✕
                                    </span>
                                ))}
                            </div>
                        </div>


                        <div className="col-span-2">
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-2">
                                Poster URL
                            </label>
                            <input
                                type="url"
                                className="form-input"
                                placeholder="https://…"
                                value={form.image}
                                onChange={(e) => setForm({ ...form, image: e.target.value })}
                            />

                            {form.image && (
                                <img
                                    src={form.image}
                                    alt=""
                                    className="mt-3 rounded-lg border border-border object-cover"
                                    style={{ height: "100px" }}
                                />
                            )}
                        </div>


                        <div className="col-span-2">
                            <label className="block text-xs font-bold tracking-widest uppercase text-muted mb-2">
                                YouTube Trailer URL
                            </label>
                            <input
                                type="url"
                                className="form-input"
                                placeholder="https://youtube.com/watch?v=…"
                                value={form.trailer}
                                onChange={(e) => setForm({ ...form, trailer: e.target.value })}
                            />
                        </div>
                    </div>


                    <div className="flex justify-end gap-3 pt-6 mt-2 border-t border-border">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-400 border border-border hover:border-border2 hover:text-white transition-all"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
                            style={{
                                background: "linear-gradient(135deg,#8b5cf6,#d946ef)",
                                boxShadow: "0 0 20px rgba(139,92,246,0.35)",
                            }}
                        >
                            Save to Vault
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default AddEditModal