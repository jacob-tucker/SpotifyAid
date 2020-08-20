import React, { useRef, useEffect } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const profileLink = useRef()
    const topStatsLink = useRef()
    const trackInfo = useRef()

    useEffect(() => {
        if (window.location.pathname === '/topStuff') focusTopStats()
        else if (window.location.pathname === '/') focusProfile()
        else focusTrackInfo()
    }, [])

    const focusProfile = () => {
        const myProfileReference = profileLink.current;
        const myTopStatsReference = topStatsLink.current;
        const myTrackInfo = trackInfo.current;

        myProfileReference.classList.add('active')
        if (myTopStatsReference.classList.contains('active')) myTopStatsReference.classList.remove('active')
        if (myTrackInfo.classList.contains('active')) myTrackInfo.classList.remove('active')
    }

    const focusTopStats = () => {
        const myProfileReference = profileLink.current;
        const myTopStatsReference = topStatsLink.current;
        const myTrackInfo = trackInfo.current;

        myTopStatsReference.classList.add('active')
        if (myProfileReference.classList.contains('active')) myProfileReference.classList.remove('active')
        if (myTrackInfo.classList.contains('active')) myTrackInfo.classList.remove('active')
    }

    const focusTrackInfo = () => {
        const myProfileReference = profileLink.current;
        const myTopStatsReference = topStatsLink.current;
        const myTrackInfo = trackInfo.current;

        myTrackInfo.classList.add('active')
        if (myProfileReference.classList.contains('active')) myProfileReference.classList.remove('active')
        if (myTopStatsReference.classList.contains('active')) myTopStatsReference.classList.remove('active')
    }

    return (
        <div className="navbar">
            <div className="title">
                <img width='20px' height='20px' src={require('./spotifyimage.png')} />
                <h2>SpotifyAid</h2>
            </div>
            <Link ref={profileLink} className="profileTab" to="/" onClick={() => focusProfile()}>
                <img src={require('./profileicon.png')} /><h2>Profile</h2>
            </Link>
            <Link ref={topStatsLink} className="topStuff" to="/topStuff" onClick={() => focusTopStats()}>
                <img src={require('./statsicon.png')} /><h2>Top Stats</h2>
            </Link>
            <Link ref={trackInfo} className="trackInfo" to="/trackInfo" onClick={() => focusTrackInfo()}>
                <img src={require('./statsicon.png')} /><h2>Track Info</h2>
            </Link>
        </div>
    )
}

export default Navbar;