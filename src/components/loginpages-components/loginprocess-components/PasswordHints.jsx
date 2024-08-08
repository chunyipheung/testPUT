// import { useState } from 'react';

// export default function PasswordHints() {
//   const [password, setPassword] = useState('');

//   const isRequirementMet = (requirement) => {
//     const { id, regex } = requirement;
//     switch (id) {
//       case 'min':
//         return password.length >= 8;
//       case 'regex':
//         return regex.test(password);
//       default:
//         return false;
//     }
//   };

//   function handleOnChange(e){
//     setPassword(e.target.value);
//   }

//   return (
//     <>
//       <input
//         type="text"
//         value={password}
//         onChange={handleOnChange}
//         className="rounded-md border-2 focus:border-violet-500 focus:ring-violet-500"
//       />
//       <fieldset>
//         <div className="-mt-5 space-y-0">
//           <div className="flex items-center">
//             <input
//               id="eightDigit"
//               name="eightDigit"
//               type="checkbox"
//               checked={isRequirementMet({ id: 'min', regex: /^.{8,}$/ })}
//               className="rounded-full h-4 w-4 border-gray-300 text-violet-700 focus:ring-violet-700"
//               readOnly
//             />
//             <label htmlFor="eightDigit" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
//               密碼長度最少8位數
//             </label>
//           </div>

//           <div className="flex items-center">
//             <input
//               id="containRequirement"
//               name="containRequirement"
//               type="checkbox"
//               checked={isRequirementMet({ id: 'regex', regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/ })}
//               className="rounded-full h-4 w-4 border-gray-300 text-violet-700 focus:ring-violet-700"
//               readOnly
//             />
//             <label htmlFor="containRequirement" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
//               必須同時包含大小楷英文、數字、符號
//             </label>
//           </div>
//         </div>
//       </fieldset>
//     </>
//   );
// }

export default function PasswordHints({ eightDigitChecked, containRequirementChecked }) {
  return (
    <>
      <fieldset>
        <div className="-mt-5 space-y-0">
          <div className="flex items-center">
            <input
              id="eightDigit"
              name="eightDigit"
              type="checkbox"
              checked={eightDigitChecked}
              className="rounded-full h-4 w-4 border-gray-300 text-violet-700 focus:ring-violet-700"
              readOnly
            />
            <label htmlFor="eightDigit" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              密碼長度最少8位數
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="containRequirement"
              name="containRequirement"
              type="checkbox"
              checked={containRequirementChecked}
              className="rounded-full h-4 w-4 border-gray-300 text-violet-700 focus:ring-violet-700"
              readOnly
            />
            <label htmlFor="containRequirement" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
              必須同時包含大小楷英文、數字、符號
            </label>
          </div>
        </div>
      </fieldset>
    </>
  );
}