import axios from "axios";

const baseUrl = `https://backendexample.sanbercloud.com/api`

// getAppsData get app list
export const getAppsData = async () => {
    try {
        const apps = await axios.get(`${baseUrl}/mobile-apps`)
        return apps.data
    } catch (error) {
        console.error(error)
    }
}

// deleteApp  - deletes app
export const deleteApp = (ev) => {
    try {
        let idData = parseInt(ev.target.value)
        return axios.delete(`${baseUrl}/mobile-apps/${idData}`)
    } catch (error) {
        console.error(error)
    }
}

// createApp - creates app
export const createApp = (payload) => {
    try {
        return axios.post(`${baseUrl}/mobile-apps`, payload)
    } catch (error) {
        console.error(error)
    }
}

// getAppDetail - get app
export const getAppDetail = (id) => {
    try {
        return axios.get(`${baseUrl}/mobile-apps/${id}`)
    } catch (error) {
        console.error(error)
    }
}

// editAppDetail - edit app
export const editAppDetail = (id, payload) => {
    try {
        return axios.put(`${baseUrl}/mobile-apps/${id}`, payload)
    } catch (error) {
        console.error(error)
    }
}