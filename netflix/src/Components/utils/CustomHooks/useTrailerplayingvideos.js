import  { useEffect } from 'react'
import { OPTIONS } from '../Constants'
import { useDispatch, } from 'react-redux'
import { addTrailerVideo } from '../Store/movieSlice'

const useTrailerplayingvideos = (movieId) => {
    
     const dispatch=useDispatch()
  useEffect(()=>{
  
    fetchdata()
    
  },[])
   const fetchdata=async()=>{
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",OPTIONS)
        const  data = await response.json()
        const  filterdData= data.results.filter((video)=>video.type="Trailer")
        const Trailervideo=filterdData.length?filterdData[0]:data.results[0]
        //console.log(Trailervideo);
       dispatch((addTrailerVideo(Trailervideo)))

        
    } catch (error) {
         console.error("Error fetching for TrailerPlayingvideos", error)
    }
   }
}

export default useTrailerplayingvideos
