'use client'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '../svg'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed left-0 top-0 z-50 w-full h-[80px] px-4 sm:px-16 flex justify-center items-center bg-light dark:bg-dark ">
        <div className="w-[90%] mx-auto flex justify-between items-center">
            <span className="text-[24px] font-semibold ">Galactic Clothes</span>
            <div className="sm:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                    {menuOpen ? '✖' : '☰'}
                </button>
            </div>
            <ul className={`fixed top-[80px] left-0 w-full bg-light dark:bg-dark sm:flex sm:static sm:w-auto sm:bg-transparent sm:dark:bg-transparent sm:flex-row sm:items-center sm:justify-end ${menuOpen ? 'block' : 'hidden'}`}>
                <li className='mx-3 py-2 sm:py-0'><a href="#productos">Productos</a></li>
                <li className='mx-3 py-2 sm:py-0'><a href="#promos">Promos</a></li>
                <li className="mx-3 py-2 px-3 sm:py-0 bg-[#510C6E] text-white rounded-lg"><a href="#pedidos">Pedidos</a></li>
                <li className='mx-3 py-2 sm:py-0'>
                    {theme === 'dark'
                        ? (<button onClick={() => setTheme('light')}>
                            <Moon width="20px" height="20px" color="#fff" />
                        </button>)
                        : (<button onClick={() => setTheme('dark')}>
                            <Sun width="20px" height="20px" color="#000" />
                        </button>)
                    }
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar

