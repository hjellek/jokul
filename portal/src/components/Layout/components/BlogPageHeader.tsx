import React, { VFC } from "react";
import { Frontmatter } from "../../Header/useNavigationLinks";

export const BlogPageHeader: VFC<Frontmatter> = ({ title, author, publishDate }) => {
    if (!author) {
        return null;
    }
    return (
        <>
            <h1 className="jkl-title">{title}</h1>
            <div className="jkl-spacing-3xs--top jkl-spacing-3xs--bottom">
                <p data-testid="blog-author">{author}</p>
                {publishDate && <p data-testid="blog-publishDate">{publishDate}</p>}
            </div>
        </>
    );
};
