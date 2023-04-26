import { Track } from './Track'

export function Playlist(props) {

    const cards = []

    props.playlistVideos.map((video, index) => {
        return cards.push(
            <Track 
                video={video}
                removeFromPlaylist={props.removeFromPlaylist}
                key={index}
            />
        )
    })

    return (
        <div className="column-container">
            <h2>
                <input 
                    type="text" 
                    placeholder="New playlist" 
                    className="Playlist-input"
                    onChange={props.handlePlaylistNameChange}
                />
                &nbsp;
                <button 
                    className="submit-button" 
                    onClick={props.submitPlaylist}
                >
                    Save playlist
                </button>
            </h2>
            {props.playlistVideos.length === 0 ? 'Add a video to playlist...' : cards}
        </div>
    )
}