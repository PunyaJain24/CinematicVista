const VideoTitle = ({title, overview}) => {
    return (
        <div className="pt-[20%] aspect-video w-screen px-6 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="my-4 w-1/2 font-serif">{overview}</p>
            <button className="bg-white p-3 w-24 text-black rounded-lg font-mono font-semibold my-3 hover:bg-opacity-75"> Play</button>
            <button className="bg-gray-500 p-3 w-24 mx-2 text-white rounded-lg">More Info</button>
        </div>
    );
};
export default VideoTitle;