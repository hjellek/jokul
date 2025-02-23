import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { VFC, ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import type { ComponentDoc } from "react-docgen-typescript";
import { Frontmatter } from "../components/Header/useNavigationLinks";
import { BlogPageHeader, ComponentPageHeader } from "../components/Layout/components";
import { a11yContext } from "../contexts/a11yContext";
import { useLocation } from "../contexts/locationContext";
import { APIDocumentation } from "../components";

interface Props {
    location: Location;
    data: {
        page: { body: string & ReactNode; frontmatter: Frontmatter };
    };
    pageContext: {
        types: {
            [x: string]: ComponentDoc;
        };
    };
}

export const DocPageLayout: VFC<Props> = ({ location, data, pageContext }) => {
    const { prefersReducedMotion } = useContext(a11yContext);
    const { isCypress } = useLocation();

    const { body, frontmatter } = data.page; // Fra pageQuery
    const { types } = pageContext; // Fra context i gatsby-node

    return (
        <motion.main
            initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
            animate={{ y: prefersReducedMotion ? 0 : 0, opacity: 1 }}
            exit={{ y: prefersReducedMotion ? 0 : -20, opacity: 0 }}
            transition={{ duration: isCypress ? 0 : 0.35 }}
            className={`jkl-portal__main ${
                location.pathname === "/profil/bildebruk" ? "jkl-portal__main--no-margin" : ""
            }`}
            id="innhold"
        >
            <ComponentPageHeader {...frontmatter} />
            <BlogPageHeader {...frontmatter} />
            <MDXRenderer>{body}</MDXRenderer>
            {types && <APIDocumentation types={types} />}
        </motion.main>
    );
};

export default DocPageLayout;

export const pageQuery = graphql`
    query DocPageQuery($id: String!) {
        page: mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                react
                scss
                order
                author
                publishDate
                group
            }
        }
    }
`;
