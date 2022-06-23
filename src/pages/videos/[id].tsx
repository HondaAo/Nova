import axios from "axios"
import { useRouter } from "next/router"
import { LegacyRef, useEffect, useRef, useState } from "react";
import NormalLayouts from "../../Layouts/NormalLayouts";
import Youtube from 'react-youtube'
import Script from "../../components/Scripts";
import ReactPlayer from 'react-player/youtube'

const VideoPage = () => {
    const router = useRouter()
    const playerRef = useRef<any>(null);
    const pid = router.query.id as string;
    const [ video, setVideo ] = useState<VideoProps>()
    const [ showId, setShowId ] = useState(0)
    const [ play, setPlay ] = useState<boolean>(true)
    const [ subtitle, setSubtitle ] = useState(true)
    const [ scripts, setScripts ] = useState<ScriptInterface[]>([])
    const getVideo = async(id: string ) => {
        const intId = parseInt(id)
        const res = await axios.get(`/api/videos/${intId}`)
        setVideo(res.data)
        if(res.data.script.length > 0){
           setScripts(JSON.parse(res.data.script)) 
        }
        
    }
    const skipTo = async() => {
      const elapsed_sec = await playerRef.current.getCurrentTime()
      if(scripts.length === 5){
        if(Math.ceil(elapsed_sec) === scripts[1].timestamp){
          setShowId(1)
        } if(Math.ceil(elapsed_sec) === scripts[2].timestamp){
          setShowId(2)
        }if(Math.ceil(elapsed_sec) === scripts[3].timestamp){
          setShowId(3)
        } if(Math.ceil(elapsed_sec) === scripts[4].timestamp){
          setShowId(4)
        }
      }
      if(scripts.length === 6){
        if(Math.ceil(elapsed_sec) === scripts[1].timestamp){
          setShowId(1)
        } if(Math.ceil(elapsed_sec) === scripts[2].timestamp){
          setShowId(2)
        }if(Math.ceil(elapsed_sec) === scripts[3].timestamp){
          setShowId(3)
        } if(Math.ceil(elapsed_sec) === scripts[4].timestamp){
          setShowId(4)
        }
          if(Math.ceil(elapsed_sec) === scripts[5].timestamp){
          setShowId(5)
        }
      }
      if(scripts.length === 7){
        if(Math.ceil(elapsed_sec) === scripts[1].timestamp){
          setShowId(1)
        } if(Math.ceil(elapsed_sec) === scripts[2].timestamp){
          setShowId(2)
        }if(Math.ceil(elapsed_sec) === scripts[3].timestamp){
          setShowId(3)
        } if(Math.ceil(elapsed_sec) === scripts[4].timestamp){
          setShowId(4)
        }
        if(Math.ceil(elapsed_sec) === scripts[5].timestamp){
          setShowId(5)
        }
        if(Math.ceil(elapsed_sec) === scripts[6].timestamp){
          setShowId(6)
        }
      }
      if(scripts.length === 8){
        if(Math.ceil(elapsed_sec) === scripts[1].timestamp){
          setShowId(1)
        } if(Math.ceil(elapsed_sec) === scripts[2].timestamp){
          setShowId(2)
        }if(Math.ceil(elapsed_sec) === scripts[3].timestamp){
          setShowId(3)
        } if(Math.ceil(elapsed_sec) === scripts[4].timestamp){
          setShowId(4)
        }
        if(Math.ceil(elapsed_sec) === scripts[5].timestamp){
          setShowId(5)
        }
        if(Math.ceil(elapsed_sec) === scripts[6].timestamp){
          setShowId(6)
        }
        if(Math.ceil(elapsed_sec) === scripts[7].timestamp){
          setShowId(7)
        }
      }
    }
    const nextScript = async(direction: string) => {
      if(direction === 'left'){
        if(showId === 0){
          return
        }
        console.log(scripts[showId - 1].timestamp)
        await playerRef.current?.seekTo(scripts[showId - 1].timestamp)
        setShowId(showId => showId - 1)
      }
      if(direction === 'right'){
        if(showId === scripts.length){
          return
        }
        await playerRef.current?.seekTo(scripts[showId + 1].timestamp + 0.1)
        setShowId(showId => showId + 1)
      }
    }
    useEffect(() => {
        getVideo(pid)
    },[pid])

    return (
        <NormalLayouts title="video page" description="you can learn englieh in fan way">
            {video ? (
                <div className='screen-container'>
                    <div style={{ pointerEvents: 'none' }} >
                    <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${video.url}`}
                     playing={play}
                     loop={true}
                     controls={false}
                     ref={playerRef}
                     onEnded={() => setShowId(0)}
                     config={{
                        playerVars: {
                            autoplay: 1,
                            controls: 0,
                            end: video?.end_time,
                            loop: 1,
                            disablekb: 1,
                            fs: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            rel: 0 
                        } 
                     }}
                     style={{pointerEvents: 'none', cursor: 'not-allowed'}}
                    />
                    </div>
                    <Script scripts={scripts} skipTo={skipTo} nextScript={nextScript} play={play} setPlay={setPlay} showId={showId} />
                </div>
            ):(
                <div>Error</div>
            )}
        </NormalLayouts>
    )
}

export default VideoPage 