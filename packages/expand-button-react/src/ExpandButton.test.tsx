import React from "react";
import { render, screen } from "@testing-library/react";
import { ExpandButton } from ".";
import { axe } from "jest-axe";

const onClick = jest.fn();

const props = {
    texts: {
        open: "Åpne",
        close: "Lukk",
    },
    onClick,
    isExpanded: false,
};

describe("ExpandButton", () => {
    it("should render", () => {
        render(<ExpandButton {...props} />);
        screen.findByText("Åpne");
    });

    it("should trigger onClick handler on click", () => {
        render(<ExpandButton {...props} />);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should show correct text for not expanded", () => {
        render(<ExpandButton {...props} isExpanded={false} />);
        expect(screen.findByText(props.texts.open)).toBeInTheDocument();
    });

    it("should show correct text for expanded", () => {
        render(<ExpandButton {...props} isExpanded={true} />);
        expect(screen.findByText(props.texts.close)).toBeInTheDocument();
    });
});

describe("a11y", () => {
    test("ExpandButton should be a11y compliant", async () => {
        const { container } = render(<ExpandButton {...props} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
