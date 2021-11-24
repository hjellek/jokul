import React, { HTMLAttributes } from "react";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    // Burde texts dette være children? Parent har ansvar for state uansett
    /*
        <ExpandButton isExpanded={isExpanded}>
            {isExpanded ? 'Lukk' : 'Åpne'}
        </ExpandButton>
    */
    texts: {
        open: string;
        close: string;
    };
    onClick: VoidFunction;
    isExpanded: boolean;
    compact?: boolean;
    className?: string;
}

export const ExpandButton = ({ texts: { open, close }, onClick, isExpanded, compact, className = "" }: Props) => {
    const classNames = cn(
        "jkl-expand-button",
        { "jkl-expand-button--expanded": isExpanded },
        { "jkl-expand-button--compact": compact },
        className,
    );

    return (
        <button className={classNames} onClick={onClick}>
            {!isExpanded ? open : close}
            <ArrowVerticalAnimated className="jkl-expand-button__arrow" pointingDown={!isExpanded} />
        </button>
    );
};
