import React from 'react';
import './Video.scss';
import { Section } from './Section';

export const Video = () => {
    return <Section title="Scenario Demonstration Video" hashId="video">
        <div className="aspect-ratio">
            <iframe width="100%" height="480" src="https://www.youtube.com/embed/ct2s29n-mJM"
                frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </Section>
}