import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/context.jsx'
import { AuthContext } from './context/firebaseAuthContext.jsx'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import { Login } from './LoginPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContext>
        <ContextProvider>
            <BrowserRouter>
                <Routes>

                    <Route element={<App/>} path='/home'/>
                    <Route element={<Login />} path='/' />

                </Routes>
            </BrowserRouter>
        </ContextProvider>
    </AuthContext>
    ,
)
