import React, { useContext } from 'react'
import { useEffect } from 'react'
import { GlobalContext } from '../Context/globalcontext'
import {TruncateString} from '../utils/utils'


export const Managedata = () =>{
    const {state, handler} = useContext(GlobalContext)

    // populate context
    const {
        apps,
        fetchStatus, setFetchStatus,
        dataForm, 
    } = state

    const {
        handleDelete,
        handleFetch,
        handleInput,
        handleEdit,
        handleSubmit,
    }= handler

    // preload 
    useEffect(() => {
        if (fetchStatus === true) {
            handleFetch()
          }
    }, [fetchStatus, setFetchStatus, handleFetch])
    
    const AppList = () => {
        return (
          <div className="box2">
               <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-white-700 uppercase bg-purple-400 dark:bg-purple-700 text-white-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    NO
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Release year
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Size
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    IS_Android_App
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Is_IOS_APP
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              apps?.map((user, idx) => {
                                return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={idx}>
                                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{idx+1}</td>
                                  <td>{user.name}</td>
                                  <td>{TruncateString(user.category,30)}</td>
                                  <td>{TruncateString(user.description, 40)}</td>
                                  <td>{user.price}</td>
                                  <td>{user.rating}</td>
                                  <td>{user.release_year}</td>
                                  <td>{user.size}</td>
                                  <td>{user.is_android_app}</td>
                                  <td>{user.is_ios_app}</td>
                                  <td className="flex space-x-2">
                                  {
                                      <button value={user.id} onClick={handleEdit} className="bg-yellow-300 
                                        hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-yellow-700 rounded mt-2">
                                      Edit
                                      </button>
                                    }
                                    {
                                      <button onClick={handleDelete} value={user.id} className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mt-2">
                                      Delete
                                      </button>
                                    }
                                  </td>
                                  
                                </tr>
                              })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <>  
            <div className='p-20 mx-auto'>
                <h1><b>Manage Data</b></h1>
                <br></br>
                <AppList/>
                <br></br>


                <h1><b>Create Data</b></h1>
                <div>
            <form className="" onSubmit={handleSubmit}  >
                <br></br>
                <br></br>
                <div id="data-gambar">
                    <p className='border-b-2'>Gambar data game</p>
                    <br/>
                    <br/>
                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <b>Image URL</b></label>
                        <input type="text" id="small-input"
                            required    
                            name='image_url'
                            onChange={handleInput} 
                            value={dataForm.image_url}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>
                </div>
                
                
                <div id="data-game">
                    <p className='border-b-2'> Data Game</p>
                    <br></br>
                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>Name</b>
                            </label>
                        <input type="text" id="small-input"
                            required
                            name='name'
                            onChange={handleInput} 
                            value={dataForm.name}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>

                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>Category</b>
                            </label>
                        <input type="text"
                            required
                            name='category'
                            onChange={handleInput} 
                            value={dataForm.category}
                            id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>


                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>Description</b>
                            </label>
                        <input type="text" id="small-input" 
                            required
                            name='description'
                            onChange={handleInput} 
                            value={dataForm.description}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>

                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>Price</b>
                            </label>
                        <input type="number" 
                            required
                            name='price'
                            onChange={handleInput} 
                            value={dataForm.price}
                            min={0}
                            id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>

                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>Rating</b>
                            </label>
                        <input type="number" 
                            required
                            name='rating'
                            onChange={handleInput} 
                            value={dataForm.rating}
                            min="0"
                            max={5}
                        
                        id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>

                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>Release Year</b>
                            </label>
                        <input type="number"
                            required
                            onChange={handleInput} 
                            value={dataForm.release_year}
                            name='release_year'
                            min="2009"
                            max="2023"
                            id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>

                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>Size</b>
                            </label>
                        <input type="number" 
                            required
                            name='size'
                            onChange={handleInput} 
                            value={dataForm.size}
                            id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>
                </div>

                <div id="device-type">
                    <p className='border-b-2'>Jenis Perangkat</p>
                    <br/>
                    <br/>
                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>Android ?</b>
                            </label>
                        <input type="number"
                            onChange={ handleInput} 
                            value={dataForm.is_android_app}
                            required
                            name='is_android_app'
                            min="0"
                            max="1"
                            id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>

                    <div>
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <b>IOS ?</b>
                            </label>
                        <input type="number" 
                            onChange={handleInput} 
                            value={dataForm.is_ios_app}
                            required
                            name='is_ios_app'
                            min="0"
                            max="1"
                            id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <br/>
                </div>
                
                {/* button  */}
                <div className="flex items-center justify-between">
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type={'submit'}>
                        Submit
                    </button>
                </div>

                <br/>
                </form>
            </div>

            </div>

        </>
    )
}
