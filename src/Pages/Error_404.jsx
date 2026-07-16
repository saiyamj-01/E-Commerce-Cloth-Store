import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Error_404.module.css";

export default function Error_404() {
    const [stars, setStars] = useState([]);

    const generateStars = useCallback((count) => {
        return Array.from({ length: count }, (_, i) => ({
            id: `star-${count}-${i}-${Math.random().toString(36).substring(2, 9)}`,
            size: Math.random() * 2 + 1,
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 3 + 4,
            delay: Math.random() * 4,
            direction: Math.random() > 0.5 ? "topLeft" : "topRight",
        }));
    }, []);

    useEffect(() => {
        setStars(generateStars(30));

        const interval = setInterval(() => {
            setStars((prev) => {
                const activeStars = prev.slice(-20);
                const newStars = generateStars(10);
                return [...activeStars, ...newStars];
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [generateStars]);

    return (
        <div className={styles.container}>
            <div className={styles.bgSpace} />

            <div className={styles.starsLayer}>
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className={`${styles.starItem} ${star.direction === "topLeft" ? styles.animateFallTopLeft : styles.animateFallTopRight
                            }`}
                        style={{
                            top: star.top,
                            left: star.left,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDuration: `${star.duration}s`,
                            animationDelay: `${star.delay}s`,
                        }}
                    >
                        <div className={styles.starDot} />
                    </div>
                ))}
            </div>

            <div className={styles.ufoWrapper}>
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8794272-p5k6GdbD8O2RIat5GWtUGJGkDgXoxf.png"
                    alt="UFO"
                    className={styles.ufoImg}
                />
            </div>

            <div className={styles.contentLayer}>
                <h1 className={styles.title404}>404</h1>
                <p className={styles.desc404}>
                    Oops! Looks like this page got lost in space
                </p>
                <Link to="/" className={styles.btnHome}>
                    Return Home
                </Link>
            </div>
        </div>
    );
}
