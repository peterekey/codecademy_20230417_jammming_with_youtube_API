import { Track } from './Track'

export function Tracklist({videos}) {
    console.log(videos)

    const cards = []

    videos.map(video => {
        cards.push(
            <Track 
                videoTitle={video.videoTitle}
                channelTitle={video.channelTitle}
                videoId={video.videoLink}
                imgUrl={video.thumbnail}
            />)
    })

    return (
        <>
            {cards}
        </>
    )
}