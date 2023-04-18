import './styles.css'

export function Track({videoTitle, channelTitle}) {

    return (
        <div className="Track-card-container">
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