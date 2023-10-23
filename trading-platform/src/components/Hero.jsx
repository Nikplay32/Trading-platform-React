import Typed from 'react-typed'
import MainVideo from '../assets/video4.mp4'

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <video autoPlay loop muted playsinline id='video' className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
                    <source src={MainVideo} type='video/mp4'/>
                </video>
                <p className='text-white font-bold p-2 text-2xl'>
                PORTFOLIO GROWS WITH US
                </p>
                <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                Make your future!
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>
                    Unlock new opportunities in the world of
                    </p>
                    <Typed className='text-[#00df9a] md:text-3xl sm:text-2xl text-xl font-bold md:pl-2 pl-2' strings={['NFTs', 'Crypto', 'Stocks']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-400'>Navigate the intricate world of trading with precision, and let your financial dreams take flight.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-8 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero