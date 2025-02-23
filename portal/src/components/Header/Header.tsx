import { navigate } from "gatsby";
import cx from "classnames";
import React, { useCallback, useRef, useEffect, VFC } from "react";

import { useNavigationLinks } from "./useNavigationLinks";
import { MainMenu } from "./components/MainMenu";
import { ContentLink } from "../ContentLink/ContentLink";
import { MenuItemList, useFullscreenMenuContext } from "../../contexts/fullscreenMenuContext";

import "./header.scss";

type Props = {
    className?: string;
};

export const Header: VFC<Props> = ({ className }) => {
    const headerRef = useRef<HTMLElement>(null);
    const collapseMenu = useCallback(() => {
        const shouldCollapse = window.scrollY > 96;
        if (shouldCollapse) {
            headerRef.current?.classList.add("jkl-portal-header--collapsed");
        } else {
            headerRef.current?.classList.remove("jkl-portal-header--collapsed");
        }
    }, []);
    useEffect(() => {
        window && window.addEventListener("scroll", collapseMenu);
        return () => window && window.removeEventListener("scroll", collapseMenu);
    }, [collapseMenu]);
    const { profileDocPages, getStartedDocPages, componentDocPages, blogPages, uuDocPages, PageType } =
        useNavigationLinks();
    const { setIsOpen, setCurrentItem } = useFullscreenMenuContext();

    const componentClassName = cx("jkl-portal-header", className);

    const menuItems: MenuItemList = [
        {
            linkText: "Kom i gang",
            content: [
                ...getStartedDocPages.map((page) => ({
                    linkText: page.title,
                    content: page.path,
                    basePath: PageType.KOMIGANG,
                })),
            ],
            basePath: PageType.KOMIGANG,
        },
        {
            linkText: "Profil",
            content: profileDocPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.PROFIL,
            })),
            basePath: PageType.PROFIL,
        },
        {
            linkText: "Komponenter",
            content: [
                ...componentDocPages
                    .filter((page) => page.group !== "hooks")
                    .map((page) => ({
                        linkText: page.title,
                        content: page.path,
                        basePath: PageType.KOMPONENTER,
                    })),
                {
                    linkText: "React Hooks",
                    content: componentDocPages
                        .filter((page) => page.group === "hooks")
                        .map((page) => ({
                            linkText: page.title,
                            content: page.path,
                            basePath: PageType.KOMPONENTER,
                        })),
                    basePath: PageType.KOMPONENTER,
                },
            ],
            basePath: PageType.KOMPONENTER,
        },
        {
            linkText: "Universell utforming",
            content: [
                ...uuDocPages.map((page) => ({
                    linkText: page.title,
                    content: page.path,
                    basePath: PageType.UU,
                })),
            ],
            basePath: PageType.UU,
        },
        {
            linkText: "Blogg",
            content: blogPages.map((page) => ({
                linkText: page.title,
                content: page.path,
                basePath: PageType.BLOG,
            })),

            basePath: PageType.BLOG,
        },
    ];

    return (
        <header ref={headerRef} className={componentClassName}>
            <ContentLink>Hopp til innhold</ContentLink>
            <button
                role="link"
                className="jkl-portal-header__title"
                onClick={() => {
                    setCurrentItem(null);
                    setIsOpen(false);
                    navigate("/");
                }}
            >
                Jøkul
            </button>
            <MainMenu className="jkl-portal-header__menu" items={menuItems} />
        </header>
    );
};
