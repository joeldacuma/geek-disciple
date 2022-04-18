import * as React from "react";
import SEO from "@components/seo";
import Layout from "../layouts/index-6.jsx";
import HeroArea from "../container/home-six/hero/index.jsx";
// import TrendingArea from "../container/home-six/trending/index.jsx";
import TrendingTopics from "../container/home-one/trending-topic";
import TrendingArticle from "../container/home-one/trending-article";
import CategoryOne from "../container/home-six/category-item-one/index.jsx";
import CategoryTwo from "../container/home-six/category-item-two/index.jsx";
import CategoryThree from "../container/home-six/category-item-three/index.jsx";

const IndexSixPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <HeroArea />
            <TrendingTopics />
            <TrendingArticle />
            <CategoryOne />
        </Layout>
    );
};

export default IndexSixPage;
