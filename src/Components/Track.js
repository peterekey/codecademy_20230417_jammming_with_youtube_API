import './styles.css'

export function Track(props) {



    return (
        <div className="Track-card-container">
            <div>
                <a href={"http://www.youtube.com/watch?v=" + props.video.videoLink} target="_blank"><img src={props.video.thumbnail} /></a>
            </div>
            <div className="Track-card-info">
                <h3><a href={"http://www.youtube.com/watch?v=" + props.video.videoLink} target="_blank">{props.video.videoTitle}</a></h3>
                <h4>{props.video.channelTitle}</h4>
            </div>
            <div className="Track-card-info">
                <a href="#" onClick={() => props.addToPlaylist ? props.addToPlaylist(props.video) : props.removeFromPlaylist(props.video)}>
                    {props.addToPlaylist ? '+' : '-'}
                </a>
            </div>
        </div>
    )
}