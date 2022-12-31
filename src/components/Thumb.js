import "../styles/Thumb.css"
import { useNavigate } from "react-router-dom";

const Thumb = ({locationDisplay, image, id}) => {
    let src = image
    image === undefined ? image="#" : image = src
    let navigate = useNavigate(); 

    const handleClick = () => {
        let path = `appartement/${id}`; 
        navigate(path);
    };
  
    return (
        <div className="thumb" onClick={handleClick}>
            <img src={image} alt="Appartement" />
            <div className="thumb-name">{locationDisplay}</div>
        </div>
    )
}
export default Thumb