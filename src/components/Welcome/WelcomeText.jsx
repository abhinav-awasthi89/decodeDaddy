import React, { useEffect, useState } from 'react';
import styles from './WelcomeText.module.css';

function WelcomeText() {
    const [text, setText] = useState("d");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const welcomeText = "igitally.";
        const timer = setTimeout(() => {
            if (index < welcomeText.length) {
                setText(prevText => prevText + welcomeText[index]);
                setIndex(prevIndex => prevIndex + 1);
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div>

            <span className={styles.heading}>
                Transforming
            </span>
            <span className={styles.heading}>
                businesses
            </span>
            <span className={styles.outlinedText}>
                {text}
            </span>
            <p className={styles.paragraph}>Helping businesses shift from Physical
            </p><p className={styles.paragraph}>to Digital embracing digital
            </p><p className={styles.paragraph}>transformation.
            </p>
            <button className={styles.button}>get a quote</button>
        </div>
    );
}

export default WelcomeText;
