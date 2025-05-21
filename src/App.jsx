import { useEffect, useState } from 'react'
import Searchbar from './component/searchbar'
import ItemCard from './component/itemCard'

function App() {
  const [searchText, setSearchText] = useState('')
  const [listArr, setListArr] = useState([])
  const fetchFn = async () => {
    try {
      const res = await fetch('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
      const data = await res.json()
      setListArr(prev => [...prev, ...data.items])
    } catch (err) {
      console.log(err)
    }
  }

  const searchFn = async () => {
    console.log(searchText, 'searchTextzxc')
    try {
      const res = await fetch(`https://api.github.com/search/repositories?q=${searchText}`)
      const data = await res.json()
      setListArr(data.items)
    } catch (error) {
      console.log(error)
    }
    setSearchText('')
  }
  useEffect(() => {
    fetchFn()
  }, [])
  return (
    <main className='h-screen w-screen text-white'>
      <Searchbar value={searchText} setValue={setSearchText} submit={searchFn} />
      <section className='overflow-y-scroll  h-[60%]'>
        <div className='overflow-y-hidden'>
          {
            listArr.length > 0 ? (
              listArr.map((item, index) => (
                <ItemCard item={item} key={`${item.id}${index}`} />
              ))
            ) : (<span>No Data </span>)
          }

        </div>
      </section>
    </main>
  )
}

export default App
