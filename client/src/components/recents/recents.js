import React, { useEffect, useState } from 'react'
import './recents.css'

import { getRecentTracks } from '../../spotifyToken/spotify'

const Recents = () => {
    const [recentTracks, setRecentTracks] = useState(null)

    useEffect(() => {
        const getTheRecents = async () => {
            const theRecentTracks = await getRecentTracks()
            console.log(theRecentTracks.data.items)
            setRecentTracks(theRecentTracks.data.items)

        }
        getTheRecents()
    }, [])

    return (
        <div className="mainRecents">
            <h2>Recent Tracks</h2>
            {recentTracks
                ?
                <div className="topTracks">

                    {recentTracks.map((thing, i) => (
                        <div tabIndex="1" className="trackDetails" key={i}>
                            <a href={thing.track.preview_url} className="thePlayerButton"><img src={require("../topStuff/whiteplay.jpg")} /></a>
                            <img src={thing.track.album.images[0].url} />
                            <p className="timeOfSong">{(thing.track.duration_ms / 60000).toFixed(2)}</p>
                            <p className="nameOfSong">{thing.track.name}</p>
                            <div className="artistsForTrack">{thing.track.artists.map((thing, i) => (
                                <p key={i}>{thing.name}</p>
                            ))}</div>
                        </div>
                    ))}

                </div>
                :
                null
            }
        </div>
    )
}

export default Recents