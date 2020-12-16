import React from 'react';
import { Section } from '../../Section';
import { Video } from '../../Video';
import { Team } from './Team';
import './Chi2021Page.scss';
import { Link } from 'react-router-dom';

export const Chi2021Page = () => {
    return <>
        <Section title="Abstract" hashId="">
            <p>
                Most mobile health apps employ data visualization to help people view their health and activity data, but these apps provide limited support for visual data exploration.
                Furthermore, despite its huge potential benefits, mobile visualization research in the personal data context is sparse.
                This work aims to empower people to easily navigate and compare their personal health data on smartphones by enabling flexible time manipulation with speech.
                We designed and developed Data@Hand, a mobile app that leverages the synergy of two complementary modalities: speech and touch.
                Through an exploratory study with 13 long-term Fitbit users, we examined how multimodal interaction helps participants explore their own health data.
                Participants successfully adopted multimodal interaction (i.e., speech and touch)
                for convenient and fluid data exploration.
                Based on the quantitative and qualitative findings, we discuss design implications and opportunities with multimodal interaction for better supporting visual data exploration on mobile devices.
        </p>
        </Section>
        <Video />
        <Section title="Supplementary Material" hashId="supplementary">
            <table className="supplementary-material">
                <tr>
                    <th>A <b>presentation slide</b> used in the tutorial stage</th>
                    <td><Link to="https://data-at-hand.github.io/supplementary/tutorial-slide.pdf" download target="_self">Download</Link></td>
                </tr>
                <tr>
                    <th>A <b>video clip</b> demonstrating the push-to-talk method for speech interactions, also used in the tutorial stage</th>
                    <td><Link to="https://data-at-hand.github.io/supplementary/tutorial-speech-description.mp4" download target="_self">Download</Link></td>
                </tr>
            </table>
        </Section>
        <Team />
    </>
}