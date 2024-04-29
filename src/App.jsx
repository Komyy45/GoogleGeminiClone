import { useState } from 'react'
import './App.css'
import { MainPage } from './components/MainPage'
import { Sidebar } from './components/SideBar'
import { useToggle } from './hooks/toggle'

function App() {
  const [isDark , setIsDark] = useToggle();
  const stateHandler = () => {
    setIsDark();
  }
  return (
    <div className={` ${isDark ? "dark" : ""} flex w-full`}>
    <Sidebar /> 
    <MainPage darkMode={stateHandler}/>
    </div>
  )
}

export default App
