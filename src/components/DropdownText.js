import "../styles/DropdownText.css"
import caret from "../assets/Dropdown/DropdownCaret.svg"
import { useState } from 'react'

const DropdownText = ({display, content}) => {
  const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
      <div className="dropdown opened" onClick={() => setIsOpen(false)}>
        <div className="dropdown-display">
            <p>
                {display}
            </p>
            <span>
                <img src={caret}></img>
            </span>
        </div>
        <div className="dropdown-text">
            <div className="dropdown-text-wrapper">
                {content}
            </div>
        </div>
      </div>
    ) : (
      <div className="dropdown" onClick={() => setIsOpen(true)}>
        <div className="dropdown-display">
            <p>
                {display}
            </p>
            <span>
                <img src={caret}></img>
            </span>
        </div>
      </div>
    )
  };
export default DropdownText