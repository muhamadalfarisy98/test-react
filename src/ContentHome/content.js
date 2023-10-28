import React from "react"
import { useContext } from 'react'
import { GlobalContext } from '../Context/globalcontext'
import { useEffect } from 'react'
import {TruncateString, ConvertRupiah, AppPlatform, ConvertionGB} from '../utils/utils'

export const Content = () => {
    const { state, handler } = useContext(GlobalContext)
    const {
        apps
    } = state 

    const {
      handleFetch,
    } = handler

    useEffect( () => {
        handleFetch()
    }, [])  

    
    const AppsList = () => {
        return apps?.map((data,idx) => {
            return (
                <>
                    <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={data.image_url} alt=""
                                className="w-1/3 bg-cover bg-center bg-landscape" />
                            
                        <div className="w-2/3 p-4">
                            {/* title  */}
                            <h1 className="text-gray-900 font-bold text-2xl">
                                {data.name}
                            </h1>
                            {/* year */}
                            <small>{data.release_year}</small>

                            {/* desc */}
                            <p className="mt-2 text-gray-600 text-sm">
                                {TruncateString(data.description, 200)}
                            </p>

                            <div className="item-center mt-2 text-gray-500">
                                <span>{data.category}</span>
                                <span> {ConvertionGB(data.size)}GB</span>
                                <span>, {AppPlatform(data.is_android_app, data.is_ios_app)}</span>
                            </div>

                            <div className="flex item-center justify-between mt-3">
                                <h1 className="text-gray-700 font-bold text-xl">
                                    {ConvertRupiah(data.price)}
                                </h1>
                                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                    {data.rating} Ratings
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    }

    return(
        <>
        <section className="bg-gray-200 p-5">
            <div className="container mx-auto mt-10">
                <h1 className="text-xl font-bold ">Find your data that you need!</h1>
            </div>

            <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
                <AppsList/>
            </div>
        </section>
        </>
    )
}