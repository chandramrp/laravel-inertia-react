import React, { useRef, useState, useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default function VideoPlayer({
    source,
    subtitle,
    onTimeUpdate,
    startTime = 0,
}) {
    const playerRef = useRef(null);
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        if (!playerRef.current) return;

        const newPlayer = new Plyr(playerRef.current, {
            controls: [
                "play-large",
                "play",
                "progress",
                "current-time",
                "duration",
                "mute",
                "volume",
                "captions",
                "settings",
                "pip",
                "airplay",
                "fullscreen",
            ],
            quality: {
                default: 720,
                options: [360, 480, 720, 1080],
            },
            speed: {
                selected: 1,
                options: [0.5, 0.75, 1, 1.25, 1.5, 2],
            },
        });

        setPlayer(newPlayer);

        return () => {
            if (newPlayer) {
                newPlayer.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (player && startTime > 0) {
            player.currentTime = startTime;
        }
    }, [player, startTime]);

    return (
        <div className="relative w-full aspect-video bg-black">
            <video
                ref={playerRef}
                className="w-full h-full"
                playsInline
                onTimeUpdate={(e) => onTimeUpdate?.(e.target.currentTime)}
            >
                <source src={source} type="video/mp4" />
                {subtitle && (
                    <track
                        kind="captions"
                        label="English"
                        srcLang="en"
                        src={subtitle}
                        default
                    />
                )}
            </video>
        </div>
    );
}
