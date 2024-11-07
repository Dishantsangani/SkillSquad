import React from "react";

function Marks() {
  return (
    <>
      <div className="relative rounded-xl bg-slate-100 px-8 py-4">
        <h2 className="text-xl  text-blue-500 font-bold sm:text-4xl">
          Student Marks
        </h2>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="mt-1 text-xl sm:mt-2 sm:text-2xl text-gray-600 ">
          Academic Year: 2023-2024
        </p>
      </div>

      <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-black " />

      <div className="flex items-center justify-center w-full group space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
        <div className="w-full sm:w-60">
          <select
            id="std"
            className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Select Std</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        <div className="flex items-center w-full sm:w-auto">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">
            Subject:
          </p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="subject-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Hindi
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="subject-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                English
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="subject-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Science
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Surname
              </th>
              <th scope="col" className="px-6 py-3">
                STD
              </th>
              <th scope="col" className="px-6 py-3">
                Roll No
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Marks
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dishant
              </th>
              <td className="px-6 py-4">Sangani</td>
              <td className="px-6 py-4">12</td>
              <td className="px-6 py-4">27</td>
              <td className="px-6 py-4">English</td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  placeholder="Enter Marks"
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 outline-none rounded border border-gray-500 "
                />
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dev
              </th>
              <td className="px-6 py-4">Patel</td>
              <td className="px-6 py-4">7 </td>
              <td className="px-6 py-4">16</td>
              <td className="px-6 py-4">Hindi, English</td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  placeholder="Enter Marks"
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 outline-none rounded border border-gray-500"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-2 mr-32">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Save
        </button>
      </div>
    </>
  );
}

export default Marks;
