"use client"
import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo_without name_clear.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AnimatedButton from '../common/animatedButton';
import { FiArrowRight } from 'react-icons/fi';

const FooterComponent = () => {

  const quickLink = [
    {
      "id": "01",
      "name": "Services"
    },
    {
      "id": "02",
      "name": "Work"
    },
    {
      "id": "03",
      "name": "About us"
    },
    {
      "id": "04",
      "name": "Blog"
    },
    {
      "id": "05",
      "name": "Reviews"
    },
    {
      "id": "06",
      "name": "Contact us"
    },
    {
      "id": "07",
      "name": "Career"
    }
  ]



  return (
    <footer className='bg-[#faf3f7]  text-black z-50 p-2'>
      <div className='max-w-7xl mx-auto py-20 lg:pt-40 md:grid md:grid-cols-2'>
        <div>
          <Image className='w-16' src={logo} alt='logo' />
          <p className='mt-10 text-2xl w-1/2'>Making great things in Silicon Valley.</p>

          <p className='mt-14 font-extrabold uppercase'>GET IN TOUCH</p>

          <div className='mt-1 pb-10'>
            <AnimatedButton text={"webizoneit@gmail.com"} link={''} textColor={"text-[#69254f]"} />

            <br />
            <AnimatedButton text={"+880 1601-054041"} link={''} textColor={"text-[#69254f]"} />

          </div>

          <div className='my-10 flex gap-5 text-[#69254f]' >
            <FaInstagram className="text-xl my-auto" />
            <FaFacebookF className="text-xl my-auto" />
            <FaTwitter className="text-xl my-auto" />
            <FaLinkedinIn className="text-xl my-auto" />
          </div>
        </div>

        <div className='mt-5'>

          <div className="md:flex justify-around items-center    my-12">
            <div className=" font-semibold text-sm md:text-2xl md:w-1/2">
              Sign up for our newsletter.
            </div>

            <div className="relative md:w-1/2  lg:w-[400px]  ">
              <input
                type="email"
                placeholder="name@gmail.com"
                className="bg-transparent placeholder:italic placeholder:text-black placeholder:text-xs md:placeholder:text-base py-2 w-[90%]  ml-3 lg:pr-20 border-b border-[#e261b1] focus:outline-none  caret-black   "
              />
              <div className="flex  md:gap-1 items-center absolute top-3 right-4 md:right-8 cursor-pointer">
                <p className="text-[12px] md:text-sm font-semibold">Subscribe</p>
                <FiArrowRight className="text-xs md:text-base" />
              </div>
            </div>

          </div>
          <div className='mt-14 lg:mt-28'>
            <p className='font-extrabold uppercase'>Explore</p>
            <div className='grid grid-flow-row md:grid-cols-3 lg:grid-cols-5  mt-2'>
              {
                quickLink?.map(link => <div key={link?.id}> <AnimatedButton text={link?.name} link={''} textColor={"text-[#69254f]"} /> </div>)
              }
            </div>

            <p className='mt-2 text-gray-800'>Road No. 12, Block A, Bosila , Mohammadpur, Dhaka, bangladesh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;