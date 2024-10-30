import { useState } from "react";
import validator from "validator";
import { isValidEmail } from "../../../helpers";
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

export const useFormAmount = (setAmount: any, amount: Expense) => {
  const [userProfiles, setUserProfiles] = useState<any>([]);

  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [errors, setErrors] = useState<any>(initialErrors);
  const [hasErrors, setHasErrors] = useState(true);

  // Reset form
  const resetForm = () => {
    setAmount(initialState);
    // setUserProfiles([]);
    setErrors(initialErrors);
  };


  const handleCheckboxChange = (profileId: number) => {
    // Check si el profileId existe en el array de profiles
    const profileIndex = userProfiles.indexOf(profileId);
    console.log("profileId:", profileId);
    console.log("actual profiles:", amount);
    console.log("profileIndex true false:",profileIndex);
    
    
    if (profileIndex === -1) {
      // Si el profileId no está en el arreglo, agregalo
      const newProfile = userProfiles.length === 0 ? [profileId] : [...userProfiles, profileId];
      console.log("userprofiles push:", newProfile);
      console.log("userprofiles state:", userProfiles, "profileid:", profileId);

     setUserProfiles([...userProfiles, profileId]);
     console.log(userProfiles)
     setAmount((prev: any) => ({ ...prev, profiles: newProfile }));

    } else {
      // Si el profileId ya está en el arreglo, elíminalo
      const updatedProfiles = userProfiles?.filter((id: number) => id !== profileId);
       setUserProfiles(updatedProfiles);
       setAmount((prev: any) => ({ ...prev, profiles: updatedProfiles }));
    }
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

    // if (e.target.name === "email" && isPasswordTouched) {
    //   if (!isValidEmail(e.target.value) || validator.isEmpty(e.target.value)) {
    //     validationErrors.email = ["Correo Invalido o vacio"];
    //   } else {
    //     delete validationErrors.email;
    //   }
    //   setUser((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    // }

    // if (e.target.name === "phone" && isPasswordTouched) {
    //   // Limpiar caracteres no numéricos
    //   e.target.value = e.target.value.replace(/[^\d]/g, "");
    //   // Limitar a 10 dígitos
    //   e.target.value = e.target.value.slice(0, 10);

    //   if (e.target.length > 10 || e.target.value === "" || validator.isEmpty(e.target.value) || e.target.length === 0) {
    //     validationErrors.phone = ["Número telefonico no válido"];
    //   } else {
    //     delete validationErrors.phone;
    //   }
    //   setUser((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    // }

    // if (e.target.name === "profiles") {
    //   if (!e.target.checked && userProfiles.length === 1) {
    //     validationErrors.profiles = ["Seleccione al menos un rol"];
    //   } else {
    //     delete validationErrors.profiles;
    //   }
    //   handleCheckboxChange(Number(e.target.value));
    //   //setUserProfiles([1,2,3,4]);
    // }

    // if (e.target.name === "status_id") {
    //   setUser((prev: any) => ({
    //     ...prev,
    //     [e.target.name]: Number(e.target.value),
    //   }));
    // }
   /*
    setUser((prev: any) => ({
      ...prev,
      [name]: updatedValue,
    }));

   */

    console.log({value, errors, hasErrors});
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
    handleCheckboxChange,
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
