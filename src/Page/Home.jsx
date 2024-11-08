import React, { useState, useEffect } from "react";
import { SplitText } from "../assets/Animation's/SplitText";
// import Swal from "sweetalert2";

function Home() {
  const [formdata, setFormdata] = useState({
    name: "",
    surname: "",
    dob: "",
    std: "",
    rollno: "",
    grno: "",
    subject: [],
  });

  const [stored, setStored] = useState([]);

  // Not Understand 📍
  const handlechange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setFormdata((prevdata) => {
        let updateddata = [...prevdata.subject];
        if (checked) {
          updateddata.push(name);
        } else {
          updateddata = updateddata.filter((item) => item !== name);
        }
        return {
          ...prevdata,
          subject: updateddata,
        };
      });
    } else {
      setFormdata((prevData) => ({
        ...prevData, // Spread the previous state
        [name]: value, // Dynamically update the field based on the 'name' attribute
      }));
    }
  };

  // Button's
  const handlesubmit = (e) => {
    e.preventDefault();
    let storedData = JSON.parse(localStorage.getItem("Data")) || [];
    const entry = {
      name: formdata.name,
      surname: formdata.surname,
      dob: formdata.dob,
      rollno: formdata.rollno,
      subject: formdata.subject,
    };
    storedData.push(entry);
    localStorage.setItem("Data", JSON.stringify(storedData));
    setStored(storedData);
  };

  const handleclear = (e) => {
    e.preventDefault();
    setFormdata({
      name: "",
      surname: "",
      dob: "",
      std: "",
      rollno: "",
      grno: "",
      subject: [],
    });
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Data")) || [];
    setStored(savedData);
  }, []);
  return (
    <>
      <div className="container">
        {/*Heading  */}
        <div className="relative mx-auto my-2 max-w-4xl mb-5 rounded-2xl bg-blue-500 p-4 sm:p-6">
          <div className="from-blue-100/10 abg-gradient-to-br absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white to-blue-600 opacity-10" />
          <div className="from-blue-80/10 abg-gradient-to-br absolute -top-10 right-20 h-24 w-24 rounded-full bg-white to-blue-600 opacity-10" />
          <div className="relative rounded-xl bg-slate-50 px-8 py-4">
            <h2 className="text-xl text-center text-gray-600 font-bold sm:text-4xl">
              <SplitText
                text="Welcome To SkillSquad !"
                className="custom-class"
                delay={50}
              />
            </h2>
          </div>
        </div>
        <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700" />

        <div>
          <form className="mx-auto max-w-5xl p-4" onSubmit={handlesubmit}>
            <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-6 mb-5">
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="ID Generated Automatically"
                  readOnly
                />
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="name"
                  value={formdata.name}
                  onChange={handlechange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Name:
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="surname"
                  value={formdata.surname}
                  onChange={handlechange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Surname:
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="date"
                  name="dob"
                  value={formdata.dob}
                  onChange={handlechange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  DOB:
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <select
                  id="std"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select Std</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-6 mb-5">
              <div className="relative z-0 w-full group">
                <input
                  type="number"
                  name="rollno"
                  value={formdata.rollno}
                  onChange={handlechange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Roll No:
                </label>
              </div>
              <div className="relative z-0 w-full group">
                <input
                  type="number"
                  name="grno"
                  value={formdata.grno}
                  onChange={handlechange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  GR No:
                </label>
              </div>
              <div className="w-full mt-3">
                <div className="flex items-center gap-6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Subject:
                  </p>

                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="hindi"
                        checked={formdata.subject.includes("hindi")}
                        onChange={handlechange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <span className="text-gray-900 dark:text-white">
                        Hindi
                      </span>
                    </label>

                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="english"
                        value={formdata.subject.includes("english")}
                        onChange={handlechange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <span className="text-gray-900 dark:text-white">
                        English
                      </span>
                    </label>

                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="science"
                        value={formdata.subject.includes("science")}
                        onChange={handlechange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <span className="text-gray-900 dark:text-white">
                        Science
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Add and Clear buttons */}
            <div className="flex space-x-2 mt-6">
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
              <button
                type="reset"
                onClick={handleclear}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Form & Input's */}
        <hr class="h-px my-8 bg-black border-0 dark:bg-gray-700" />
        {/* Table */}
        <section className="px-8 mx-auto mt-5 ">
          <div className="flex flex-col border border-black rounded-md">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Surname
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Dob
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          STD
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          RollNo
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          GR No.
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Subject
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Action
                        </th>
                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {stored.map((items, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              {items.name}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {items.surname}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            {items.dob}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            12
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {items.rollno}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            270027
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {items.subject.join(",")}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-6">
                              <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="size-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                  />
                                </svg>
                              </button>
                              <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="size-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
