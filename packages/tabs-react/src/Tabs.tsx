import React, { useState, useCallback, useEffect, ReactNode } from "react";
import cx from "classnames";
import { nanoid } from "nanoid";

interface Props {
    children: ReactNode;
    className?: string;
    onChange?: (tabIndex: number) => void;
}

/**
 * Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
 * Må inneholde en TabList etterfulgt av en eller flere TabPanel.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const Tabs = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [tabIDs, setTabIDs] = useState<string[]>([]);
    const [tabPanelIDs, setTabPanelIds] = useState<string[]>([]);

    useEffect(() => props.onChange?.(activeIndex), [activeIndex, props]);

    const resolveIDs = useCallback(() => {
        const tabList = React.Children.toArray(props.children)[0];

        if (!React.isValidElement(tabList)) return;

        React.Children.forEach(tabList.props.children, (tab) => {
            if (!React.isValidElement(tab)) return;

            setTabIDs((prev) => [...prev, `jkl-tab-${nanoid(8)}`]);
            setTabPanelIds((prev) => [...prev, `jkl-tabpanel-${nanoid(8)}`]);
        });
    }, [props.children]);

    const renderTabList = () => {
        const tabList = React.Children.toArray(props.children)[0];

        if (!React.isValidElement(tabList)) return;

        return React.cloneElement(tabList, {
            activeIndex,
            setActiveIndex,
            tabIDs,
            tabPanelIDs,
        });
    };

    const renderTabPanels = () => {
        return React.Children.map(props.children, (child, childIndex) => {
            if (!React.isValidElement(child) || childIndex === 0) return;

            const tabPanelIndex = childIndex - 1;

            return tabPanelIndex === activeIndex
                ? React.cloneElement(child, {
                      "aria-labelledby": tabIDs[tabPanelIndex],
                      id: tabPanelIDs[tabPanelIndex],
                  })
                : null;
        });
    };

    useEffect(() => {
        resolveIDs();
    }, [resolveIDs]);

    const classes = cx("jkl-tabs", props.className);

    return (
        <div {...props} className={classes}>
            {renderTabList()}
            {renderTabPanels()}
        </div>
    );
};
