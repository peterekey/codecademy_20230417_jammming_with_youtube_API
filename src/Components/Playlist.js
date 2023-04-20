export function Playlist({playlistVideos}) {
    return (
        <div className="column-container">
            <h2>
                <input type="text" placeholder="New playlist" className="Playlist-input"></input>
            </h2>
            {playlistVideos ? 'Add a video to playlist...' : playlistVideos}
        </div>
    )
}