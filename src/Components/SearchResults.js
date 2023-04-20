import { Tracklist } from './Tracklist'
import './styles.css'

export function SearchResults({responseObject}) {

    return (
        <div className="column-container">
            <h2>Results</h2>
            <div className="SearchResults-container">
                <Tracklist 
                    videos={responseObject}
                />
            </div>
        </div>
    )
}