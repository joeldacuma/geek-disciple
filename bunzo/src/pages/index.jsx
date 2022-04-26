import * as React from "react";
import SEO from "@components/seo";
import Layout from "../layouts/index.jsx";
import HeroArea from "../container/home-six/hero/index.jsx";
import TrendingTopics from "../container/home-one/trending-topic";
import NewsLetterArea from "../container/home-two/newsletter/index.jsx";
import SpecialArea from "../container/home-five/special-for-beginner/index.jsx";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <HeroArea />
            <TrendingTopics />
            <NewsLetterArea />
            <SpecialArea />
        </Layout>
    );
};

export default IndexPage;
