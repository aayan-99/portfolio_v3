import React from "react"

interface SecondaryButtonProps {
    btnText: string,
    onClick?: () => void,
}

const SecondaryButton:React.FC<SecondaryButtonProps> = ({ btnText, onClick }) => {
  return (
    <button className="px-8 py-1 rounded-[20px] border border-gray-600 active:scale-95 transition-all duration-100 ease-in-out" onClick={onClick}>{btnText}</button>
  )
}

export default SecondaryButton