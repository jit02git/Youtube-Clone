import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constant';

const VideoContainer = () => {

  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data =  await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("this is json data", json);
    setVideos(json.items)
    
  }

  return (
    <div>
      <h3>this is video container to show the video</h3>
    </div>
  )
}

export default VideoContainer
