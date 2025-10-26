export default function resetButton({title, handleReset}) {
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

    onClick={handleReset}
     >
       {title}
     </button>
    )

}