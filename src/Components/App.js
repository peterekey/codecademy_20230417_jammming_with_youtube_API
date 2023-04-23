import './styles.css';
import React, { useState, useEffect, useRef } from 'react'
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
  const [newVideo, setNewVideo] = useState(null)

  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      console.log('First render playlist is ' + JSON.stringify(playlist))
      isFirstRender.current = false
    } else {
      setPlaylist((playlist) => (      
        [...playlist, newVideo]
      ))
      console.log('Subsequent render playlist is ' + JSON.stringify(playlist))
    }
  }, [newVideo])


  const handlePlaylistChange = (video) => {
    
    setNewVideo(prevNewVideo => {
      return {
        ...prevNewVideo,
        channelTitle: video.channelTitle,
        thumbnail: video.thumbnail,
        videoTitle: video.videoTitle,
        videoLink: video.videoLink
      }})

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
