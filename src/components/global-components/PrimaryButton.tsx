import React from "react"

interface PrimaryButtonProps {
    btnText: string,
    onClick?: () => void,
}

const PrimaryButton:React.FC<PrimaryButtonProps> = ({ btnText, onClick }) => {
  return (
    <button className="px-8 py-1.5 rounded-[20px] bg-[color:var(--secondary-color)] text-white active:scale-95 transition-all duration-100 ease-in-out" onClick={onClick}>{btnText}</button>
  )
}

export default PrimaryButton