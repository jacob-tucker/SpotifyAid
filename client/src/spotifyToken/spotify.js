import axios from 'axios';

const getHashParams = () => {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
};

// TOKENS ******************************************************************************************
const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds

const setTokenTimestamp = () => window.localStorage.setItem('token_time', Date.now());
const setLocalAccessToken = token => {
    setTokenTimestamp();
    window.localStorage.setItem('access_token', token);
};
const setLocalRefreshToken = token => window.localStorage.setItem('refresh_token', token);
const getTokenTimestamp = () => window.localStorage.getItem('token_time');
const getLocalAccessToken = () => window.localStorage.getItem('access_token');
const getLocalRefreshToken = () => window.localStorage.getItem('refresh_token');

// Refresh the token
const refreshAccessToken = async () => {
    try {
        const { data } = await axios.get(`http://localhost:8888/refresh_token?refresh_token=${getLocalRefreshToken()}`);
        const { access_token } = data;
        setLocalAccessToken(access_token);
        window.location.reload();
        return;
    } catch (e) {
        console.error(e);
    }
};

// Get access token off of query params (called on application init)
export const getAccessToken = () => {
    const { error, access_token, refresh_token } = getHashParams();

    if (error) {
        console.error(error);
        refreshAccessToken();
    }

    // If token has expired
    if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
        console.warn('Access token has expired, refreshing...');
        refreshAccessToken();
    }

    const localAccessToken = getLocalAccessToken();
    const localRefreshToken = getLocalRefreshToken();

    // If there is no REFRESH token in local storage, set it as `refresh_token` from params
    if (!localRefreshToken || localRefreshToken === 'undefined') {
        setLocalRefreshToken(refresh_token);
    }

    // If there is no ACCESS token in local storage, set it and return `access_token` from params
    if (!localAccessToken || localAccessToken === 'undefined') {
        setLocalAccessToken(access_token);
        return access_token;
    }

    return localAccessToken;
};

export const token = getAccessToken();

export const logout = () => {
    window.localStorage.removeItem('token_time');
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');
    window.location.reload();
};

// API CALLS ***************************************************************************************

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

export const getCurrentProfile = () => axios.get('https://api.spotify.com/v1/me/', { headers })

export const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers })

export const getFollowing = () => axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers })

export const getTopTracks = () => axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=long_term', { headers })

export const getTopArtists = () => axios.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term', { headers })

export const getAudioAnalysis = (trackURI) => {
    return axios.get(`https://api.spotify.com/v1/audio-features/${trackURI}`, { headers })
}

export const getTrackFromSearch = (track) => {
    console.log(track)
    console.log(`https://api.spotify.com/v1/search?q=${track}&type=track`)
    return axios.get(`https://api.spotify.com/v1/search?q=${track}&type=track`, { headers })
}