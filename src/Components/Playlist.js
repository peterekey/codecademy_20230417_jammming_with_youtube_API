import { Track } from './Track'

export function Playlist({playlistVideos}) {

    // const thePlaylist = {playlistVideos}

    // useEffect(() => {

    // })

    const cards = []

    playlistVideos.map(video => {
        cards.push(
            <Track 
                video={video}
            />
        )
    })

    return (
        <div className="column-container">
            <h2>
                <input type="text" placeholder="New playlist" className="Playlist-input"></input>
            </h2>
            {console.log(playlistVideos.length > 0)}
            {playlistVideos.length === 0 ? 'Add a video to playlist...' : cards}
        </div>
    )
}