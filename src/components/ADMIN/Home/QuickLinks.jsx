import { GiftIcon } from 'lucide-react'
import React from 'react'
import { Fa500Px, FaAddressBook, FaAmbulance, FaSadTear } from 'react-icons/fa'
import { Fa42Group, FaManatSign, FaPerson } from 'react-icons/fa6'

const QuickLinks = () => {
  return (
        <div className=" rounded-lg max-w-[17rem]">
        <div className=" p-4 pt-1">
          <h2 className="text-lg font-semibold text-blue-600">Quick Links</h2>
        </div>
        <div className="flex flex-col gap-4 p-4 pt-1">
            <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover ">
            <div className='bg-red-500 rounded-full h-7 w-7 flex items-center justify-center'> <FaAddressBook className='text-white' size={15} /> </div> Home
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover">
            <div className='bg-red-500 rounded-full h-7 w-7 flex items-center justify-center'> <FaAmbulance className='text-white' size={15} /> </div> Broadcast
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover">
            <div className='bg-red-500 rounded-full h-7 w-7 flex items-center justify-center'> <FaPerson className='text-white' size={15} /> </div> Veiw Students
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover">
            <div className='bg-red-500 rounded-full h-7 w-7 flex items-center justify-center'> <FaManatSign className='text-white' size={10} /> </div>  Veiw Supervisors
            </a>
        </div>
        

    </div>
  )
}

export default QuickLinks
