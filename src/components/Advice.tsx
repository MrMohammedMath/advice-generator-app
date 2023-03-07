import React, { useEffect } from "react";

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
        <div className="advice">
            <span className="advice__id">Advice #{advice?.id}</span>
            <h1 className="advice__text">&#8220;{advice?.text}&#8221;</h1>

            <picture>
                <source srcSet="./images/pattern-divider-desktop.svg" media="(min-width: 768px)" />
                <img src="./images/pattern-divider-mobile.svg" alt="divider" className="advice__divider" />
            </picture>

            <button className="advice__btn" onClick={handleClick}>
                <img src="./images/icon-dice.svg" alt="dice icon" className="advice__btn__icon" />
            </button>
        </div>
    );
}