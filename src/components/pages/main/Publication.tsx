import React from 'react';
import { Section } from '../../Section';
import './Publication.scss';


const papers = [
    {
        authors: "Young-Ho Kim, Bongshin Lee, Arjun Srinivasan, and Eun Kyoung Choe",
        title: "Data@Hand: Fostering Visual Exploration of Personal Data on Smartphones Leveraging Speech and Touch Interaction",
        description: "ACM CHI 2021. Accepted for Publication.",
        doi: null,
        link: {
            title: "Supplementary Material",
            url: "/chi2021"
        }
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