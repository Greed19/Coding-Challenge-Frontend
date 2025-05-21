const Searchbar = ({ value, setValue, submit }) => {

    const onChange = (e) => {
        const { value } = e.target
        setValue(prev => value)
    }
    const onSubmitFn = async (e) => {
        e.preventDefault()
        await submit()
    }

    return (
        <section className="w-full h-[20%] flex justify-center items-center">
            <form action="" onSubmit={onSubmitFn} className="w-full h-full bg-slate-400 flex justify-center items-center">
                {/* <span className="mx-[10px]">SEARCH</span> */}
                <input className="border-2 px-[5px]" type="text" placeholder="search name" value={value} onChange={onChange} required />
                <button type="submit" className="p-[5px] border-2 mx-[10px] rounded-2xl">SEARCH</button>
            </form>
        </section>
    )
}
export default Searchbar