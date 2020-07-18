import React from 'react';
import fist from '../assets/fist.png';

type HeaderSelect = "home" | "contact-reps" | "peoples-budget" | "spread-the-word" | "resources";

interface HeaderProps {
    highlighted: HeaderSelect;
}

export const Header = (props: HeaderProps) => {
    function getClassName(highlighted: HeaderSelect, current: HeaderSelect): string {
        return highlighted === current ? 'active' : '';
    }

    return (
        <div className="header">
            <a href="/" className="logo"><img src={fist} /></a>
            <div className="header-right">
                <a className={getClassName('home', props.highlighted)} href="/">Home</a>
                <a className={getClassName('contact-reps', props.highlighted)} href="/contact-reps" > Contact Your Rep</a>
                <a className={getClassName('peoples-budget', props.highlighted)} href="/peoples-budget">People's Budget</a>
                <a className={getClassName('spread-the-word', props.highlighted)} href="/spread-the-word">Spread the Word</a>
                <a className={getClassName('resources', props.highlighted)} href="/resources">Learn More</a>
            </div>
        </div>
    );
};

export default Header;
