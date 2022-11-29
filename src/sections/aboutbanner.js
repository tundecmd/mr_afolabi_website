import {
    Box,
    Flex,
    Container,
    Image,
    Heading,
    Text,
    Input,
    Button,
} from "theme-ui";

import React, { useState, useEffect } from "react";

import VideoBtn from "components/video-btn";
import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import BannerBG from "assets/banner-bg-1-1.png";
import BannerTextLine from "assets/banner-text-line.png";
import BannerPattern from "assets/banner-pattern.png";
import BannerImage from "assets/pic-about.jpg";
import PartnerImage from "assets/brands.svg";

const div = `This is about us page`;

const AboutBanner = () => {
    const [about, setAbout] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:2500/api/admin/about")
            .then((res) => res.json())
            .then((data) => {
                const { about } = data;
                console.log("about :>> ", about);
                setAbout(about[0]);
                setLoading(false);
            });
    }, []);
    // const { programs } = props;
    console.log("ABout :>> ", about);
    return (
        <Box as="section" id="banner" sx={styles.banner}>
            <Container sx={styles.banner.container}>
                <Flex sx={styles.banner.row}>
                    <Box sx={styles.banner.col}>
                        <Box sx={styles.banner.content}>
                            {/* <Box sx={styles.banner.stars}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                Trused by over 4,332 students
                            </Box> */}
                            <Heading as="h3">About Us</Heading>
                            {/* <Text as="p">
                                MadinahArabic.com was set up over 20 years ago
                                with a simple goal, to introduce a website that
                                would teach Arabic language (both paid courses
                                and for free lessons). We have invested tens of
                                thousands of pounds / dollars to make this
                                website possible. Our team comprises of
                                individuals who are:. <br />
                                You can learn Modern Standard Arabic, Business
                                Arabic, Classical–Quranic Arabic and Tajweed.
                            </Text>
                            <Text as="p">
                                MadinahArabic.com was set up over 20 years ago
                                with a simple goal, to introduce a website that
                                would teach Arabic language (both paid courses
                                and for free lessons). We have invested tens of
                                thousands of pounds / dollars to make this
                                website possible. Our team comprises of
                                individuals who are:. <br />
                                You can learn Modern Standard Arabic, Business
                                Arabic, Classical–Quranic Arabic and Tajweed.
                            </Text> */}
                            <Text as="p">{about.description}</Text>

                            {/* <Box as="form" sx={styles.banner.form}>
                                <Box
                                    as="label"
                                    htmlFor="search"
                                    variant="styles.srOnly"
                                >
                                    Search
                                </Box>
                                <Input
                                    name="search"
                                    id="search"
                                    placeholder="Search Course Name"
                                    sx={styles.banner.form.input}
                                />
                                <Button
                                    type="submit"
                                    aria-label="search btn"
                                    sx={
                                        (styles.banner.form.button,
                                        { color: "#02073E" })
                                    }
                                >
                                    <IoIosSearch />
                                </Button>
                            </Box> */}
                            {/* <Box sx={styles.banner.partner}>
                                <span>Sponsored by:</span>
                                <Image src={PartnerImage} alt="banner image" />
                            </Box> */}
                        </Box>
                    </Box>
                    {/* <Box sx={styles.banner.col}>
                        <Box sx={styles.banner.imageBox}>
                            <Box sx={styles.banner.imageInner}>
                                <Image src={BannerImage} alt="banner image" />
                                <VideoBtn path="L9jU-IIN0ng" />
                            </Box>
                        </Box>
                    </Box> */}
                </Flex>
            </Container>
        </Box>
    );
};

export default AboutBanner;

