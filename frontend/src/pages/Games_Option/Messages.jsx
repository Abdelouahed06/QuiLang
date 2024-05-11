import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useState } from 'react';


const Messages = () => {
  const packageData = [{ id: 'AT98310743', group: 'hello', price: 99 },
  { id: 'AT98310743', group: 'hello', price: 99 },
  { id: 'AT98310743', group: 'hello', price: 99 },
  { id: 'AT98310743', group: 'hello', price: 99 },
  { id: 'AT98310743', group: 'hello', price: 99 }
  ];
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Messages" />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="mb-6 text-xl font-semibold text-black dark:text-white">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-primary py-2 px-5 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Add Messages
            </button>
            {isOpen && (
              <div id="popup-modal" className="fixed top-10 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50">
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b border-blue-100 rounded-t">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Add New Message
                      </h3>
                    </div>
                    <div className="p-4 md:p-5">
                      <form className="space-y-4" action="#">
                        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <label
                              className="mb-3 block text-sm font-medium text-black dark:text-white"
                              htmlFor="Me_Group"
                            >
                              Message Group
                            </label>
                            <div className="relative">
                              <input
                                className="w-full text-sm rounded border border-blue-300 py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                                type="text"
                                name="Me_Group"
                                id="Me_Group"
                                required
                              />
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2">
                            <label
                              className="mb-3 block text-sm font-medium text-black dark:text-white"
                              htmlFor="Me_Price"
                            >
                              Message Price
                            </label>
                            <input
                              className="w-full text-sm rounded border border-blue-300 py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                              type="number"
                              name="Me_Price"
                              id="Me_Price"
                              required
                            />
                          </div>
                        </div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Messages
                        </label>
                        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <div className="relative">
                              <input
                                className="w-full text-sm rounded border border-blue-300 py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                                type="text"
                                name="Message_01"
                                id="Message_01"
                                placeholder='Message 01'
                                required
                              />
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2">
                            <input
                              className="w-full text-sm rounded border border-blue-300 py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                              type="text"
                              name="Message_02"
                              id="Message_02"
                              placeholder='Message 02'
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <div className="relative">
                              <input
                                className="w-full text-sm rounded border border-blue-300 py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                                type="text"
                                name="Message_03"
                                id="Message_03"
                                placeholder='Message 03'
                                required
                              />
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2">
                            <input
                              className="w-full text-sm rounded border border-blue-300 py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                              type="text"
                              name="Message_04"
                                id="Message_04"
                                placeholder='Message 04'
                                required
                            />
                          </div>
                        </div>
                        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <div className="relative">
                              <input
                                className="w-full text-sm rounded border border-blue-300 py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                                name="Message_05"
                                id="Message_05"
                                placeholder='Message 05'
                                required
                              />
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2">
                            <input
                              className="w-full text-sm rounded border border-blue-300 py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                              type="text"
                              name="Message_06"
                                id="Message_06"
                                placeholder='Message 06'
                                required
                            />
                          </div>
                        </div>
                        <div className="mb-7.5 flex flex-col gap-5.5 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <div className="relative">
                              <input
                                className="w-full text-sm rounded border border-blue-300 py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none"
                                type="text"
                                name="Message_07"
                                id="Message_07"
                                placeholder='Message 07'
                                required
                              />
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2">
                            <input
                              className="w-full text-sm rounded border border-blue-300 py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none"
                              type="text"
                              name="Message_08"
                                id="Message_08"
                                placeholder='Message 08'
                                required
                            />
                          </div>
                        </div>
                        <div className="mb-7.5 flex flex-col gap-5.5 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <div className="relative">
                              <button
                                className="mt-5 w-full text-yellow-800 border border-yellow-700 bg-red-100 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={closeModal}
                              >Cancel</button>
                            </div>
                          </div>

                          <div className="w-full sm:w-1/2">
                            <button
                            type='submit'
                              className="mt-5 w-full text-blue-800 border border-blue-700 bg-blue-100 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >Add</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                    ID
                  </th>
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Group
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Price
                  </th>
                  <th className="py-4 px-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {packageData.map((packageItem, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.id}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.group}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className="inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"
                      >
                        {packageItem.price}$
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button className="hover:text-primary">

                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M3.548 20.938h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1ZM9.71 17.18a2.587 2.587 0 0 0 1.12-.65l9.54-9.54a1.75 1.75 0 0 0 0-2.47l-.94-.93a1.788 1.788 0 0 0-2.47 0l-9.54 9.53a2.473 2.473 0 0 0-.64 1.12L6.04 17a.737.737 0 0 0 .19.72a.767.767 0 0 0 .53.22Zm.41-1.36a1.468 1.468 0 0 1-.67.39l-.97.26l-1-1l.26-.97a1.521 1.521 0 0 1 .39-.67l.38-.37l1.99 1.99Zm1.09-1.08l-1.99-1.99l6.73-6.73l1.99 1.99Zm8.45-8.45L18.65 7.3l-1.99-1.99l1.01-1.02a.748.748 0 0 1 1.06 0l.93.94a.754.754 0 0 1 0 1.06Z"></path>
                          </svg>

                        </button>
                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                              fill=""
                            />
                            <path
                              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                              fill=""
                            />
                            <path
                              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                              fill=""
                            />
                            <path
                              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                              fill=""
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
    </DefaultLayout>
  );
};

export default Messages;
