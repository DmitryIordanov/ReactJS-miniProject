import React from 'react';
import cl from './MyMainFon.module.css';

const MainFon = ({title, desc}) => {
    return (
        <div className={cl.MainFon__block}>
            <div className={cl.content}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className={cl.overlay}></div>
            <div className={cl.Fon}></div>
        </div>
    );
};

export default MainFon;