
import { Inter } from '@next/font/google'
import Todo from '../Components/Todo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <Todo/>
    </>
  )
}
