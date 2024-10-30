import { useState } from "react";
import validator from "validator";
import { Expense } from "../ui";

const initialState = {
  amount: "",
  category: "",
  date: "",
  description: "",
};

const initialErrors = {
  amount: "",
  category: "",
}

export const useFormAmount = (setAmount: any) => {
  const [userProfiles, setUserProfiles] = useState<any>([]);

  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [errors, setErrors] = useState<any>(initialErrors);
  const [hasErrors, setHasErrors] = useState(true);

  // Reset form
  const resetForm = () => {
    setAmount(initialState);
    setErrors(initialErrors);
  };

  const handleChange = (e: any) => {
    
    const validationErrors: any = { ...errors };

    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "amount") {
      updatedValue = value.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());
    }

    if (e.target.name === "amount" && isPasswordTouched) {
      // Validar el campo de amount (required)
      if (validator.isEmpty(e.target.value)) {
        validationErrors.amount = ["El monto es obligatorio"];
      } else {
        delete validationErrors.amount;
      }
      setAmount((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    console.log({name, value});

    if (e.target.name === "category" && isPasswordTouched) {
      // Validar el campo de category (required)
      if (validator.isEmpty(e.target.value)) {
        validationErrors.category = ["La categoria es obligatoria"];
      } else {
        delete validationErrors.category;
      }
      setAmount((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    if (e.target.name === "description") {
      setAmount((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    if (e.target.name === "date") {
      setAmount((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // Si hay errores, actualiza el estado con ellos
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setHasErrors(true);
    } else {
      setErrors({});
      setHasErrors(false);
    }
  };

  return {
    // Methods
    handleChange,
    setUserProfiles,
    setIsPasswordTouched,
    resetForm,
    setErrors,
    setHasErrors,
    // Properties
    isPasswordTouched,
    userProfiles,
    errors,
    hasErrors,
  };
};
