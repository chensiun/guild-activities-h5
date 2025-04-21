import { useRef, useState, useEffect } from 'react';

import './style.less';

import closeSvg from '@/assets/close-white.svg';

export default function MediaController() {
  const [videoVisible, setVideoVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (videoRef?.current) {
        if (videoRef.current.paused) {
            videoRef.current.play()
        }
    }
  }, []);

  const onPlayOver = () => {
    setVideoVisible(false)
    if (audioRef?.current) {
        audioRef.current.play()
    }
  }

  return (
    <>
        { videoVisible && [
            <video
                ref={videoRef}
                className='video'
                muted
                autoPlay
                onEnded={onPlayOver}
                onError={onPlayOver}
            >
                <source src="/media/start-animation.mov" type="video/mp4" />
            </video>,
            <div className='close' onClick={onPlayOver}>
                <img src={closeSvg} className='closeSvg' />
            </div>
        ]}
        <audio
            ref={audioRef}
            className='audio'
            preload='auto'
            loop
        >
            <source src="/media/bgm.mp3" ></source>
        </audio>
    </>
  );
}
