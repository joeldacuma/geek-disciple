import * as React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import AboutPlatform from "../container/about-us/about-platform";
import BunzoHistoryArea from "../container/about-us/bunzo-history";
import TeamMembersArea from "../container/about-us/team-members";
import TestimonialArea from "../container/about-us/testimonial";

const AboutUsPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="About Us" pathname="/about-us"  />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="About Us"
            />
            <AboutPlatform />
            <BunzoHistoryArea />
            <TeamMembersArea />
        </Layout>
    );
};
AboutUsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default AboutUsPage;
