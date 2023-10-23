import {SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube, SlSocialTwitter, SlSocialGoogle} from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Cryptosmart.</h1>
            <p className='py-4'>Our company is dedicated to transforming the trading landscape. We provide innovative solutions for cryptocurrency, NFTs, and stocks to help you achieve your financial goals.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <SlSocialInstagram size={30} />
                <SlSocialLinkedin size={30} />
                <SlSocialYoutube size={30} />
                <SlSocialTwitter size={30} />
                <SlSocialGoogle size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Cryptocurrency Trading</li>
                    <li className='py-2 text-sm'>NFT Marketplace</li>
                    <li className='py-2 text-sm'>Stock Trading</li>
                    <li className='py-2 text-sm'>Portfolio Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>Technical support</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About Us</li>
                    <li className='py-2 text-sm'>Goals</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Licences</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claims</li>
                    <li className='py-2 text-sm'>Privacy Policy</li>
                    <li className='py-2 text-sm'>Terms of Service</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Footer;
