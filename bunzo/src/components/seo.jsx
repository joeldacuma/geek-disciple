import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
    description,
    lang,
    metaImage,
    title,
    titleTemplate,
    pathname,
    canonical,
    nextPage,
    prevPage,
    rootPath,
    isBlogPost,
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                        siteUrl
                        canonical
                        siteLanguage
                        image
                        titleTemplate
                        twitterUsername
                        mainUrl
                    }
                    buildTime
                }
            }
        `
    );

    let pageUrl;
    const path = pathname.replace(/^\/|\/$/g, "");
    const metaTitle = title;
    const metaDescription = description;
    const language = lang || site.siteMetadata.siteLanguage;
    const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, "");
    const mainUrl = site.siteMetadata.mainUrl.replace(/\/$/, "");
    const bannerImage =  metaImage ? `${mainUrl}${metaImage.images.fallback.src}` 
                         : `${siteUrl}/${site.siteMetadata.image}`;

    pageUrl = `${siteUrl}/${path}`;
    pageUrl = pageUrl.replace(/^\/+/g, "");
    console.log(pageUrl);
    const rootUrl = siteUrl + rootPath;
    const prevLink = prevPage && prevPage !== null && rootUrl + prevPage;
    const nextLink = nextPage && nextPage !== null && rootUrl + nextPage;
    let siteTitle;
    if (pathname === "/") {
        siteTitle = `${site.siteMetadata.titleTemplate}`;
    } else {
        siteTitle = `${metaTitle}`;
    }

    return (
        <Helmet
            htmlAttributes={{
                lang: language,
            }}
        >
            {/* General tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={bannerImage} />
            <link rel="canonical" href={pageUrl} />
            <meta
                name="robots"
                content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
            />

            {/* OpenGraph tags */}
            <meta property="og:locale" content={language} />
            <meta property="og:type" content="article" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={bannerImage} />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={bannerImage} />
        </Helmet>
    );
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string,
    titleTemplate: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
    }),
    pathname: PropTypes.string.isRequired,
    canonical: PropTypes.string,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    rootPath: PropTypes.string,
    isBlogPost: PropTypes.bool,
};

SEO.defaultProps = {
    lang: `en`,
    description: ``,
    pathname: "/",
};

export default SEO;
