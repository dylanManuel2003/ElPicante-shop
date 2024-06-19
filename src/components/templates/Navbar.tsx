'use client'
import useToggleMenu from '@/hooks/useToggleMenu'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '../svg'

const Navbar = ({ isFixed = false }: { isFixed: boolean | null }) => {
    const { theme, setTheme } = useTheme()
    const { isOpen, toggleDropdown, ref } = useToggleMenu();

    return (
        <nav ref={ref} className={`${isFixed ? 'fixed left-0 top-0' : ''} z-50 w-full h-[80px] px-4 sm:px-16 flex justify-center items-center bg-light-secondary dark:bg-dark-secondary shadow-lg `}>
            <div className="w-[90%] mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/images/logo.png" alt="Galactic clothes logo" className="w-[40px] h-[40px] mr-4" />
                    <span className="text-[24px] font-semibold ">Galactic Clothes</span>
                </div>
                <div className="sm:hidden">
                    <button onClick={() => toggleDropdown()} className="text-2xl">
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
                <ul className={`fixed top-[80px] left-0 z-50 w-full bg-light dark:bg-dark sm:flex sm:static sm:w-auto sm:bg-transparent sm:dark:bg-transparent sm:flex-row sm:items-center sm:justify-end ${isOpen ? 'block' : 'hidden'}`}>
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

