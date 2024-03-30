import {useEffect, useState} from 'react'
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const useGif = (tag) => {
    const [loading, setLoading] = useState(false)
    const [gif, setGif] = useState('');
      async function fetchData(tag){
        setLoading(true)
        
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url); //Another method to get request to server(Axios method(protection cure technique as compared to fetch method))
        const imageSource = data.data.images.downsized_large.url
        setGif(imageSource)
        setLoading(false)
      }
  
      useEffect(()=>{
        fetchData('car')
      },[])

    return {gif, loading, fetchData}
}

export default useGif