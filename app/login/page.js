import Link from 'next/link'
import React from 'react'
import Card from '@/components/Card'

const Login = () => {
    return (

        <div className='md:flex  md:items-center max-w-6xl p-4 m-auto h-[613px]'>
            <div className='w-[687px] h-full '>
                <div className='    p-4 m-10 h-[400px]'>
                    <div className='flex items-center'>
                        <img className='w-10 h-10 ' src='assets/logo.png' />
                        <span>Trades Trek</span>

                    </div>
                    <div className='p-2'>
                        <h1 className='font-extrabold text-2xl '>Hi, Welcome Back!</h1>
                        <p className='font-normal text-base '>Lorem Ipsum e un testo segnaposto utilizzato nel settore della tipografia e della stampa.</p>

                    </div>
                    <div className='p-2' >
                        <form className='flex flex-col'>
                            <label className='font-normal text-base'>Email</label>
                            <input className='border-b-2 border-slate-400 mb-4 text-black' type='email' placeholder='johnadam@gmail.com' />
                            <input className='border-b-2 border-slate-400' type='text' placeholder='passwords' />
                            <span className='mt-3 text-end font-normal text-base'>Forgot Password?</span>
                            <button className='bg-purple-800 font-bold text-base text-white p-1 rounded-md mt-3'>Log in</button>
                        </form>
                    </div>
                    <div className='flex justify-center mt-2'>
                        <span>Don’t have an account?</span>
                        <Link className='text-purple-800 font-bold' href="/signup">Sign up</Link>
                    </div>
                </div>

            </div>
            <div className=' w-[687px] h-full bg-slate-200 '>
                <Card />
            </div>

        </div>



    )
}

export default Login