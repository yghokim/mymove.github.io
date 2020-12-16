import React from 'react';
import './Team.scss';
import { Section } from '../../Section';

const blee = {
    name: "Bongshin Lee",
    title: "Sr. Principal Researcher",
    affiliation: "Microsoft Research",
    email: "bongshin (at) microsoft.com",
    web: "http://bongshiny.com",
    thumb: require("../../../assets/author_bongshin.png")
}

const echoe = {
    name: "Eun Kyoung Choe",
    title: "Associate Professor",
    affiliation: "University of Maryland",
    email: "choe (at) umd.edu",
    web: "http://eunkyoungchoe.com",
    thumb: require("../../../assets/choe_portrait.png")
}


const arjun = {
    name: "Arjun Srinivasan",
    title: "Researcher",
    affiliation: "Tableau Research",
    email: "arjunsrinivasan (at) tableau.com",
    web: "https://arjun010.github.io/",
    thumb: require("../../../assets/arjun_portrait.jpg")
}

const yhkim = {
    name: "Young-Ho Kim",
    title: "Postdoc",
    affiliation: "University of Maryland",
    email: "yghokim (at) umd.edu",
    web: "http://younghokim.net",
    thumb: require("../../../assets/yhkim_portrait.jpg")
}


const team = [yhkim, blee, arjun, echoe]

export const Team = () => {
    return <Section title="Team" hashId="team">
        <div className="members">
            {
                team.map(member => {
                    return <div key={member.email} className="member">

                        <a href={member.web} target="_blank">
                            <div className="member_content">
                                <div className="thumb">
                                    <img src={member.thumb} />
                                </div>
                                <div className="information">
                                    <div className="name">
                                        {member.name}
                                    </div>
                                    <div className="description">
                                        {member.title}<br />
                                        {member.affiliation}<br />
                                        <span className="email">
                                            {member.email}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                })
            }
        </div>
    </Section>
}