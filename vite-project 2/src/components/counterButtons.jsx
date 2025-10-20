export default function counterButtons({title, handleClick}) {
  return (
     <button 

    style={{
      marginLeft: "10px",
      backgroundColor: "red",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    }}

     onClick={handleClick}>
        
        {title}
     
     </button>
  )
}