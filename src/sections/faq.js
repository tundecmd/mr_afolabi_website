import React, { useState, useEffect } from "react";
import { Box, Container } from "theme-ui";
import Accordion from "components/accordion/accordion";
import BlockTitle from "components/block-title";
// import { useSelector } from "react-redux";

const accordionData = [
    {
        isExpanded: false,
        title: "Beginner",
        contents: (
            // <div>
            //     An FAQ is a list of frequently asked questions (FAQs) and
            //     answers on a particular topic (also known as Questions and
            //     Answers [Q&A] or Frequently Asked Questions). The format is
            //     often used in articles, websites, email lists, and online forums
            //     where common questions tend to recur, for example through posts
            //     or queries by new users related to common knowledge gaps. The
            //     purpose of an FAQ is generally provide information.
            // </div>
            <div>
                Objectives This level concentrates on: Learning the Arabic
                alphabet Understanding the basics of listening, reading, and
                writing simple sentences Learning basic vocabulary words and
                common phrases Developing the ability to communicate common
                personal information such as introducing one’s self, family, and
                occupation. Exposing the student to fundamental grammar rules
                through written texts
            </div>
        ),
    },
    {
        isExpanded: false,
        title: "Intermdiate",
        contents: (
            // <div>
            //     An FAQ is a list of frequently asked questions (FAQs) and
            //     answers on a particular topic (also known as Questions and
            //     Answers [Q&A] or Frequently Asked Questions). The format is
            //     often used in articles, websites, email lists, and online forums
            //     where common questions tend to recur, for example through posts
            //     or queries by new users related to common knowledge gaps. The
            //     purpose of an FAQ is generally provide information.
            // </div>
            <div>
                Objectives This level concentrates on developing the skill to:
                Describe one’s memories, daily life in detail and past events
                Describe the places that surround those memories and events
                Describe one’s travels and daily activities Compare simple
                things and plan for them Discuss topics related to weather,
                shopping, colors, and clothing Discuss topics related to health
                and sickness Read about the lives of scholars Utilize the Arabic
                dictionary Understand common grammar rules through written text
            </div>
        ),
    },
    {
        isExpanded: false,
        title: "Advanced",
        description: (
            // <div>
            //     An FAQ is a list of frequently asked questions (FAQs) and
            //     answers on a particular topic (also known as Questions and
            //     Answers [Q&A] or Frequently Asked Questions). The format is
            //     often used in articles, websites, email lists, and online forums
            //     where common questions tend to recur, for example through posts
            //     or queries by new users related to common knowledge gaps. The
            //     purpose of an FAQ is generally provide information.
            // </div>
            <div>
                Objectives This level concentrates on developing the skill to:
                Describe one’s memories, daily life in detail and past events
                Describe the places that surround those memories and events
                Describe one’s travels and daily activities Compare simple
                things and plan for them Discuss topics related to weather,
                shopping, colors, and clothing Discuss topics related to health
                and sickness Read about the lives of scholars Utilize the Arabic
                dictionary Understand common grammar rules through written text
            </div>
        ),
    },
    // {
    //     isExpanded: false,
    //     title: "Website reponse taking time, how to improve?",
    //     contents: (
    //         <div>
    //             An FAQ is a list of frequently asked questions (FAQs) and
    //             answers on a particular topic (also known as Questions and
    //             Answers [Q&A] or Frequently Asked Questions). The format is
    //             often used in articles, websites, email lists, and online forums
    //             where common questions tend to recur, for example through posts
    //             or queries by new users related to common knowledge gaps. The
    //             purpose of an FAQ is generally provide information.
    //         </div>
    //     ),
    // },
    // {
    //     isExpanded: false,
    //     title: "New update fixed all bug and issues",
    //     contents: (
    //         <div>
    //             An FAQ is a list of frequently asked questions (FAQs) and
    //             answers on a particular topic (also known as Questions and
    //             Answers [Q&A] or Frequently Asked Questions). The format is
    //             often used in articles, websites, email lists, and online forums
    //             where common questions tend to recur, for example through posts
    //             or queries by new users related to common knowledge gaps. The
    //             purpose of an FAQ is generally provide information.
    //         </div>
    //     ),
    // },
];

const FAQ = (props) => {
    // const [programs, setPrograms] = useState();
    // let newArray = [];
    // for (let i = 0; i < programs.length; i++) {
    //     console.log("i", programs[i]);
    //     const obj = {
    //         isExpanded: "",
    //         title: programs[i].title,
    //         contents: `${programs[i].description}`,
    //     };
    //     // newArray.push(obj);
    //     newArray = [...newArray, obj];
    // }
    // console.log("newArray :>> ", newArray);

    const [programs, setPrograms] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:2500/api/admin/programs")
            .then((res) => res.json())
            .then((data) => {
                const { programs } = data;
                console.log("programs :>> ", programs);
                setPrograms(programs);
                setLoading(false);
            });
    }, []);
    // const { programs } = props;
    console.log("programs :>> ", programs);
    return (
        <Box as="section" id="faq" sx={styles.accordion}>
            <Container sx={styles.accordion.container}>
                <BlockTitle
                    sx={styles.accordion.blockTitle}
                    // tagline="Frequent Question"
                    heading="Program"
                />
                <Accordion items={programs} />
            </Container>
        </Box>
    );
};
export default FAQ;

const styles = {
    accordion: {
        container: {
            maxWidth: "900px",
        },
        blockTitle: {
            marginBottom: [25, null, null, 65],
            textAlign: "center",
        },
    },
};
