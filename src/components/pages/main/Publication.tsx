import React from 'react';
import { Section } from '../../Section';
import './Publication.scss';

const papers = [
    {
        authors: "Sabahat Fatima",
        title: "Activity Recognition in Older Adults with Training Data from Younger Adults: Preliminary Results on In Vivo Smartwatch Sensor Data",
        description: "ACM ASSETS 2021 Student Research Competition. 26:1–26:8 (In Press)",
        doi: "https://doi.org/10.1145/3441852.3476475",
    }
]

export const Publication = () => {
    return <Section title="Publication" hashId="publication">
        {
            papers.map(p => {
                return <Paper
                    key={p.title}
                    {...p}
                />
            })
        }
    </Section>
}


const Paper = (props: {
    authors: string,
    title: string,
    description: string,
    doi?: string | null,
    link?: {title: string, url: string} | null
}) => {
    return <div className="publication-info paragraph">
        <div className="authors">{props.authors}</div>
        <div className="title"><b>{props.title}</b></div>
        <div>
            {props.description}
            {
                props.doi != null ? <a className="doi" href={props.doi} target="_blank">DOI</a> : null
            }
            {
                props.link != null ? <a className="doi" href={props.link.url} target="_blank">{props.link.title}</a> : null
            }
        </div>

    </div>
}