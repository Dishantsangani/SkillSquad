import React from "react";
import { BlurText } from "../assets/Animation's/BlurText";

function Report() {
  return (
    <>
      {/* Header */}
      <div className="relative rounded-xl bg-slate-100 px-8 py-4">
        <h2 className="text-xl text-blue-500 font-bold sm:text-4xl">
          Student
          <BlurText text=" Report Card !" className="custom-class" delay={50} />
        </h2>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="mt-1 text-xl sm:mt-2 sm:text-2xl text-gray-600">
          Academic Year: 2023-2024
        </p>
      </div>

      {/* Student Details */}
      <div className="flex space-x-4 mt-4">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Dishant"
          readOnly
        />
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="2700"
          readOnly
        />
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="7"
          readOnly
        />
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="22"
          readOnly
        />
      </div>

      {/* Table */}
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Marks
                </th>
                <th scope="col" className="px-6 py-3">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  English
                </th>
                <td className="px-6 py-4">100</td>
                <td className="px-6 py-4">98</td>
                <td className="px-6 py-4">B</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Science
                </th>
                <td className="px-6 py-4">100</td>
                <td className="px-6 py-4">99</td>
                <td className="px-6 py-4">B</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-gray-900 dark:text-white">Percentage: 87%</p>
          <p className="text-gray-900 dark:text-white">Pass</p>
        </div>
      </div>
    </>
  );
}

export default Report;
