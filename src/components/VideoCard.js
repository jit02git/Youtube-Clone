/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const VideoCard = (info) => {
    const { snippet, Statistics } = info;
    const { channelTitle, title, thumbnail } = snippet
    console.log("showing info from video card file", info)
    return
    <div>
            <img alt='video' src={thumbnail.medium.url}/>
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{Statistics.viewCount}</li>
            </ul>
    </div>
}

export default VideoCard;