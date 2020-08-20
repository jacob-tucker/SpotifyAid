import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './trackInfo.css'

const TrackInfo = () => {
    const [track, setTrack] = useState('')
    const [trackQuery, setTrackQuery] = useState('')

    useEffect(() => {
        const newTrackQuery = track.replace(/ /g, '%20')
        setTrackQuery(newTrackQuery)
    }, [track])

    return (
        <div className="mainTrackPage">
            <Link to={{
                pathname: `/trackInfo/${track}`,
                state: {
                    track: trackQuery
                }
            }}>
                <img src={require('../navbar/spotifyimage.png')} />
            </Link>
            <input type="text" placeholder='Search...' value={track} onChange={(e) => setTrack(e.target.value)} />
        </div>
    )
}

export default TrackInfo;