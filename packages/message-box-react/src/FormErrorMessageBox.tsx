import React, { forwardRef } from "react";
import cx from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { MessageBoxProps, ErrorMessageBox } from "./MessageBox";

export interface FormErrorMessageBoxProps {
    className?: string;
    id?: string;
    /**
     * @default { title: "Feil og mangler i skjemaet" }
     */
    messageBoxProps?: Partial<MessageBoxProps>;
    errors: (string | undefined)[];
    isSubmitted: boolean;
    isValid: boolean;
}

const defaultMessageBoxProps = {
    title: "Feil og mangler i skjemaet",
};

export const FormErrorMessageBox = forwardRef<HTMLDivElement, FormErrorMessageBoxProps>(
    (props, ref): JSX.Element | null => {
        const { className, errors, isSubmitted, isValid, messageBoxProps, ...rest } = props;

        return (
            <AnimatePresence>
                {isSubmitted && !isValid && (
                    <motion.div
                        ref={ref}
                        className={cx("jkl-form-error-message-box", className)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        {...rest}
                    >
                        <ErrorMessageBox {...defaultMessageBoxProps} {...messageBoxProps}>
                            <ul className="jkl-list">
                                {errors
                                    .filter((error) => typeof error !== "undefined")
                                    .map((error) => (
                                        <motion.li
                                            className="jkl-list__item"
                                            key={error}
                                            layout
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {error}
                                        </motion.li>
                                    ))}
                            </ul>
                        </ErrorMessageBox>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    },
);
FormErrorMessageBox.displayName = "FormErrorMessageBox";
