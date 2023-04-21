import './styles.css'

export function Track(props) {

    function addToPlaylist(theVid) {

    }

    return (
        <div className="Track-card-container">
            <div>
                <img src={props.video.thumbnail} />
            </div>
            <div className="Track-card-info">
                <h3>{props.video.videoTitle}</h3>
                <h4>{props.video.channelTitle}</h4>
            </div>
            <div className="Track-card-info">
                <a href="#" onClick={() => props.addToPlaylist(props.video)}>+</a>
            </div>
        </div>
    )
}