const styles = {
    banner: {
        width: "93%",
        overflowX: "hidden",
        paddingTop: ["100px", "120px"],
        paddingBottom: ["0px", null, "80px"],
        backgroundImage: [
            "linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)",
            `url(${BannerBG})`,
        ],
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat",
        container: {
            maxWidth: ["100%", null, null, null, null, "1640px", "1840px"],
        },
        row: {
            flexWrap: "wrap",
            display: "flex",
            marginLeft: "-10px",
            marginRight: "-10px",
        },
        col: {
            pl: "75px",
            pr: "20px",
            flex: ["1 1 100%", null, "0 0 100%"],
        },
        content: {
            paddingRight: [0, 0, 0, 0, "40px", 0, 0],
            h3: {
                lineHeight: 1.18,
                color: "black",
                fontWeight: "bold",
                position: "relative",
                // textAlign: "center",
                width: "100%",
                fontSize: ["28px", "35px", null, "45px", null, "50px", "85px"],
                maxWidth: ["500px", null, null, null, null, null, "100%"],
                "&:before": {
                    content: '""',
                    width: ["290px", null, null, null, null, "260px", "381px"],
                    height: "15px",
                    // backgroundImage: `url(${BannerTextLine})`,
                    backgroundPosition: "center center",
                    // textAlign: "center !important",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    bottom: "-15px",
                    right: ["15px", null, null, null, null, "1200px", "880px"],
                    display: ["none", null, null, null, null, "block"],
                },
            },
            p: {
                lineHeight: 2.33,
                // textAlign: "center",
                color: "#02073E",
                marginTop: ["10px", null, null, "35px"],
                fontSize: ["15px", "18px"],
                pr: ["15px", 0],
                br: {
                    display: ["none", null, null, null, null, "block"],
                },
            },
        },
        stars: {
            marginTop: ["0", null, null, null, null, "40px"],
            marginBottom: "20px",
            display: "flex",
            color: "#02073E",
            fontSize: ["15px"],
            alignItems: "center",
            lineHeight: 1,
            svg: {
                color: "primary",
                "+svg": {
                    marginLeft: ["3px", null, "5px"],
                },
                "&:last-of-type": {
                    color: "rgba(2, 7, 62, 0.2)",
                    marginRight: "10px",
                },
            },
        },
        form: {
            position: "relative",
            width: "100%",
            maxWidth: ["480px", null, null, "520px"],
            boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
            marginTop: ["15px", "40px"],
            height: ["45px", null, null, "55px", null, null, "70px"],
            marginBottom: ["20px", "30px", null, null, "40px"],

            input: {
                backgroundColor: "#fff",
                position: "absolute",
                top: 0,
                left: 0,
                paddingLeft: "25px",
                width: "100%",
                height: "100%",
                color: "rgba(2, 7, 62, .4)",
                boxShadow: "none !important",
                outline: "none !important",
                borderRadius: "8px",
                fontSize: ["15px", "16px"],
            },
            button: {
                position: "absolute",
                top: "50%",
                right: "25px",
                padding: 0,
                transform: "translateY(-50%)",
                fontSize: ["16px", "22px"],
                color: "#02073E",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                    color: "#02073E",
                    backgroundColor: "#fff",
                },
            },
        },
        partner: {
            display: "flex",
            flexDirection: ["column", null, null, null, null, "row"],
            alignItems: ["flex-start", null, null, null, null, "center"],
            color: "rgba(2, 7, 62,.6)",
            fontSize: ["15px", null, "16px"],
            span: {
                display: ["block", null, "inline-block"],
            },
            img: {
                marginLeft: ["0", "0px", null, null, null, "20px"],
                mt: ["20px", null, null, null, null, "0"],
            },
        },
        imageBox: {
            display: "flex",
            justifyContent: ["flex-start", null, null, "flex-end"],
            marginTop: ["60px", null, null, "0"],
        },
        imageInner: {
            position: "relative",
            "&:before": {
                content: '""',
                width: "100%",
                height: "100%",
                border: "2px solid #FFDC6B",
                borderRadius: "5px",
                top: "30px",
                left: "30px",
                position: "absolute",
                zIndex: 2,
                display: ["none", null, "block"],
                "@media(max-width: 991px)": {
                    left: "10px",
                    top: "15px",
                    height: "calc(100% - 15px)",
                },
            },
            "&:after": {
                content: '""',
                width: "302px",
                height: "347px",
                backgroundImage: `url(${BannerPattern})`,
                backgroundPosition: "center",
                top: "-30px",
                right: "-73px",
                position: "absolute",
                zIndex: 1,
                "@media(max-width: 991px)": {
                    right: "-10px",
                },
            },
            img: {
                position: "relative",
                zIndex: 9,
                maxWidth: "100%",
            },
            ".videoBtn": {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 10,
            },
        },
    },
};
