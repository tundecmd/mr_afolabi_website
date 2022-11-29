import React, { useEffect, useState } from "react";
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
import { Text } from "theme-ui";
import AboutBanner from "sections/contactbanner";
import axios from "axios";
// import { useSelector } from "react-redux";

export default function Curriculum() {
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
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <VideoProvider>
                    <Layout>
                        <SEO
                            description="Learning Arabic Online!"
                            title="Learning Arabic Online"
                        />
                        <br />
                        <br />
                        <br />
                        <br />

                        <FAQ programs={programs} />
                    </Layout>
                </VideoProvider>
            </StickyProvider>
        </ThemeProvider>
    );
}
