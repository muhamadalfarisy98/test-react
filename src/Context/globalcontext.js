import { createContext, useState } from "react";
import {getAppsData, deleteApp, createApp, editAppDetail, getAppDetail} from '../Api/api'

export const GlobalContext = createContext()

export const GlobalProvider = (props)=>{
    // state
    const [apps, setApps] = useState([])
    const [fetchStatus, setFetchStatus] = useState(true)
    const [dataForm, setInput] = useState(
        {
            name : "",
            description : "",
            category : "",
            release_year : 2009,
            is_android_app: 0,
            is_ios_app : 0,
            image_url : "",
            size : 0,
            price : 0,
            rating : 0,
        }
    )
    // indikator
    const [currentId, setCurrentId] = useState(-1)

    let state = {
        apps, setApps,
        fetchStatus, setFetchStatus,
        dataForm, setInput,
        currentId, setCurrentId
    }

    // handler
    const handleDelete = (ev) => {
        deleteApp(ev).then((res)=>{
            if (res.status === 200) {
                setFetchStatus(true)
            }
        })
      }
    
    const handleFetch = () => {
        getAppsData().then((result)=> {
            setApps(result)
        })
        setFetchStatus(false)
    }

    const handleEdit = (ev) => {
        let idData = parseInt(ev.target.value)
        getAppDetail(idData).then((res) =>{
            setInput(res.data)
        })
        setCurrentId(idData)
    }

    const handleInput =  (ev) => {
        setInput((prev) => {
            let helper = {...prev}
            helper[ev.target.name] = ev.target.value
            return helper;
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        let {
            name ,
            description ,
            category ,
            release_year ,
            is_android_app,
            is_ios_app ,
            image_url ,
            size ,
            price ,
            rating ,
        } = dataForm

        if (currentId === -1) {
            createApp({
                name ,
                description ,
                category ,
                release_year ,
                is_android_app,
                is_ios_app ,
                image_url ,
                size ,
                price ,
                rating ,
            }).then((res) => {
                if (res.status === 201) {
                    setFetchStatus(true)
                }
            })
        } else {
            editAppDetail(currentId, 
                {
                    name ,
                    description ,
                    category ,
                    release_year ,
                    is_android_app,
                    is_ios_app ,
                    image_url ,
                    size ,
                    price ,
                    rating ,
                }
            ).then((res) => {
                if (res.status === 200) {
                    setFetchStatus(true)
                }
            })
        }
        
        // reset
        setCurrentId(-1)
        setInput(
            {
                name : "",
                description : "",
                category : "",
                release_year : 2009,
                is_android_app: 0,
                is_ios_app : 0,
                image_url : "",
                size : 0,
                price : 0,
                rating : 0,
            }
        )
    }

    let handler = {
        handleEdit,
        handleInput,
        handleSubmit,
        handleDelete,
        handleFetch

    }

    return (
        <GlobalContext.Provider value = {{
                state,
                handler
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}