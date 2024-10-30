import { useState } from "react";

type ErrorMap = { [field: string]: string | string[] };

export const useErrors = () => {
    const [errors, setErrors] = useState<ErrorMap>({});
    const setError = (field: string, errorMessage: string | string[]) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: errorMessage,
        }));
    };

    const clearError = (field: string) => {
        setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[field];
            return updatedErrors;
        });
    };
    return { errors, setError, clearError };
};