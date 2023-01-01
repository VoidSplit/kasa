import "../styles/Dropdown.css"
import caret from "../assets/Dropdown/DropdownCaret.svg"
import { useState } from 'react'

const Dropdown = ({list}) => {
  const [isOpen, setIsOpen] = useState(false)
    let display = list.filter(i => i.display === true)[0]
    let filteredList = list.filter(i => i.display === undefined)
    return isOpen ? (
      <div className="dropdown opened" onClick={() => setIsOpen(false)}>
        <div className="dropdown-display">
            <p>
                {display.text}
            </p>
            <span>
                <img src={caret} alt="arrow" />
            </span>
        </div>
        <div className="dropdown-list">
            <div className="dropdown-list-wrapper">
                {filteredList.map((item, index) => <span key={`${item}-${index}`}>{item.text}</span>)}
            </div>
        </div>
      </div>
    ) : (
      <div className="dropdown" onClick={() => setIsOpen(true)}>
        <div className="dropdown-display">
            <p>
                {display.text}
            </p>
            <span>
                <img src={caret} alt="arrow" />
            </span>
        </div>
      </div>
    )
  };
export default Dropdown