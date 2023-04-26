import { Track } from './Track'

export function Tracklist(props) {

    const cards = []

    props.videos.map((video, index) => {
        return cards.push(
            <Track 
                video={video}
                addToPlaylist={props.handlePlaylistChange}
                key={index}
            />)
    })

    return (
        <>
            {cards}
        </>
    )
}