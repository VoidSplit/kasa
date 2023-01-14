import "../Thumb/Thumb.css"

const Thumb = ({locationDisplay, image, id}) => {
    let src = image
    image === undefined ? image="#" : image = src;
    const handleClick = () => {
        let path = `appartement/${id}`; 
        window.location.replace(path)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };
  
    return (
        <div className="thumb" onClick={handleClick}>
            <img src={image} alt="Appartement" />
            <div className="thumb-name">{locationDisplay}</div>
        </div>
    )
}
export default Thumb