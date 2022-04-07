import React, { FC } from 'react';
import { ProductIds, Products } from '../../config';
import './home.css';

export const Home: FC = () => (
    <div className='page-container'>
        <div className='home-page-text'>
            <h1>Welcome to Getsafe's Insurance</h1>
            <p>You can go ahead with below insurances:</p>
        </div>
        <ul className='insurance-list'>
            {Object.keys(Products).map((key: string) => {
                const { name, url } = Products[key as ProductIds];
                return (
                    <li key={key}>
                        <a href={url}>{name}</a>
                    </li>
                );
            })}
        </ul>
    </div>
);
