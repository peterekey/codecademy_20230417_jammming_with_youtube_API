import { Track } from './Track'

export function Playlist(props) {

    const cards = []

    props.playlistVideos.map(video => {
        cards.push(
            <Track 
                video={video}
                removeFromPlaylist={props.removeFromPlaylist}
            />
        )
    })

    return (
        <div className="column-container">
            <h2>
                <input type="text" placeholder="New playlist" className="Playlist-input"></input>
            </h2>
            {props.playlistVideos.length === 0 ? 'Add a video to playlist...' : cards}
        </div>
    )
}