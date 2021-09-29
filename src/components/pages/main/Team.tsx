import React from 'react';
import './Team.scss';
import { Section } from '../../Section';

const blee = {
    role: "Contributing Researcher",
    name: "Bongshin Lee",
    title: "Sr. Principal Researcher",
    affiliation: "Microsoft Research",
    email: "bongshin (at) microsoft.com",
    web: "http://bongshiny.com",
    thumb: require("../../../assets/portraits/author_bongshin.png")
}

const echoe = {
    role: "Principal Investigator",
    name: "Eun Kyoung Choe",
    title: "Associate Professor",
    affiliation: "University of Maryland",
    email: "choe (at) umd.edu",
    web: "http://eunkyoungchoe.com",
    thumb: require("../../../assets/portraits/choe_portrait.png")
}


const david = {
    role: "Principal Investigator",
    name: "David E. Conroy",
    title: "Professor",
    affiliation: "Penn State",
    email: "conroy (at) psu.edu",
    web: "https://davideconroy.weebly.com/",
    thumb: require("../../../assets/portraits/david_portrait.jpg")
}

const hernisa = {
    role: "Co-Principal Investigator",
    name: "Hernisa Kacorri",
    title: "Assistant Professor",
    affiliation: "University of Maryland",
    email: "hernisa (at) umd.edu",
    web: "https://terpconnect.umd.edu/~hernisa/",
    thumb: require("../../../assets/portraits/hernisa_portrait.jpg")
}

const margaret = {
    role: "Research Consultant",
    name: "Margaret Danilovich",
    title: "Senior Director",
    affiliation: "CJE SeniorLife",
    email: "margaret-wente (at) northwestern.edu",
    web: undefined,
    thumb: require("../../../assets/portraits/margaret_portrait.jpg")
}

const amanda = {
    role: "Co-Principal Investigator",
    name: "Amanda Lazar",
    title: "Assistant Professor",
    affiliation: "University of Maryland",
    email: "lazar (at) umd.edu",
    web: "https://amandalazar.net/",
    thumb: require("../../../assets/portraits/amanda_portrait.jpg")
}

const yhkim = {
    role: "Contributing Researcher",
    name: "Young-Ho Kim",
    title: "Postdoctoral Associate",
    affiliation: "University of Maryland",
    email: "yghokim (at) umd.edu",
    web: "http://younghokim.net",
    thumb: require("../../../assets/portraits/yhkim_portrait.jpg")
}


const diana = {
    role: "Contributing Researcher",
    name: "Diana Chou",
    title: "Master Student",
    affiliation: "University of Maryland",
    email: "dchou4 (at) umd.edu",
    web: "http://www.cs.umd.edu/~dchou/",
    thumb: require("../../../assets/portraits/diana_portrait.jpg")
}

const sabahat = {
    role: "Contributing Researcher",
    name: "Sabahat Fatima",
    title: "Research Software Engineer",
    affiliation: "Johns Hopkins University",
    email: "sfatima (at) umd.edu",
    web: undefined,
    thumb: require("../../../assets/portraits/sabahat_portrait.jpg")
    
}


const team = [echoe, david, amanda, hernisa, margaret, yhkim, diana, sabahat, blee]

export const Team = () => {
    return <Section title="Research Team" hashId="team">
        <div className="members">
            {
                team.map(member => {

                    const content = <div className="member_content">
                        <div className="thumb">
                            <img src={member.thumb} />
                        </div>
                        <div className="information">
                            <div className="name">
                                {member.name}
                            </div>
                            <div className="role">{member.role}</div>
                            <div className="description">
                                {member.title}<br />
                                {member.affiliation}<br />
                                <span className="email">
                                    {member.email}
                                </span>
                            </div>
                        </div>
                    </div>

                    return <div key={member.email} className="member">
                        {
                            member.web != null? <a href={member.web} target="_blank">
                                {content}
                            </a> : content
                        }
                        
                    </div>
                })
            }
        </div>
    </Section>
}