import './App.css';
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


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming: YouTube</h1>
      </header>
      <main>
        <SearchBar />
        <div class="container">
          <SearchResults responseObject={responseData} />
          <Playlist />
        </div>
      </main>
    </div>
  );
}

export default App;
