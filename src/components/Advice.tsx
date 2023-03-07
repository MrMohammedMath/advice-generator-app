import React, { useEffect } from "react";
import style from "../scss/advice.module.scss";

export default function Advice() {
    const [advice, setAdvice] = React.useState<{ text: string, id: number } | undefined>(undefined);

    const getAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(json => setAdvice({ text: json.slip.advice, id: json.slip.id }));
    }

    React.useEffect(() => {
        getAdvice();
    }, []);

    function handleClick() {
        getAdvice();
    }

    return (
        <div className={style.advice}>
            <span className={style.advice__id}>Advice #{advice?.id}</span>
            <h1 className={style.advice__text}>&#8220;{advice?.text}&#8221;</h1>

            <picture>
                <source srcSet="./images/pattern-divider-desktop.svg" media="(min-width: 768px)" />
                <img src="./images/pattern-divider-mobile.svg" alt="divider" className={style.advice__divider} />
            </picture>

            <button className={style.advice__btn} onClick={handleClick}>
                <img src="./images/icon-dice.svg" alt="dice icon" className={style.advice__btn__icon} />
            </button>
        </div>
    );
}