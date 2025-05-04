"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false)
    
    useEffect(() => {
        // Check system preference or localStorage on initial load
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('darkMode') === 'true'
        setDarkMode(isDarkMode)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('darkMode', 'true')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', 'false')
        }
    }, [darkMode])
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return(
        <header className="w-full flex items-center justify-between bg-neutral-100 dark:bg-neutral-800 p-4 rounded-xl ">
            <div>
                <Link href="/" className="flex items-center">
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-600 dark:from-lime-300 dark:to-emerald-400">
                    Louis Schinas Portfolio
                </span>
                </Link>
            </div>

            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Toggle theme"
            >
                {darkMode ? (
                    <Moon size={18} className="text-lime-600" />
                ) : (
                    <Sun size={18} className="text-lime-400" />
                )}
            </button>
        </header>
    )
}