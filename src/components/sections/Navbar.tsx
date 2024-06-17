'use client'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '../svg'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    return (
        <nav className="fixed left-0 top-0 z-50 w-full h-[80px] px-16 flex justify-between items-center bg-light dark:bg-dark ">
            <span className="text-[24px] font-semibold ">Galactic Clothes</span>
            <ul className="flex items-center justify-end ">
                <li className='mx-3'>Productos</li>
                <li className='mx-3'>Promos</li>
                <li className="mx-3 px-3 py-2 bg-[#510C6E] text-white rounded-lg ">Pedidos</li>
                <li className='mx-3'>
                    {
                        theme === 'dark'
                            ? (<button onClick={() => setTheme('light')}>
                                <Moon width="20px" height="20px" color="#fff" />
                            </button>)
                            : (<button onClick={() => setTheme('dark')}>
                                <Sun width="20px" height="20px" color="#000" />
                            </button>)
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

