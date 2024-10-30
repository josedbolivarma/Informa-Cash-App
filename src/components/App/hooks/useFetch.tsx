import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAlert } from './useAlert';
import { Expense } from '../ui';



const BASE_URL = "http://localhost:5000"

export const useFetch = (url: string = "amounts") => {
    const [data, setData] = useState<any[]>([]);
    const { showConfirm, showSuccess, showError } = useAlert();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const getAllData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/${url}`);
      const data = await response.json();
      console.log(data);
      
      setData(data);
      setIsLoading(false);
    }
  
    useEffect(() => {
      getAllData();
    }, [url]);


  const postData = async (amount: Expense) => {
  const confirmed = await showConfirm('Are you sure?', 'Do you want to add this new Amount?');

  if (!confirmed) return;

  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(amount),
    });
    const newAmount = await response.json();
    setData((prevData: Expense[]) => [...prevData, newAmount]); // Actualiza el estado local

    showSuccess('Success!', 'The Amount has been added successfully.');
    navigate(-1);
  } catch (err: any) {
    setError(err.message);
    showError('Error!', 'Failed to add the Amount. Please try again.');
    navigate(-1);
  }
  };

  const putData = async (id: string, updatedAmount: Expense) => {
  const confirmed = await showConfirm('Are you sure?', 'Do you want to edit this Amount?');

  if (!confirmed) return;

  try {
    const response = await fetch(`${BASE_URL}/${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAmount),
    });
    const updated = await response.json();
    setData((prevData: Expense[]) =>
      prevData.map((amount: any) => (amount.id === id ? updated : amount))
    );

    showSuccess('Success!', 'The Amount has been updated successfully.');
    navigate(-1);
  } catch (error: any) {
    setError(error?.message);
    showError('Error!', 'Failed to update the Amount. Please try again.');
    navigate(-1);
  }
  };

  const deleteData = async (id: number) => {
    const confirmed = await showConfirm('Are you sure?', 'Do you want to delete this Amount?');
  
    if (!confirmed) return;
  
    try {
      await fetch(`${BASE_URL}/${url}/${id}`, {
        method: 'DELETE',
      });

      setData((prevData: Expense[]) => prevData.filter((amount: any) => amount.id !== id));
      showSuccess('Deleted!', 'The Amount has been removed.');
    } catch (err: any) {
      setError(err.message);
      showError('Error!', 'Failed to delete the Amount. Please try again.');
    }
  };


  return {data, postData, putData, deleteData, isLoading, error}
}