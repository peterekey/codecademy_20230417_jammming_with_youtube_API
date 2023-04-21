import { Track } from './Track'

export function Tracklist(props) {

    const cards = []

    props.videos.map(video => {
        console.log(video.thumbnail)
        cards.push(
            <Track 
                video={video}
                addToPlaylist={props.handlePlaylistChange}
            />)
    })

    return (
        <>
            {cards}
        </>
    )
}