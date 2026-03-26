import { GraduationCap } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import LoginForm from '@/components/login-form'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth-server'

const LoginPage = async () => {
const session = await isAuthenticated()
if (session) {
  redirect("/")
}
  return (
    <div className='max-w-7xl mx-auto h-screen'>
      <div className='flex justify-center items-center h-full'>
        <div className='grid grid-cols-2 border shadow-lg rounded-lg'>
          <div className='bg-[url("/loginBanner.svg")] bg-cover bg-center flex flex-col p-12 bg-[#F2F4F6] rounded-l-lg'>
            <div className='flex items-center gap-2'>
              <div className='bg-primary p-2.5 rounded-md'>
                <GraduationCap className='text-white' />
              </div>
              <h1 className='text-xl font-extrabold'>Student Portal</h1>
            </div>
            <div className='flex flex-col gap-2.5 mt-12'>
              <h3 className='font-bold text-primary'>System edukacyjny</h3>
              <h1 className='text-5xl font-extrabold max-w-sm'>Twoja brama do <span className='text-primary'>wiedzy</span> i rozwoju.</h1>
            </div>
            <div className='flex flex-col gap-4 rounded-lg bg-white p-6 mt-50'>
              <p>
                "Technologia to tylko narzędzie. W kontekście
                mobilizowania dzieci i pracy nad ich rozwojem,
                nauczyciel jest najważniejszy."
              </p>
              <div className='flex items-center gap-3'>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                  <p className='text-sm font-bold'>Jan Kowalski</p>
                  <span className='text-xs text-secondary'>Nauczyciel</span>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col px-21 py-16 gap-8 justify-center'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold'>Witaj ponownie</h1>
              <p className='text-secondary'>Zaloguj się, do swojego konta studenckiego</p>
            </div>
            <LoginForm />
            <span className='text-secondary text-sm text-center'>Nie masz jeszcze konta? <Link href='/' className='text-primary'>Skontakuj się z administracją</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage