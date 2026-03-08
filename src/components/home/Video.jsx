import React, { useState } from 'react';

const Video = () => {
    const videoList = ['/video.mp4', '/video2.mp4'];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => {
        if (prevIndex === videoList.length - 1) {
            return 0;
        }
            return prevIndex + 1;
        });
    };

    return (
        <div>
            <video 
                src={videoList[currentVideoIndex]} 
                autoPlay 
                muted 
                playsInline 
                onEnded={handleVideoEnd} 
                style={{ width: '100%', height: 'auto', pointerEvents: 'none' }}
            >
            </video>
        </div>
    );
};

export default Video;