/* eslint-disable prettier/prettier */
const config = require("./config/config");
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: config.title,
        titleTemplate: config.titleTemplate,
        description: config.description,
        image: config.image,
        siteLanguage: config.siteLanguage,
        author: config.author,
        mainUrl: config.siteUrl,
        siteUrl:
            activeEnv === "development"
                ? config.localUrl
                : `${config.siteUrl}${config.pathPrefix}`,
        canonical: config.canonical,
        twitterUsername: config.twitterUsername,
        keywords: config.keywords,
    },
    mapping: {
        "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
        "MarkdownRemark.frontmatter.categories": `CategoriesJson.name`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-theme-ui`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-json`,
        `gatsby-plugin-postcss`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
                accessToken: process.env.STRAPI_TOKEN,
                collectionTypes: [
                    {
                        singularName: 'category',
                        queryParams: {
                            publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
                            populate: '*'
                        }
                    },
                    {
                        singularName: 'blog',
                        queryParams: {
                            publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
                            populate: '*'
                        }
                    },
                    {
                        singularName: 'author',
                        queryParams: {
                            publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
                            populate: '*'
                        }
                    },
                ],
                singleTypes:[
                    {
                        singularName: 'home',
                        queryParams: {
                            publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
                            populate: {
                                websiteLogo: {
                                    populate: '*'
                                },
                                Menu: {
                                    populate: '*'
                                },
                                midBannerAds: {
                                    populate: '*'
                                }
                            }
                        }
                    },
                    {
                        singularName: 'footer',
                        queryParams: {
                            publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
                            populate: {
                                footerLogo: {
                                    populate: '*'
                                },
                                links: {
                                    populate: '*'
                                },
                            }
                        }
                    },
                    {
                        singularName: 'about',
                        queryParams: {
                            publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
                            populate: '*'
                        }
                    },
                    {
                        singularName: 'contact',
                        queryParams: {
                            publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
                            populate: '*'
                        }
                    }
               ],
               queryLimit: 1000,
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                useAutoGen: true,
                autoGenHomeLabel: `Home`,
                exclude: [`/dev-404-page`, `/404`, `/404.html`],
                useClassNames: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            resolve: "gatsby-plugin-svgr-loader",
            options: {
                rule: {
                    include: /\.svg$/,
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.title,
                short_name: config.shortName,
                theme_color: config.themeColor,
                background_color: config.backgroundColor,
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: config.favicon,
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
    ],
};
