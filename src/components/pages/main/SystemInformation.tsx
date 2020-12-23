import React from "react"
import { Section } from '../../Section';
import "./SystemInformation.scss";

const main_libraries = [
    {
        name: "React Native",
        logo: require("../../../assets/logos/react.svg"),
        link: "https://reactnative.dev/"
    },   
    {
        name: "Redux",
        logo: require("../../../assets/logos/redux.png"),
        link: "https://redux.js.org/"
    },
    {
        name: "ReactiveX",
        logo: require("../../../assets/logos/reactivex.png"),
        link: "http://reactivex.io/"
    },
    {
        name: "D3.js",
        logo: require("../../../assets/logos/d3.svg"),
        link: "https://d3js.org/"
    }
]


const third_party_apis = [
    {
        name: "Fitbit REST API",
        logo: require("../../../assets/logos/fitbit.jpg"),
        link: "https://dev.fitbit.com/build/reference/web-api/"
    },


    {
        name: "Microsoft Cognitive Speech API",
        logo: require("../../../assets/logos/microsoft.svg"),
        link: "https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/"
    },

    {
        name: "Bugsnag",
        logo: require("../../../assets/logos/bugsnag.svg"),
        link: "https://www.bugsnag.com/"
    },
]


const open_sources = [
    {
        name: "Compromise (POS Tagging)",
        link: "https://compromise.cool/"
    },
    {
        name: "Chrono (Natural Language Date Parsing)",
        link: "https://github.com/wanasit/chrono"
    }
]

export const SystemInformation = () => {
    return <Section title="System Information" hashId="system-info">
        <h2>Core Frameworks and Libraries Used to Build Data@Hand Interface</h2>
        <div className="list-libraries">
            {
                main_libraries.map(lib => {
                    return <a key={lib.name} className="lib-element" href={lib.link} target="_blank"><div>
                        <img src={lib.logo} />
                        <div>{lib.name}</div>
                    </div></a>
                })
            }
        </div>

        <h2>Third-Party APIs and Services</h2>
        <div className="list-libraries">
            {
                third_party_apis.map(lib => {
                    return <a key={lib.name} className="lib-element" href={lib.link} target="_blank"><div>
                        <img src={lib.logo} />
                        <div>{lib.name}</div>
                    </div></a>
                })
            }
        </div>

        <h2>Open-Source Libraries Used To Understand Natural Language</h2>
        <ul className="list-open-sources">
            {
                open_sources.map(lib => {
                    return <li><a key={lib.name} className="lib-element" href={lib.link} target="_blank">{lib.name}</a></li>
                })
            }
        </ul>

    </Section>
}