import { GiftIcon } from 'lucide-react'
import React from 'react'
import { Fa500Px, FaSadTear } from 'react-icons/fa'
import { Fa42Group } from 'react-icons/fa6'

const QuickLinks = () => {
  return (
        <div className=" rounded-lg max-w-[17rem]">
        <div className=" p-4 pt-1">
          <h2 className="text-lg font-semibold text-blue-600">Quick Links</h2>
        </div>
        <div className="flex flex-col gap-4 p-4 pt-1">
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover">
                <FaSadTear className="text-blue-600" />  Home
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover">
                <Fa42Group className="text-blue-600" />  Broadcast
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover">
                <Fa500Px className="text-blue-600" />  Veiw Students
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-600 hover">
                <GiftIcon className="text-blue-600" />    Veiw Supervisors
            </a>
        </div>
        

    </div>
  )
}

export default QuickLinks
