'use client'
import useToggleMenu from '@/hooks/useToggleMenu'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '../svg'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ isFixed = false }: { isFixed: boolean | null }) => {
    const { theme, setTheme } = useTheme()
    const { isOpen, toggleDropdown, ref } = useToggleMenu();

    return (
        <nav ref={ref} className={`${isFixed ? 'fixed left-0 top-0' : ''} z-50 w-full h-[80px] px-4 sm:px-16 flex justify-center items-center bg-light-secondary dark:bg-dark-secondary shadow-lg `}>
            <div className="w-[90%] mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image width={160} height={80} src="/images/logo-dark.png" alt="ELPICANTE clothes shop logo" className=" h-[40px] mr-4 dark:hidden block" />
                    <Image width={160} height={80} src="/images/logo-light.png" alt="ELPICANTE clothes shop logo" className=" h-[40px] mr-4 hidden dark:block " />
                </Link>
                <div className="sm:hidden">
                    <button onClick={() => toggleDropdown()} className="text-2xl">
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
                <ul className={`fixed top-[80px] left-0 z-50 w-full bg-light dark:bg-dark sm:flex sm:static sm:w-auto sm:bg-transparent sm:dark:bg-transparent sm:flex-row sm:items-center sm:justify-end ${isOpen ? 'block' : 'hidden'}`}>
                    <Link href="/products" className='mx-3 py-2 sm:py-0 md:px-3 md:py-1 hover:underline font-semibold '>Productos</Link>
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

