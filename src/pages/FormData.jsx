import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <>
  <h1 className="text-2xl font-bold text-center mb-4">Fill in information</h1>
  <form 
    onSubmit={submitForm} 
    className="bg-white p-6 rounded shadow-md max-w-md mx-auto space-y-4"
  >
    <p className="flex flex-col">
      <label className="text-sm font-semibold mb-2">เงินเดือน:</label>
      <input 
        type="text" 
        name="salary" 
        onChange={handleChange} 
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
    </p>
    <p className="flex flex-col">
      <label className="text-sm font-semibold mb-2">โบนัส:</label>
      <input 
        type="text" 
        name="bonus" 
        onChange={handleChange} 
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
    </p>
    <p className="flex flex-col">
      <label className="text-sm font-semibold mb-2">ประกันสังคม:</label>
      <input 
        type="text" 
        name="social" 
        onChange={handleChange} 
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
    </p>
    <p className="flex flex-col">
      <label className="text-sm font-semibold mb-2">จำนวนบุตร:</label>
      <input 
        type="text" 
        name="children" 
        onChange={handleChange} 
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
    </p>
    <p className="flex flex-col">
      <label className="text-sm font-semibold mb-2">เบี้ยประกันชีวิต:</label>
      <input 
        type="text" 
        name="life" 
        onChange={handleChange} 
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
    </p>
    <button 
      type="submit" 
      className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
    >
      Submit
    </button>
  </form>
</>

  );
};
export default FormData;
