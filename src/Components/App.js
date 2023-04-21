import './styles.css';
import React, { useState } from 'react'
import { SearchResults } from './SearchResults'
import { SearchBar } from './SearchBar'
import { Playlist } from './Playlist'
import sampleResponse from '../Assets/sampleResponse.json'

function App() {

  const getDataFromResponse = (response) => {
    let results = []

    for (let i = 0; i < response.items.length; i ++) {
        let resultType = response.items[i].id.kind
        if (resultType === 'youtube#video') {
            results.push({
                videoTitle: response.items[i].snippet.title, 
                channelTitle: response.items[i].snippet.channelTitle,
                thumbnail: response.items[i].snippet.thumbnails.default.url,
                videoLink: response.items[i].id.videoId
            })
        }
    }

    return results
  }

  const responseData = getDataFromResponse(sampleResponse)

  const [playlist, setPlaylist] = useState([])
  const [newVideo, setNewVideo] = useState({})

  const handlePlaylistChange = ({channelTitle, thumbnail, videoLink, videoTitle}) => {
    setNewVideo((prev) => ({
      ...prev,
      channelTitle: channelTitle,
      thumbnail: thumbnail,
      videoTitle: videoTitle,
      videoLink: videoLink
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setPlaylist((playlist) => (
      [newVideo, ...playlist]
    ))

    setNewVideo(() => ({
      channelTitle: '',
      thumbnail: '',
      videoTitle: '',
      videoLink: ''
    }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming: YouTube</h1>
      </header>
      <main>
        <SearchBar />
        <div className="App-body">
          <SearchResults 
            responseObject={responseData} 
            handlePlaylistChange={handlePlaylistChange}
          />
          <Playlist playlistVideos={playlist}/>
        </div>
      </main>
      <footer className="App-footer">
        &nbsp;
      </footer>
    </div>
  );
}

export default App;
