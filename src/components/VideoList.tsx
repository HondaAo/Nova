import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const VideoList = ({videos}: any) => {
  return (
    <div>
        {videos.map((video: any) => {
            return (
            <Link key={video.url} href={`/videos/${video.id}`}>
              <a key={video.url}>
                <Image alt={`${video.title}`} src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`} width="330" height={"250"} />
                <h2>{video.title}</h2>
                <p>level: {video.level}</p>
              </a>
            </Link>
        )
        })}
    </div>
  )
}
