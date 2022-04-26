import * as React from "react";
import SEO from "@components/seo";
import Layout from "../layouts/index.jsx";
import HeroArea from "../container/home-six/hero/index.jsx";
import TrendingTopics from "../container/home-one/trending-topic";
import TrendingArticle from "../container/home-one/trending-article";
import NewsLetterArea from "../container/home-two/newsletter/index.jsx";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <HeroArea />
            <TrendingTopics />
            <NewsLetterArea />
            <TrendingArticle />
        </Layout>
    );
};

export default IndexPage;
