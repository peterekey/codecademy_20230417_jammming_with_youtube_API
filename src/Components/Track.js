import './Track.css'

export function Track({videoTitle, channelTitle}) {

    return (
        <div class="card">
            <h3>{videoTitle}</h3>
            <h4>{channelTitle}</h4>
        </div>
    )
}