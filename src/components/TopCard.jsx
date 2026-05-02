import Card from "../ui/Card";

function TopCard({ films ,onOpenDetail,topRef}) {
    const newFilms = [...films]
    const topCard = newFilms.sort((a, b) => b.rating - a.rating).slice(0, 3)
    return (
        <>
            <div id="top3-grid" className="grid grid-cols-1 md:grid-cols-3 gap-4" ref={topRef}>
                {topCard.map((item, index) => (
                    <Card film={item} index={index} key={index} onOpenDetail={onOpenDetail} />
                ))}
            </div>
        </>
    );
}
export default TopCard
