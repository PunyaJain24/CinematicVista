import { useParams } from "react-router-dom";
import PlayVideo from "./PlayVideo";

const Video = () => {
    const {videoId} = useParams();

    return (
        <div>
            <PlayVideo videoId={videoId} />
        </div>
    )
};

export default Video;