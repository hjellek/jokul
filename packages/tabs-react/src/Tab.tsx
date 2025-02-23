import React from "react";
import cx from "classnames";

interface Props {
    children: string;
    className?: string;
}

/**
 * En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.
 *
 * Docs: https://jokul.fremtind.no/komponenter/tabs
 */
export const Tab = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const classes = cx("jkl-tab", props.className);

    return <button role="tab" type="button" ref={ref} {...props} className={classes} />;
});

Tab.displayName = "Tab";
