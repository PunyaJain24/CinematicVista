const PlayVideo = ({videoId}) => {
    return (
        <div className="bg-black h-screen py-64 md:py-0">
            <iframe
                className="h-96 w-screen md:h-screen py-2 left-0 right-0"
                src={"https://www.youtube.com/embed/"+videoId}
                title="youtube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default PlayVideo;