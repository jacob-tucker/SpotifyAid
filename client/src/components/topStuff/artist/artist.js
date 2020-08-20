import React from 'react';


import './artist.css'

const Artist = ({ location }) => {
    const artist = location.state.artist
    console.log(location.state.artist)

    return (
        <div>
            {artist
                ?
                <div className="diver">
                    <a target="_blank" href={artist.external_urls.spotify} className="artistCombinedPhotos">
                        <img className="artistPicture" src={artist.images[0].url} />
                        <img className="spotifySender" src={require('./playbutton.png')} />
                    </a>

                    <div className="artistInfo">
                        <p>ARTIST</p>
                        <h1>{artist.name}</h1>
                    </div>

                    <div className="allInfo">
                        <div id="artistFollowers">
                            <h4>FOLLOWERS</h4>
                            <p>{artist.followers.total}</p>
                        </div>
                        <div id="artistPopularity">
                            <h4>POPULARITY</h4>
                            <p>{artist.popularity}%</p>
                        </div>
                        <div id="artistGenres">
                            <h4>GENRES</h4>

                            {artist.genres.map((thing, i) => {
                                return <p key={i}>{thing}</p>
                            })}
                        </div>
                    </div>
                </div >
                :
                null
            }
        </div>
    )
}

export default Artist;