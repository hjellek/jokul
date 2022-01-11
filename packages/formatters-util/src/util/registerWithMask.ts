import { ChangeEvent } from "react";
import { Path, PathValue, RegisterOptions, UnpackNestedValue, UseFormReturn } from "react-hook-form";
import { formatFodselsnummer } from "../fodselsnummer/formatFodselsnummer";
import { formatKortnummer } from "../kortnummer/formatKortnummer";
import { formatKontonummer } from "../kontonummer/formatKontonummer";
import { formatTelefonnummer } from "../telefonnummer/formatTelefonnummer";

const formatters = {
    fodselsnummer: formatFodselsnummer,
    kortnummer: formatKortnummer,
    kontonummer: formatKontonummer,
    telefonnummer: formatTelefonnummer,
};

export const registerWithMask =
    <T>(form: UseFormReturn<T>, formatter: keyof typeof formatters) =>
    (name: keyof T, options: RegisterOptions<T>) => {
        const setValueAs = (value: string) => value.replace(/\s/g, "");
        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            options.onChange?.(event);
            form.setValue(
                name as unknown as Path<T>,
                formatters[formatter](event.target.value, { partial: true }) as UnpackNestedValue<
                    PathValue<T, Path<T>>
                >,
            );
        };
        return form.register(name as unknown as Path<T>, { ...options, setValueAs, onChange });
    };
