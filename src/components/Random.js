import Spinner from './Spinner';
import useGif from '../hook/useGif';
const Random = () => {
  const {gif, loading, fetchData} = useGif()
  function clickHandler(){
    fetchData()
  }
  return (
    <div className='flex flex-col items-center w-1/2 bg-green-500 rounded-lg border border-black gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {loading ? (<Spinner/>) : (<img src={gif} alt='gif' width="450"/>)}
        <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random