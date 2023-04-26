import './styles.css';
import React, { useState, useEffect, useRef } from 'react'
import { SearchResults } from './SearchResults'
import { SearchBar } from './SearchBar'
import { Playlist } from './Playlist'

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

  const submitSearch = async () => {
    
    if (!searchInput) {
      return alert('You need to type something in the search box!')
    }

    console.log(searchInput)
    console.log(process.env.REACT_APP_SECRET_KEY)

    const query = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_SECRET_KEY}&q=${searchInput}`
    console.log(query)
    
    const response = await fetch(query)

    if (!response.ok) {
      const message = `An error has okurrred: ${response.status}`
      console.log(message)
      throw new Error(message)
    }

    console.log(response)

    const videos = await response.json()
    console.log(videos)

    setResponseData(getDataFromResponse(videos))
    
    return
  }

  const submitPlaylist = () => {
    console.log('Clicked submit playlist')
  }

  const [searchInput, setSearchInput] = useState('')
  const [playlist, setPlaylist] = useState([])
  const [newVideo, setNewVideo] = useState(null)
  const [playlistName, setPlaylistName] = useState('')
  const [responseData, setResponseData] = useState('')

  const handleSearchInput = ({target}) => {
    setSearchInput(target.value)
  }

  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    } else {
      setPlaylist((playlist) => (      
        [...playlist, newVideo]
      ))
    }
  }, [newVideo])

  const handleDelete = (videoToDelete) => {

    console.log(`Before running handleDelete, playlist is ${JSON.stringify(playlist)}`)
    const indexToRemove = playlist.findIndex(video => video.videoLink === videoToDelete.videoLink)

    setPlaylist(playlist.filter((video, index) => index != indexToRemove))
    console.log(`After running handleDelete, playlist is ${JSON.stringify(playlist)}`)
  }

  const handlePlaylistChange = (videoToAdd) => {
    
    setNewVideo(prevNewVideo => {
      return {
        ...prevNewVideo,
        channelTitle: videoToAdd.channelTitle,
        thumbnail: videoToAdd.thumbnail,
        videoTitle: videoToAdd.videoTitle,
        videoLink: videoToAdd.videoLink
      }})

  }

  const handlePlaylistNameChange = ({target}) => {
    setPlaylistName(target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming: YouTube</h1>
      </header>
      <main>
        <SearchBar 
          submitSearch={submitSearch}
          handleSearchInput={handleSearchInput}
        />
        <div className="App-body">
          <SearchResults 
            responseObject={responseData} 
            handlePlaylistChange={handlePlaylistChange}
          />
          <Playlist 
            playlistVideos={playlist}
            removeFromPlaylist={handleDelete}
            handlePlaylistNameChange={handlePlaylistNameChange}
            handleSearchInput={handleSearchInput}
            submitPlaylist={submitPlaylist}
          />
        </div>
      </main>
      <footer className="App-footer">
        &nbsp;
      </footer>
    </div>
  );
}

export default App;
