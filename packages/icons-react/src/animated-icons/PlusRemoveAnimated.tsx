import React, { FC } from "react";
import cx from "classnames";
import { Plus } from "../icons/Plus";
import { IconVariant } from "../icons/types";

export interface PlusRemoveAnimatedProps {
    className?: string;
    isPlus: boolean;
    variant?: IconVariant;
    plusTitle?: string;
    closeTitle?: string;
}

export const PlusRemoveAnimated: FC<PlusRemoveAnimatedProps> = ({
    className,
    isPlus,
    variant = "small",
    plusTitle = "pluss",
    closeTitle = "lukk",
}) => {
    const iconSize = variant !== "inherit" ? variant : "small";
    return (
        <div
            className={cx(
                `jkl-icon--${iconSize}`,
                "jkl-icons-animated__plus",
                `jkl-icons-animated__plus--${isPlus ? "plus" : "close"}`,
                className,
            )}
        >
            <Plus
                variant={iconSize}
                title={isPlus ? plusTitle : closeTitle}
                description={`Ikon av ${isPlus ? plusTitle : closeTitle}tegn`}
            />
        </div>
    );
};

PlusRemoveAnimated.displayName = "PlusRemoveAnimated";
