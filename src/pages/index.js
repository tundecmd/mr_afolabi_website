import React, { useState, useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Modal from "components/modal";
import Banner from "sections/banner";
import CtaOne from "sections/cta-one";
import FAQ from "sections/faq";
import CtaTwo from "sections/cta-two";
import WorkFlow from "sections/workflow";
import Pricing from "sections/pricing";
import PopularCourse from "sections/popular-course";
import CtaThree from "sections/cta-three";
import FavoriteCourse from "sections/favorite-course";
import { Provider, useSelector } from "react-redux";
import store from "store";
import Home from "./home";
import axios from "axios";

export default function IndexPage() {
    const [programs, setPrograms] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const user = {
            firstName,
            lastName,
            email,
            nationality,
            contactNumber,
        };
        console.log("user :>> ", user);
        try {
            const results = await axios.post(
                "https://mrafolabiwebapi.herokuapp.com/api/register",
                {
                    ...user,
                }
            );

            if (results) {
                setTimeout(function () {
                    console.log("Hello World");
                    setRegisterSuccess(true);
                    setLoading(false);
                }, 2000);
            }

            setRegisterSuccess(false);
            setFirstName("");
            setLastName("");
            setEmail("");
            setNationality("");
            setContactNumber("");
            console.log(`POST Status: ${results.status}`);
            return results;
        } catch (err) {
            console.log(err);
            return err;
        }
    };
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
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <VideoProvider>
                    <Layout>
                        <SEO
                            description="Learning Arabic Online!"
                            title="Learning Arabic Online"
                        />
                        <Banner />
                        <FAQ programs={programs} />
                    </Layout>
                </VideoProvider>
            </StickyProvider>
        </ThemeProvider>
    );
}
