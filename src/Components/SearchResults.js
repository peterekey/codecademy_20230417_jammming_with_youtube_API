import { Tracklist } from './Tracklist'
import './SearchResults.css'

export function SearchResults({responseObject}) {

    return (
        <>
            <div class="container-column">
                <h2 class="column">Results</h2>
                <div class="column">
                    <Tracklist 
                        videos={responseObject}
                    />
                </div>
            </div>
        </>
    )
}