import React from "react";

import { BlurText } from "../assets/Animation's/BlurText";

function Grade() {
  return (
    <>
      {/* Header */}
      <div className="relative rounded-xl bg-slate-100 px-8 py-4">
        <h2 className="text-xl  text-blue-500 font-bold sm:text-4xl">
          Student
          <BlurText
            text=" Grade History !"
            className="custom-class"
            delay={50}
          />
        </h2>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="mt-1 text-xl sm:mt-2 sm:text-2xl text-gray-600 ">
          Academic Year: 2023-2024
        </p>
      </div>
      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>

              <th scope="col" className="px-6 py-3">
                STD
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Total Marks
              </th>
              <th scope="col" className="px-6 py-3">
                Marks
              </th>
              <th scope="col" className="px-6 py-3">
                Percentage
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">10001</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dishant
              </th>
              <td className="px-6 py-4">12</td>
              <td className="px-6 py-4">English</td>
              <td className="px-6 py-4">100</td>
              <td className="px-6 py-4">27</td>
              <td className="px-6 py-4">89%</td>
              <td className="px-6 py-4">Pass</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="px-6 py-4">1002</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dev
              </th>
              <td className="px-6 py-4">7 </td>
              <td className="px-6 py-4">Hindi, English</td>
              <td className="px-6 py-4">200</td>
              <td className="px-6 py-4">16</td>
              <td className="px-6 py-4">87%</td>
              <td className="px-6 py-4">Pass</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Grade;
