import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Input,
    Button,
    Alert,
    Spinner,
    Close,
} from "theme-ui";
import Accordion from "components/accordion/accordion";
import BlockTitle from "components/block-title";
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
import AboutBanner from "sections/contactbanner";
import BannerBG from "assets/banner-bg-1-1.png";
import BannerTextLine from "assets/banner-text-line.png";
import BannerPattern from "assets/banner-pattern.png";
import BannerImage from "assets/pic-about.jpg";
import PartnerImage from "assets/brands.svg";
import axios from "axios";

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const user = {
            firstName,
            lastName,
            email,
            country,
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
            setCountry("");
            setContactNumber("");
            console.log(`POST Status: ${results.status}`);
            return results;
        } catch (err) {
            console.log(err);
            return err;
        }
    };
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

                        <Box as="section" id="banner" sx={styles.banner}>
                            <Container sx={styles.banner.container}>
                                <Flex sx={styles.banner.row}>
                                    <Box sx={styles.banner.col}>
                                        <Box sx={styles.banner.content}>
                                            {registerSuccess && (
                                                <Alert
                                                    backgroundColor="green"
                                                    sx={{ width: "48%" }}
                                                >
                                                    User created successfully
                                                    <Close
                                                        ml="auto"
                                                        mr={-2}
                                                        onClick={() =>
                                                            setRegisterSuccess(
                                                                false
                                                            )
                                                        }
                                                    />
                                                </Alert>
                                            )}
                                            <br />
                                            <Heading as="h4">Join Us</Heading>

                                            <Box
                                                // as="form"
                                                sx={styles.banner.form}
                                                onSubmit={handleSubmit}
                                            >
                                                <Box
                                                    as="label"
                                                    htmlFor="search"
                                                    variant="styles.srOnly"
                                                >
                                                    Search
                                                </Box>
                                                <Input
                                                    type="text"
                                                    name="search"
                                                    id="search"
                                                    value={firstName}
                                                    onChange={(e) =>
                                                        setFirstName(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="First Name"
                                                    sx={
                                                        styles.banner.form.input
                                                    }
                                                />
                                            </Box>
                                            <Box
                                                // as="form"
                                                sx={styles.banner.form}
                                            >
                                                <Box
                                                    as="label"
                                                    htmlFor="search"
                                                    variant="styles.srOnly"
                                                >
                                                    Search
                                                </Box>
                                                <Input
                                                    type="text"
                                                    name="search"
                                                    id="search"
                                                    value={lastName}
                                                    onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Last Name"
                                                    sx={
                                                        styles.banner.form.input
                                                    }
                                                />
                                            </Box>
                                            <Box
                                                // as="form"
                                                sx={styles.banner.form}
                                            >
                                                <Box
                                                    as="label"
                                                    htmlFor="search"
                                                    variant="styles.srOnly"
                                                >
                                                    Search
                                                </Box>
                                                <Input
                                                    type="email"
                                                    name="search"
                                                    id="search"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Email"
                                                    sx={
                                                        styles.banner.form.input
                                                    }
                                                />
                                            </Box>
                                            <Box
                                                // as="form"
                                                sx={styles.banner.form}
                                            >
                                                <Box
                                                    as="label"
                                                    htmlFor="search"
                                                    variant="styles.srOnly"
                                                >
                                                    Search
                                                </Box>
                                                <Input
                                                    type="text"
                                                    name="search"
                                                    id="search"
                                                    value={country}
                                                    onChange={(e) =>
                                                        setCountry(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Country"
                                                    sx={
                                                        styles.banner.form.input
                                                    }
                                                />
                                            </Box>
                                            <Box
                                                // as="form"
                                                sx={styles.banner.form}
                                            >
                                                <Box
                                                    as="label"
                                                    htmlFor="search"
                                                    variant="styles.srOnly"
                                                >
                                                    Search
                                                </Box>
                                                <Input
                                                    type="text"
                                                    name="search"
                                                    id="search"
                                                    value={contactNumber}
                                                    onChange={(e) =>
                                                        setContactNumber(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Contact Number"
                                                    sx={
                                                        styles.banner.form.input
                                                    }
                                                />
                                            </Box>
                                            <Box>
                                                <Button
                                                    type="submit"
                                                    onClick={handleSubmit}
                                                    aria-label="search btn"
                                                    sx={
                                                        (styles.banner.form
                                                            .button,
                                                        {
                                                            color: "#02073E",
                                                        })
                                                    }
                                                >
                                                    {loading && (
                                                        <Spinner size="20" />
                                                    )}
                                                    Submit
                                                    {/* <IoIosSearch /> */}
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Flex>
                            </Container>
                        </Box>
                    </Layout>
                </VideoProvider>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    banner: {
        width: "93%",
        overflowX: "hidden",
        paddingTop: ["100px", "60px"],
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
            pl: ["40px", "50px", "75px", "100px", "175px", "225px", "275px"],
            pr: "20px",
            flex: ["1 1 100%", null, "0 0 100%"],
        },
        content: {
            paddingRight: [0, 0, 0, 0, "40px", 0, 0],
            h4: {
                lineHeight: 1.18,
                color: "black",
                fontWeight: "bold",
                position: "relative",
                // textAlign: "center",
                width: "100%",
                fontSize: ["28px", "35px", null, "45px", null, "50px", "60px"],
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
const styles1 = {
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
