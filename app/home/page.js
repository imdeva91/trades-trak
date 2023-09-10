import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <div className='w-[100vw] h-[100vh] relative'>
            <div className='absolute top-1/2 left-1/2 -mt-[50px] -ml-[50px]'>
                <Link href="/login">
                    <img className='w-[137px] h-[148px] ' src='assets/logo.png' />

                </Link>

            </div>
        </div>

    )
}

export default Home