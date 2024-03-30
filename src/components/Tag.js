import { useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hook/useGif';
const Tag = () => {
  const [tag, setTag] = useState('car')
  const {gif, loading, fetchData} = useGif(tag)
  function clickHandler(){
    fetchData(tag)
  }
  function changeHandler(event){
    setTag(event.target.value)
  }
  // const [loading, setLoading] = useState(false)
  // const [gif, setGif] = useState('');
  //   async function fetchData(){
  //     setLoading(true)
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //     const {data} = await axios.get(url); //Another method to get request to server(Axios method(protection cure technique as compared to fetch method))
  //     const imageSource = data.data.images.downsized_large.url
  //     setGif(imageSource)
  //     setLoading(false)
  //   }

  //   useEffect(()=>{
  //     fetchData()
  //   },[])
  return (
    <div className='flex flex-col items-center w-1/2 bg-blue-500 rounded-lg border border-black gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
        {loading ? (<Spinner/>) : (<img src={gif} alt='gif' width="450"/>)}
        <input onChange={changeHandler} value={tag} className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' type='text' />
        <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag