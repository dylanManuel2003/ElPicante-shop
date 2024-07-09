import { Gabarito, Nosifer } from 'next/font/google'

export const gabarito_init = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-gabarito',
})

export const nosifer_init = Nosifer({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-nosifer',
})

export const gabarito = gabarito_init.variable
export const nosifer = nosifer_init.variable
