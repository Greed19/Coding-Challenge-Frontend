const ItemCard = ({ item }) => {
    const { name } = item

    return (
        <section className="bg-amber-100 flex justify-center items-center w-full h-1/8 p-[15px] border-2">
            <span className="text-black">{name}</span>
        </section>
    )
}
export default ItemCard