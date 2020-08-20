import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { getTopArtists, getTopTracks } from '../../spotifyToken/spotify'
import './topStuff.css'

const TopStuff = () => {
    const [which, setWhich] = useState('artists')
    const [topArtists, setTopArtists] = useState(null)
    const [topTracks, setTopTracks] = useState(null)
    const button1Ref = useRef(null)
    const button2Ref = useRef(null)

    useEffect(() => {
        const myArtistsReference = button1Ref.current;
        myArtistsReference.style.borderBottom = 'solid'

        const fetchData = async () => {
            const theTopArtists = await getTopArtists()
            const theTopTracks = await getTopTracks()
            console.log(theTopArtists)
            console.log(theTopTracks)
            setTopArtists(theTopArtists)
            setTopTracks(theTopTracks)

        }
        fetchData()
    }, [])

    const setToArtists = () => {
        setWhich('artists')
        const myArtistsReference = button1Ref.current;
        const myTracksReference = button2Ref.current;
        myArtistsReference.style.borderBottom = 'solid'
        myTracksReference.style.borderBottom = 'none'
    }

    const setToTracks = () => {
        setWhich('tracks')
        const myArtistsReference = button1Ref.current;
        const myTracksReference = button2Ref.current;
        myArtistsReference.style.borderBottom = 'none'
        myTracksReference.style.borderBottom = 'solid'
    }

    return (
        <div className="whole">
            <div className="topSelector">
                <div className="topArtistsSelector"><button ref={button1Ref} onClick={setToArtists}>Top Artists</button></div>
                <div className="topTracksSelector"><button ref={button2Ref} onClick={setToTracks}>Top Tracks</button></div>
            </div>
            <div className="topThings">
                {which === 'artists' && topArtists
                    ?
                    <div className="topArtists">
                        {topArtists.data.items.map((thing, i) => (
                            <Link key={i} className="artistSlot" to={{
                                pathname: `/topStuff/${thing.name}`,
                                state: {
                                    artist: thing
                                }
                            }} >
                                <div className="imageArtist">
                                    <img className="img1" src={thing.images[0].url} />
                                    <div className="picPlacement">
                                        <img className="img2" src={require('./spotifybutton.png')} />
                                    </div>
                                </div>
                                <p>{thing.name}</p>
                            </Link>
                        ))}
                    </div>
                    :
                    topTracks
                        ?
                        <div className="topTracks">
                            {topTracks.data.items.map((thing, i) => (
                                <div tabIndex="1" className="trackDetails" key={i}>
                                    <a href={thing.preview_url} className="thePlayerButton"><img src={require("./whiteplay.jpg")} /></a>
                                    <img src={thing.album.images[0].url} />
                                    <p className="timeOfSong">{(thing.duration_ms / 60000).toFixed(2)}</p>
                                    <p className="nameOfSong">{thing.name}</p>
                                    <div className="artistsForTrack">{thing.artists.map((thing, i) => (
                                        <p key={i}>{thing.name}</p>
                                    ))}</div>
                                </div>
                            ))}
                        </div>
                        :
                        null
                }
            </div>
        </div >

    )
}

export default TopStuff;