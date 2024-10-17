import Router from 'next/router'
import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext()
import axios from 'axios'
import { useGoogleLogout } from 'react-google-login'
import useRequest from '../hooks/use-request'
import { axiosClient } from '../api/axios-client'
import { MEMBER_IMAGES_URL, CDN_IMAGES_URL } from '../constants/cdn-url'

export const AuthProvider = ({ children, sessions }) => {
    const [session, setSession] = useState(sessions)
    const [client, setClient] = useState()
    const [profile, setProfile] = useState()

    useEffect(() => {
        if (sessions.sessionTimeout) {
            showToast('Session timed out. Please login again', toastSeverity.ERROR)
            setTimeout(logout, 1000)
        }
    }, [children.props])

    useEffect(() => {
        if (session?.token && (!client && !profile)) {
            const clientData = window.localStorage.getItem('clientData')
            const profileData = window.localStorage.getItem('profileData')
            if (clientData && profileData) {
                setClient(JSON.parse(clientData))
                setProfile(JSON.parse(profileData))
            } else {
                axiosClient().get(
                    '/auth/config',
                    {
                        headers: {
                            'x-access-token': session.token
                        }
                    }
                ).then(({ data }) => {
                    const clientData = {
                        name: data.profile.clientName,
                        image: data.profile.clientImage,
                        partner: data.profile.partner
                    }
                    const profileData = {
                        firstName: data.profile.firstName,
                        lastName: data.profile.lastName,
                        image: data.profile?.image ? `${MEMBER_IMAGES_URL}${data.profile.image}` : `${CDN_IMAGES_URL}/hra/avatar.png`
                    }
                    window.localStorage.setItem('clientData', JSON.stringify(clientData))
                    window.localStorage.setItem('profileData', JSON.stringify(profileData))
                    setClient(clientData)
                    setProfile(profileData)
                })
            }
        }
    }, [session, client, profile])

    const logout = () => {
        axios.post('/api/logout', {}, {
            headers: {
                token: session.token
            }
        })
            .then(res => {
                window.location.assign('/')
                window.localStorage.clear()
                googleSignOut()
                setTimeout(() => setSession(null), 1000)
            })
    }

    const googleSignOut = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        if (auth2 != null) {
            auth2.signOut().then(
                auth2.disconnect().then(() => console.log('LOGOUT SUCCESS'))
            )
        }
    }

    const clientId = "528564173895-i2rvjn48il9mpckdn5biemnm0928f83h.apps.googleusercontent.com"
    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess: () => console.log('LOGOUT SUCCESS'),
        onFailure: () => console.log('GOOGLE LOGOUT FAILURE')
    })

    return (
        <AuthContext.Provider
            value={{
                session,
                logout,
                client,
                profile
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
