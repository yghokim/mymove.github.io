import React from 'react';
import { Video } from '../../Video';
import { Publication } from './Publication';
import { Team } from './Team';
import { SystemInformation } from './SystemInformation';
import { Acknowledgment } from './Acknowledgment';
import './MainPage.scss';

//import loopmp4 from '../../../assets/teaser-loop.mp4';


//<!--<source src={loopmp4} type="video/mp4" />-->

export const MainPage = () => {
    return <>

        <div className="container project-description">
            <div className="section-content">
                <div className="headline">Designing Teachable Activity Trackers for/with Older Adults</div>

                <div className="description-content-container">

                    <div className="teaser-image">
                        Placeholder for Teaser Image
                    </div>
                    <div className="description-text-container">
                        <p className="description-text">
                            <b>MyMove</b> is a collaborative NSF research project from University of Maryland and the Pennsylvania State University.
                            This project aims to <i>design and build personalized activity tracking systems that better match older adults' lifestyle and physiological characteristics</i>, with a long-term goal of supporting older adults to actively engage in their physical activity.
                        </p>
                        <p>
                            Specifically, we devise '<strong>teachable interfaces</strong>,' a mechanism that enables people to capture data and tailor a machine learning algorithm with their training examples. Combining teachable interfaces with activity tracking, we will design and develop MyMove, which will serve dual purposes:
                            <ol>
                                <li> Enhancing awareness of older adults’ own movement and non-movement activities.</li>
                                <li> Improving the system’s accuracy by enabling people to tune it to their own idiosyncrasies.</li>
                            </ol>
                        </p>

                        <div className="description-metadata-container">
                            <div className="metadata-title">
                                Keywords
                            </div>
                            <div className="keyword-list">
                                <div className="keyword">Older Adults</div>
                                <div className="keyword">Persomal Health Informatics</div>
                                <div className="keyword">Multimodal Interaction</div>
                                <div className="keyword">Natural Language Interface</div>
                                <div className="keyword">Smartwatches</div>
                                <div className="keyword">Smartphones</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <Publication />
        <Team />
        <Acknowledgment />
    </>
}