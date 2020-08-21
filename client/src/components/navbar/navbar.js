import React, { useRef, useEffect } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const profileLink = useRef()
    const topStatsLink = useRef()
    const trackInfo = useRef()
    const recents = useRef()

    useEffect(() => {
        if (window.location.pathname === '/topStuff') focusTopStats()
        else if (window.location.pathname === '/') focusProfile()
        else if (window.location.pathname === '/trackInfo') focusTrackInfo()
        else focusRecents()
    }, [])

    const focusProfile = () => {
        const myProfileReference = profileLink.current;
        const myTopStatsReference = topStatsLink.current;
        const myTrackInfo = trackInfo.current;
        const myRecents = recents.current;

        myProfileReference.classList.add('active')
        if (myTopStatsReference.classList.contains('active')) myTopStatsReference.classList.remove('active')
        if (myTrackInfo.classList.contains('active')) myTrackInfo.classList.remove('active')
        if (myRecents.classList.contains('active')) myRecents.classList.remove('active')
    }

    const focusTopStats = () => {
        const myProfileReference = profileLink.current;
        const myTopStatsReference = topStatsLink.current;
        const myTrackInfo = trackInfo.current;
        const myRecents = recents.current;

        myTopStatsReference.classList.add('active')
        if (myProfileReference.classList.contains('active')) myProfileReference.classList.remove('active')
        if (myTrackInfo.classList.contains('active')) myTrackInfo.classList.remove('active')
        if (myRecents.classList.contains('active')) myRecents.classList.remove('active')
    }

    const focusTrackInfo = () => {
        const myProfileReference = profileLink.current;
        const myTopStatsReference = topStatsLink.current;
        const myTrackInfo = trackInfo.current;
        const myRecents = recents.current;

        myTrackInfo.classList.add('active')
        if (myProfileReference.classList.contains('active')) myProfileReference.classList.remove('active')
        if (myTopStatsReference.classList.contains('active')) myTopStatsReference.classList.remove('active')
        if (myRecents.classList.contains('active')) myRecents.classList.remove('active')
    }

    const focusRecents = () => {
        const myProfileReference = profileLink.current;
        const myTopStatsReference = topStatsLink.current;
        const myTrackInfo = trackInfo.current;
        const myRecents = recents.current;

        myRecents.classList.add('active')
        if (myProfileReference.classList.contains('active')) myProfileReference.classList.remove('active')
        if (myTopStatsReference.classList.contains('active')) myTopStatsReference.classList.remove('active')
        if (myTrackInfo.classList.contains('active')) myTrackInfo.classList.remove('active')
    }

    return (
        <div className="navbar">
            <div className="title">
                <img alt="spotifylogo" width='20px' height='20px' src={require('./spotifyimage.png')} />
                <h2>SpotifyAid</h2>
            </div>
            <Link ref={profileLink} className="profileTab" to="/" onClick={() => focusProfile()}>
                <img alt="profileicon" src={require('./profileicon.png')} /><h2>Profile</h2>
            </Link>
            <Link ref={topStatsLink} className="topStuff" to="/topStuff" onClick={() => focusTopStats()}>
                <img alt="statsicon" src={require('./statsicon.png')} /><h2>Top Stats</h2>
            </Link>
            <Link ref={trackInfo} className="trackInfo" to="/trackInfo" onClick={() => focusTrackInfo()}>
                <img alt="musicnoteicon" src={require('./musicalnoteiconn.png')} /><h2>Track Info</h2>
            </Link>
            <Link ref={recents} className="recents" to="/recents" onClick={() => focusRecents()}>
                <img alt="rewindicon" src={require('./reverseclockicon.png')} /><h2>Recents</h2>
            </Link>
        </div>
    )
}

export default Navbar;