const Separator = () => {
    return (
      <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2 my-4'>
            <h1 className='text-[#00df9a] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            It's cool that you're still with us!
            </h1>
            <p>We will help you start this great journey into the world of digital money</p>
            <p>You can contact us anytime for any assistance and we will help you with any problem.</p> 
          </div>
          <div className='my-8 text-center flex'>
            <p className='text-[#00df9a] font-bold md:text-3xl sm:text-2xl text-xl'>So let's continue on our way together!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
export default Separator;
