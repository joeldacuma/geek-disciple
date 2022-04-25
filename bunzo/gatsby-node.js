/* eslint-disable prettier/prettier */
const path = require("path");
const { slugify } = require("./src/utils/functions");
const _ = require("lodash");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@theme": path.resolve(
                    __dirname,
                    "./src/gatsby-plugin-theme-ui"
                ),
                "@components": path.resolve(__dirname, "./src/components"),
                "@shared": path.resolve(__dirname, "./src/components/shared"),
                "@containers": path.resolve(__dirname, "./src/containers"),
                "@layout": path.resolve(__dirname, "./src/layouts"),
                "@assets": path.resolve(__dirname, "./src/assets"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@constants": path.resolve(__dirname, "./src/constants"),
                "@hooks": path.resolve(__dirname, "./src/hooks"),
                "@data": path.resolve(__dirname, "./src/data"),
            },
        },
    });
};

// Single Post Page
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    // fields create in qrapql file
    if (node.internal.type === "MarkdownRemark") {
        const slugFromTitle = slugify(node.frontmatter.title);
        const date = (node.frontmatter.date) ? node.frontmatter.date : '2022-01-01';
        const dateSplit = date.split(" ");
        createNodeField({
            node,
            name: "slug",
            value: (slugFromTitle) ? slugFromTitle : 'sample-slug-1',
        });
        createNodeField({
            node,
            name: "id",
            value: slugFromTitle + "-" + dateSplit[0],
        });
        createNodeField({
            node,
            name: "dateSlug",
            value: dateSplit[0],
        });

        if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
            createNodeField({
                node,
                name: "authorId",
                value: slugify(node.frontmatter.author),
            });
        }
        if (
            Object.prototype.hasOwnProperty.call(node.frontmatter, "categories")
        ) {
            createNodeField({
                node,
                name: "cats",
                value: node.frontmatter.categories.map((cat) => slugify(cat)),
            });
        }
    }
    if (node.internal.type === "AuthorsJson") {
        createNodeField({
            node,
            name: "authorId",
            value: slugify(node.name),
        });
    }
};

// Automate Create Pages
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    //  const singlePostTemplate = path.resolve('src/templates/single-post.js')
    const templates = {
        singlePost: path.resolve("src/templates/single-post/index.js"),
        tagPosts: path.resolve("src/templates/tag-post/index.js"),
        categoriesPosts: path.resolve("src/templates/categories-post/index.js"),
        authorPage: path.resolve("src/templates/author-post/index.js"),
        datePage: path.resolve("src/templates/date-post/index.js"),
    };

    return graphql(`
        {
            allStrapiBlog {
                edges {
                  node {
                    authors {
                      authorId
                    }
                    categories {
                        slug
                    }
                    slug
                  }
                }
              }
              allStrapiCategory {
                edges {
                  node {
                    slug
                  }
                }
              }
        }
    `).then((res) => {
        if (res.errors) return Promise.reject(res.errors);
        const blogs = res.data.allStrapiBlog.edges;
        const categories = res.data.allStrapiCategory.edges;
        
        blogs.forEach(({ node }) => {
            createPage({
                path: `/blog/${node.slug}`,
                component: templates.singlePost,
                context: {
                    slug: node.slug,
                },
            });
        });

        categories.forEach(({ node }) => {
            const categoryBlog = blogs.filter((blog) => blog.node.categories.slug === node.slug);

            if (categoryBlog.length > 0) {
                createPage({
                    path: `/category/${node.slug}`,
                    component: templates.categoriesPosts,
                    context: {
                        slug: node.slug,
                    },
                });
            }
        });
    });
};
