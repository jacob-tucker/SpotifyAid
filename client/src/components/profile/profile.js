import React, { useState, useEffect } from 'react';
import './profile.css'

import { logout, getCurrentProfile, getPlaylists, getFollowing } from '../../spotifyToken/spotify'

const Profile = () => {
    const [name, setName] = useState('')
    const [followers, setFollowers] = useState('')
    const [playlists, setPlaylists] = useState([])
    const [following, setFollowing] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const theProfile = await getCurrentProfile()
            const thePlaylists = await getPlaylists()
            const theFollowing = await getFollowing()
            console.log(theProfile)
            console.log(thePlaylists)
            console.log(theFollowing)
            console.log(thePlaylists.data.items)
            setName(theProfile.data.display_name)
            setFollowers(theProfile.data.followers.total)
            setPlaylists(thePlaylists.data.items)
            setFollowing(theFollowing.data.artists.items)
        }
        fetchData()

    }, [])

    return (
        <div>
            <div className="profile">
                <div className="image-name">
                    <div className="image">
                        <svg id="user-icon" viewBox="0 0 1024 1024" width="100%" height="100%">
                            <path d="m730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084q-29.747 19.159-51.175 57.729t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"></path>
                        </svg>
                    </div>
                    <div className="name">
                        <p>PROFILE</p>
                        <h1>{name}</h1>
                    </div>
                </div>
                <div className="logout">
                    <div className="info">
                        <h3 style={{ color: 'rgb(30,215,96)' }}>{followers}</h3><h3 style={{ color: 'white' }}>Followers</h3>
                        <h3 style={{ color: 'rgb(30,215,96)' }}>{playlists.length}</h3><h3 style={{ color: 'white' }}> Playlists</h3>
                        <h3 style={{ color: 'rgb(30,215,96)' }}>{following.length}</h3><h3 style={{ color: 'white' }}> Following</h3>
                    </div>
                    <a href='http://localhost:8888/' onClick={logout}>LOGOUT</a>
                </div>
            </div>

            <div className="bottomHalf">
                <h2>Your Playlists</h2>
                <div className="playlists">
                    {playlists.map((thing, i) => (
                        <div key={i} className="playlistCover">
                            <img alt="playlistcover" src={thing.images[0].url} />
                            <h4>{thing.name}</h4>
                            <p>By: {thing.owner.display_name}</p>
                            <p>{thing.tracks.total} TRACKS</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Profile;