import './styles.css'

export function Track({videoTitle, channelTitle, videoId, imgUrl}) {

    const addOrRemove = () => {
        
    }

    return (
        <div className="Track-card-container">
            <div>
                <img src={imgUrl} />
            </div>
            <div className="Track-card-info">
                <h3>{videoTitle}</h3>
                <h4>{channelTitle}</h4>
            </div>
            <div className="Track-card-info">
                +
            </div>
        </div>
    )
}