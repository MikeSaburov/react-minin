import React from 'react';
import { useState } from 'react';

export const CreateProduct = () => {
  const [value, setValue] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product"
        onChange={handleChange}
        value={value}
      />

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
};
