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

                    <div className="description-text-container">
                        <p className="description-text">
                            <b>Data@Hand</b> is a cross-platform smartphone app that facilitates visual data exploration leveraging both speech and touch interactions.
                To overcome the smartphones’ limitations such as small screen size and lack of precise pointing input, Data@Hand leverages the synergy of speech and touch; speech-based interaction takes little screen space and natural language is flexible to cover different ways of specifying dates and their ranges (e.g., “<i>October 7th</i>”, “<i>Last Sunday</i>”, “<i>This month</i>”). Currently, Data@Hand supports displaying the <b>Fitbit</b> data (e.g., step count, heart rate, sleep, and weight) for navigation and temporal comparisons tasks.
                </p>

                        <div className="description-keywords-container">
                            <div className="keyword-title">
                                Keywords
                            </div>
                            <div className="keyword-list">
                                <div className="keyword">Persomal Health Informatics</div>
                                <div className="keyword">Mobile Data Visualization</div>
                                <div className="keyword">Multimodal Interaction</div>
                                <div className="keyword">Natural Language Interface</div>
                                <div className="keyword">Smartphone</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <Video />
        <Publication />
        <Team />
    </>
}