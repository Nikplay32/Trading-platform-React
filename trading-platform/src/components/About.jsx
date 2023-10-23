import AboutUs from '../assets/about_us.png'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] my-4 mr-8 md:px-10 md:my-20' src={AboutUs} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='text-black md:text-4xl sm:text-3xl text-2xl font-bold py-4'>About us</h1>
          <hr />
          <p className='md:text-1xl sm:text-1xl py-4'>
          <span className='text-[#00df9a] font-bold'>At Cryptosmart </span>we're more than just a trading platform; we're your dedicated partner in the ever-evolving realm of digital assets and financial markets. Our company is founded on the bedrock principles of transparency, security, and innovation, and our commitment to your success is woven into every facet of our operations. 
          </p>
          <p className='md:text-1xl sm:text-1xl pb-4'>
          We aspire to be your trusted gateway to financial opportunities. Join us on this exciting trading journey, where your goals become our mission. Step into a world where your financial ambitions are not just a vision but a tangible reality. Welcome to a place where your success is paramount.
          </p>
          <hr />
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;