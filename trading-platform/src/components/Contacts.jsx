const Contacts = () => {
    return (
      <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2 my-4'>
            <h1 className='text-[#00df9a] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Have any questions or suggestions?
            </h1>
            <p>Leave your e-mail and we will contact you as soon as possible</p>
          </div>
          <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input
                className='p-3 flex w-full rounded-md text-black'
                type='email'
                placeholder='Enter Email'
              />
              <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                Send e-mail
              </button>
            </div>
            <p>
            Please read our rules because we care about safety and many other conditions. <br />{' '}
              <span className='text-[#00df9a]'>Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contacts;
  