import React from 'react';
import { Video } from '../../Video';
import { Publication } from './Publication';
import { Team } from './Team';
import './MainPage.scss';

import loopmp4 from '../../../assets/teaser-loop.mp4';



export const MainPage = () => {
    return <>

        <div className="container project-description">
            <div className="section-content">
                <div className="headline">Fostering Visual Exploration of <i>Personal Data</i> on Smartphones<br />Leveraging <b>Speech</b> and <b>Touch</b> Interaction</div>

                <div className="description-content-container">
                    <video className="teaser-loop" autoPlay loop muted playsinline>
                        <source src={loopmp4} type="video/mp4" />
                    </video>

                    <p className="description-text">
                        <b>Data@Hand</b> is a cross-platform smartphone app that facilitates visual data exploration leveraging both speech and touch interactions.
                Data visualization is a common way that mobile health apps enable people to explore their data on smartphones.
                However, due to smartphones’ limitations such as small screen size and lack of precise pointing input,
                they provide limited support for visual data exploration with over-simplified time navigation, even though time is a primary dimension of self-tracking data. Data@Hand leverages the synergy of speech and touch; speech-based interaction takes little screen space and natural language is flexible to cover different ways of specifying dates and their ranges (e.g., “<i>October 7th</i>”, “<i>Last Sunday</i>”, “<i>This month</i>”). Currently, Data@Hand supports displaying the <b>Fitbit</b> data (e.g., step count, heart rate, sleep, and weight) for navigation and temporal comparisons tasks.
                </p>
                </div>
            </div>
        </div>

        <Video />
        <Publication />
        <Team />
    </>
}