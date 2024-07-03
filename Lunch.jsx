import React from "react"

const Lunch = ({ description, image }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto mb-4">
        <img className="w-full h-[400px] object-cover" src={image} alt="trending" />
        <div className="p-4">
          <h5 className="text-xl font-bold mb-2">{description}</h5>
          <p className="text-gray-400">by ABC xyz</p>
        </div>
      </div>
    )
  }
  export default Lunch