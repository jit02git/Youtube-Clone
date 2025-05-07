/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const VideoCard = (info) => {
    const { snippet, Statistics } = info;
    const { channelTitle, title, thumbnail } = snippet
    console.log("showing info from video card file", info)
    return(
    <div className='p-2 m-2 w-60 '>
            <img className='rounded-lg' alt='video' src={thumbnail.medium.url}/>
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{Statistics.viewCount} views</li>
            </ul>
    </div>)
}

export default VideoCard;