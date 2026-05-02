import { useRef, useState } from "react";
import Catalogue from "./components/Catalogue";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopCard from "./components/TopCard";
import FilmDetails from "./components/FilmDetails";
import ModalLayout from "./ModalLayout";
import AddEditModal from "./components/AddEditModal";
import TrailerModal from "./components/TrailerModel";

import { useLocalStorage } from "./hooks/useLocalStorage";

function AppLayout({ films }) {
    const [modalType, setModalType] = useState(null);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [filmsState, setFilmsState] = useLocalStorage("films", films)
    const heroSection = useRef(null)
    const topRatedSection = useRef(null)
    const catalogueSection = useRef(null)
    function scrollToSection(ref) {
        ref.current?.scrollIntoView({
            behavior: "smooth",
        });
    }
    const totalFilms = filmsState.length;

    function openDetail(film) {
        setSelectedFilm(film);
        setModalType("detail");
    }
    function handelDeleteFilm(id) {
        setFilmsState((prev) =>
            prev.filter((film) => film.id !== id))
        closeModal();
    }
    function handleSaveFilm(filmData) {
        console.log(filmData)
        if (modalType === "add") {
            const newFilm = {
                ...filmData,
                id: Date.now().toString(),
            };
            setFilmsState((prev) => [...prev, newFilm]);
        }
        if (modalType === "edit") {
            setFilmsState((prev) =>
                prev.map((film) =>
                    film.id === selectedFilm.id
                        ? { ...film, ...filmData }
                        : film
                )
            );
        }
        closeModal();
    }
    function onPlayTrailer(film) {
        setSelectedFilm(film);
        setModalType("trailer")
    }

    function openEdit(film) {
        setSelectedFilm(film);
        setModalType("edit");
    }

    function openAdd() {
        setSelectedFilm(null);
        setModalType("add");
    }

    function closeModal() {
        setModalType(null);
        setSelectedFilm(null);
    }
    return (
        <>
            <Navbar films={totalFilms} openAdd={openAdd}
                onHero={() => scrollToSection(heroSection)}
                onTop={() => scrollToSection(topRatedSection)}
                onCatalogue={() => scrollToSection(catalogueSection)} />
            <Hero films={filmsState} onOpenDetail={openDetail} heroRef={heroSection}  onPlayTrailer={onPlayTrailer}/>
            <TopCard films={filmsState} onOpenDetail={openDetail} topRef={topRatedSection} />
            <Catalogue films={filmsState} onOpenDetail={openDetail} catalogueRef={catalogueSection} />
            <ModalLayout isOpen={!!modalType} onClose={closeModal}>
                {modalType === "detail" && selectedFilm && (
                    <FilmDetails film={selectedFilm} handelDeleteFilm={handelDeleteFilm} openEdit={openEdit} onPlayTrailer={onPlayTrailer} />
                )}
                {modalType === "add" && (
                    <AddEditModal
                        mode="add"
                        onClose={closeModal}
                        onSubmit={handleSaveFilm}
                    />
                )}

                {modalType === "edit" && selectedFilm && (
                    <AddEditModal
                        mode="edit"
                        film={selectedFilm}
                        onClose={closeModal}
                        onSubmit={handleSaveFilm}
                    />
                )}
                {modalType === "trailer" && (
                    <TrailerModal film={selectedFilm} />
                )}

            </ModalLayout>
        </>
    );
}
export default AppLayout;