import React from 'react'
import { CONTACT } from '../constants'
import logo from "../assets/Logo.png";

const Contact = () => {
  return (
    

        


        <footer class=" rounded-lg shadow bg-zinc-950 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://www.linkedin.com/in/ishara2000/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-8" alt="Ishara Logo" />

                    </a>
                    <p className="my-4 text-center ml-40 ">Get In Touch</p>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                        <p className="my-4 mr-4">{CONTACT.phoneNo}</p>
                        </li>
                        <li>
                        <p className="my-4">{CONTACT.email}</p>
                        </li>
                    </ul>
                </div>
                
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <p className="my-4 sm:text-center ">{CONTACT.address}</p>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.linkedin.com/in/ishara2000/" class="hover:underline">IsharaTharindu™</a>. All Rights Reserved.</span>
            </div>
        </footer>


      

  )
}

export default Contact
