import React, { useState, useEffect } from 'react'
import './trackInfoSpecific.css'

import { getAudioAnalysis, getTrackFromSearch } from '../../../spotifyToken/spotify'

const TrackInfoSpecific = ({ location }) => {
    const [trackInfo, setTrackInfo] = useState(null)
    const [analysis, setAnalysis] = useState(null)

    useEffect(() => {
        const getEverything = async () => {
            const allTracksFromSearch = await getTrackFromSearch(`"${location.state.track}"`)
            setTrackInfo(allTracksFromSearch.data.tracks.items[0])

            const trackStatistics = await getAudioAnalysis(allTracksFromSearch.data.tracks.items[0].id)
            setAnalysis(trackStatistics.data)
        }
        getEverything()
    }, [location.state.track])

    useEffect(() => {
        console.log(trackInfo)
        console.log(analysis)
    }, [trackInfo, analysis])

    return (
        <div>
            {trackInfo && analysis
                ?
                <div className="wholeTrackPage">
                    <div className="specificTrack">
                        <img alt="albumcover" src={trackInfo.album.images[0].url} />
                        <div className="specificTrackInfo">
                            <h4>{trackInfo.name}</h4>
                            <h5>{trackInfo.artists[0].name}</h5>
                            <h6>{trackInfo.album.release_date}</h6>
                            <a target='_blank' rel="noopener noreferrer" href={trackInfo.external_urls.spotify}>OPEN ON SPOTIFY</a>
                        </div>
                    </div>
                    <div className="analysisChart">
                        <div className="cluster">
                            <p>Acousticness</p>
                            <div className="chartElement1" style={{ width: analysis.acousticness * 1000 }}></div>
                        </div>
                        <div className="cluster">
                            <p>Danceability</p>
                            <div className="chartElement2" style={{ width: analysis.danceability * 1000 }}></div>
                        </div>
                        <div className="cluster">
                            <p>Energy</p>
                            <div className="chartElement3" style={{ width: analysis.energy * 1000 }}></div>
                        </div>
                        <div className="cluster">
                            <p>Instrumental</p>
                            <div className="chartElement4" style={{ width: analysis.instrumentalness * 1000 }}></div>
                        </div>
                        <div className="cluster">
                            <p>Liveness</p>
                            <div className="chartElement5" style={{ width: analysis.liveness * 1000 }}></div>
                        </div>
                        <div className="cluster">
                            <p>Speechiness</p>
                            <div className="chartElement6" style={{ width: analysis.speechiness * 1000 }}></div>
                        </div>
                        <div className="cluster">
                            <p>Valence</p>
                            <div className="chartElement7" style={{ width: analysis.valence * 1000 }}></div>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default TrackInfoSpecific