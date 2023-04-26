import { Tracklist } from './Tracklist'
import './styles.css'

export function SearchResults(props) {

    return (
        <div className="column-container">
            <h2>Results</h2>
            <div className="SearchResults-container">
                {props.responseObject.length === 0 ? 'Search for a video to begin' : <Tracklist 
                    videos={props.responseObject}
                    handlePlaylistChange={props.handlePlaylistChange}
                />}
            </div>
        </div>
    )
}