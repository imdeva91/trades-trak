import React from 'react'
import Link from 'next/link'
import Card from '@/components/Card'
const Signup = () => {
    return (
        <div className='md:flex  md:items-center max-w-6xl p-4 m-auto h-[613px]'>
            <div className='w-[687px] h-full '>
                <div className='m-5 h-[400px]'>
                    <div className='flex items-center'>
                        <img className='w-10 h-10 ' src='assets/logo.png' />
                        <span>Trades Trek</span>

                    </div>
                    <div className='p-2'>
                        <h1 className='font-extrabold text-2xl '>Get Started is easy!</h1>
                        <p className='font-normal text-base '>7 days free usage. Payment will commence at end of 7 days. Cancel anytime before then, to halt payment.</p>

                    </div>
                    <div className='p-2' >
                        <form className='flex flex-col'>
                            <label className='font-normal text-base'>Fullname</label>
                            <input className='border-b-2 border-slate-400 mb-3 text-black' type='text' placeholder='John Adam |' />
                            <input className='border-b-2 border-slate-400 mb-3' type='email' placeholder='Email Address' />
                            <input className='border-b-2 border-slate-400 mb-3' type='number' placeholder='Phone Number' />
                            <input className='border-b-2 border-slate-400 mb-3' type='text' placeholder='User Name' />
                            <input className='border-b-2 border-slate-400 mb-3' type='text' placeholder='Password' />
                            <input className='border-b-2 border-slate-400 mb-3' type='text' placeholder='Confirm Password' />
                            <input className='border-b-2 border-slate-400 ' type='text' placeholder='Referal Code (optional)' />
                            <p className='mt-2  font-normal text-base'>By registering, you agree to the <span className='border-b-2 border-purple-800 text-purple-800'>Terms Of Use</span> and <span className='border-b-2 border-purple-800 text-purple-800'>Privacy Policy</span>.</p>
                            <button className=' bg-purple-800 font-bold text-base text-white p-1 rounded-md mt-3'>Sign up</button>
                        </form>
                    </div>
                    <div className='flex justify-center mt-1'>
                        <span>Already have an account?</span>
                        <Link className='text-purple-800 font-bold' href="/login">Login</Link>
                    </div>
                </div>

            </div>
            <div className=' w-[687px] h-full bg-slate-200 '>
                <Card />
            </div>
        </div>
    )
}

export default Signup