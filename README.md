# SpotifyAid
SpotifyAid is a web application that allows users to see all of their personal spotify statistics, whether it be their top tracks, artists, most recent songs,
and more.

## Components
The client side is hosted on Netlify and is build using React.js and Sass. Each user logs in and is given a spotify access token so that the client
can make requests to the Spotify Web API to retreive their statistics. The backend is hosted on Heorku and is built using Node.js.

## Features
Each user has the ability to see their current profile and the amount of followers/playlists/artists they follow on their Profile tab. They can browse 
through a list of their playlists and open up their profile on Spotify.

The user also has a Top Stats page where they can see a list of their top artists and top tracks. The user can click on an artist to see specific
statistics about that artist, including their popularity, genre, and more. They can also scroll through their tracks and play a preview
of the song from the web app.

There is also a Track Info tab where the user can look up any song on spotify and see the specific statistics for each track, including its energy, liveliness,
and more. The user can also open up the track on Spotify and play it through there.

Lastly, the user can see their most recent tracks on the Recents tab and play a preview of each song there.
