import React, { ReactNode } from "react";
import { PropGetters } from "downshift";
import classnames from "classnames";

interface MenuProps<T> {
    downshiftProps: Pick<PropGetters<T>, "getMenuProps" | "getItemProps">;
    highlightedIndex: number | null;
    items: T[];
    itemToString: (item: T | null) => string;
    noHitsMessage?: ReactNode;
    maxNumberOfHits?: number;
    /** @deprecated */
    inverted?: boolean;
}

function Menu<T>({
    downshiftProps: { getMenuProps, getItemProps },
    highlightedIndex,
    items,
    itemToString,
    noHitsMessage,
    maxNumberOfHits = Infinity,
    inverted = false,
}: MenuProps<T>): JSX.Element | null {
    const visibleItems = items.length > maxNumberOfHits ? items.slice(0, maxNumberOfHits) : items;

    if (visibleItems.length === 0 && !noHitsMessage) {
        return null;
    }

    return (
        <div data-testid="autosuggest__menu" style={{ position: "relative" }}>
            <ul
                {...getMenuProps({
                    className: classnames("jkl-autosuggest__menu", { "jkl-autosuggest__menu--inverted": inverted }),
                })}
            >
                {visibleItems.length === 0 && <div className="jkl-autosuggest__no-hits-message">{noHitsMessage}</div>}
                {visibleItems.map((item, index) => (
                    <li
                        {...getItemProps({
                            item,
                            className: classnames("jkl-autosuggest__item", {
                                "jkl-autosuggest__item--active": index === highlightedIndex,
                            }),
                        })}
                        data-testid="autosuggest__item"
                        key={itemToString(item)}
                    >
                        {itemToString(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
