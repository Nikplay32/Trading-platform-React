import Free from '../assets/free-trial.png';
import Month from '../assets/30-days.png';
import Year from '../assets/calendar.png';

const Prices = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Free} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Free trial</h2>
              <p className='text-center text-4xl font-bold'>$0</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Basic charting</p>
                  <p className='py-2 border-b mx-8'>Market news updates</p>
                  <p className='py-2 border-b mx-8'>Limited access to trading community</p>
              </div>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='text-white w-full shadow-xl bg-black flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Year} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Year trial</h2>
              <p className='text-center text-4xl font-bold'>$160</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Exclusive premium features</p>
                  <p className='py-2 border-b mx-8'>In-depth market research reports</p>
                  <p className='py-2 border-b mx-8'>Priority customer support</p>
                  <p className='py-2 mx-8 text-gray-500'>* All features from the monthly subscription included *</p>
              </div>
              <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Month} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Month trial</h2>
              <p className='text-center text-4xl font-bold'>$15</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Real-time market data</p>
                  <p className='py-2 border-b mx-8'>Personalized trading insights</p>
                  <p className='py-2 border-b mx-8'>Additional charting options</p>
              </div>
              <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  )
}

export default Prices