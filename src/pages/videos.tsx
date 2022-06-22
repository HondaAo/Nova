import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { VideoList } from '../components/VideoList';
import NormalLayouts from '../Layouts/NormalLayouts';

const Videos = () => {
const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
const [ videos, setVideos ] = useState([])
const getVideos = async() => {
    const res = await axios.get('/api/videos')
    setVideos(res.data)
}
useEffect(() => {
    getVideos()
},[])
  return (
    <NormalLayouts title='video list' description='video list page'>
        {videos && (
            <VideoList videos={videos} />
        )}
    </NormalLayouts>
  )
}

export default Videos