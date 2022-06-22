import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import NormalLayouts from "../../Layouts/NormalLayouts";
import Youtube from 'react-youtube'
import Script from "../../components/Scripts";

const VideoPage = () => {
    const router = useRouter()
    const pid = router.query.id as string;
    const [ video, setVideo ] = useState<VideoProps>()
    const getVideo = async(id: string ) => {
        const intId = parseInt(id)
        const res = await axios.get(`/api/videos/${intId}`)
        setVideo(res.data)
    }
    const options = {
      playerVars: {
        height: 300,
        width: 400,
        autoplay: 1,
        origin: 'http://localhost:3000',
        controls: 0,
        end: video?.end_time,
        loop: 1,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0 
      }
    }
    useEffect(() => {
        getVideo(pid)
    },[pid])

    return (
        <NormalLayouts title="video page" description="you can learn englieh in fan way">
            {video ? (
                <div className={`${video.url}`} style={{ textAlign: 'center', cursor: 'not-allowed', pointerEvents: 'none'}}>
                    <Youtube
                    videoId={video.url}
                    opts={options}
                    // style={{width: '40%', margin: '40px auto' }}
                    />
                    <Script script={video.script} />
                </div>
            ):(
                <div>Error</div>
            )}
        </NormalLayouts>
    )
}

export default VideoPage 