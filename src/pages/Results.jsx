import react from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salary = parseInt(formData.salary*12);
  let bonus = parseInt(formData.bonus);
  let allsalary = bonus+salary;
  let expenses =0.5*allsalary
  if (expenses<=100000) {
    expenses*100000;
  }else {
    expenses=100000; 
}

  let i =60000;
  let child = parseInt(formData.children*30000);
  if (child<=60000) {
    child*30000;
  }else {
    child=60000;
}

let social = parseInt(formData.social*12);
if (social<=30000) {
  social*12;
}else {
  social=30000;
}

let life = parseInt(formData.life);
if (life<=100000) {
  life = life;
}else {
  life=100000;
}

  let deduction = i+child+social+life;
  let income = allsalary-expenses-deduction;

  let tax = 0;
  if (income<=100000){
    tax = 0;

  }else if(income<=300000){
    tax = 0.5;
  }else if(income<=1000000){
    tax = 0.10;
  }else{
    tax = 0.15;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-md rounded p-6 max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-6">Result</h1>
      <p className="mb-4">
        <strong className="block text-gray-700">เงินได้ทั้งปี:</strong> 
        <span className="text-blue-600">{allsalary.toLocaleString()} บาท</span>
      </p>
      <p className="mb-4">
        <strong className="block text-gray-700">ค่าใช้จ่าย:</strong> 
        <span className="text-blue-600">{expenses.toLocaleString()} บาท</span>
      </p>
      <p className="mb-4">
        <strong className="block text-gray-700">ค่าลดหย่อน:</strong> 
        <span className="text-blue-600">{deduction.toLocaleString()} บาท</span>
      </p>
      <p className="mb-4">
        <strong className="block text-gray-700">เงินได้พึงประเมินสุทธิ:</strong> 
        <span className="text-blue-600">{income.toLocaleString()} บาท</span>
      </p>
      <p className="mb-4">
        <strong className="block text-gray-700">อัตราภาษี:</strong> 
        <span className="text-blue-600">{(tax * 100).toFixed(2)} %</span>
      </p>
      <p className="mb-4">
        <strong className="block text-gray-700">ภาษีที่ต้องชำระ:</strong> 
        <span className="text-red-600">{(income * tax).toLocaleString()} บาท</span>
      </p>
    </div>
  </div>
  
  );
};

export default Results;