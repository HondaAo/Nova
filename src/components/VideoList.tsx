import Image from 'next/image'
import React from 'react'

export const VideoList = ({videos}: any) => {
  return (
    <div>
        {videos.map((video: any) => {
            return (
            <div key={video.url}>
              <Image alt={`${video.title}`} src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`} width="150" height={"100"} />
            </div>
            )
        })}
    </div>
  )
}
