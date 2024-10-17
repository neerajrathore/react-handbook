import { useContext, useEffect, useState } from 'react'
import { axiosClient } from '../api/axios-client'
import { showToast, toastSeverity } from '../helpers/show-toast'
import { useRouter } from 'next/router'
import axios from 'axios'
import Swal from 'sweetalert2'
import AuthContext from '../context/AuthContext'

const client = axiosClient()

export default () => {
    const { session, logout } = useContext(AuthContext)

    const [token, setToken] = useState(session?.token)

    useEffect(() => {
        if (session?.token) {
            setToken(session.token)
        }
    }, [session])

    const makeRequest = async ({ url, method, data, onSuccess, onError, newToken, body, showErrorToast = true }) => {
        data = data ?? body
        method = method.toUpperCase()

        try {
            const request = {
                method, url,
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': newToken ? newToken : token
                },
                data
            }

            const response = await client(request)

            if (onSuccess) {
                onSuccess(response.data)
            }

            return response.data

        } catch (err) {
            console.log(err)

            if (onError) {
                onError(err)
            }

            if (err.response) {
                if (err.response.status == 400 || err.response.status == 403) {
                    if (err.response.data?.errors?.length > 0 && showErrorToast) {
                        showToast(err.response.data.errors[0].message, toastSeverity.ERROR)
                    }
                } else if (err.response.status > 500) {
                    showToast('Something went wrong', toastSeverity.ERROR)
                } else if (err.response.status == 401 && err.response.data.errors[0].name == 'TokenExpiredError') {
                    const { data } = await axios.post('/api/refresh-session', { token })

                    Swal.fire({
                        title: 'Your session has expired',
                        text: 'Please confirm if you would like to refresh your session',
                        confirmButtonText: 'Refresh Session',
                        focusConfirm: true,
                        showDenyButton: true,
                        denyButtonText: 'No, log me out!'
                    }).then(result => {
                        if (result.isConfirmed) {
                            return window.location.reload()
                        } else if (result.isDenied) {
                            return logout()
                        }
                    })
                    // setToken(data.token)
                    // makeRequest({ url, method, data, onSuccess, onError, newToken: data.token })
                }
            }
        }

    }

    return { makeRequest }
}
