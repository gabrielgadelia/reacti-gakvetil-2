export default function Winner({ winnerText, onReset }) {
  if (!winnerText) return null; 

    const winnerTextStyle = ({...bannerStyle, ...buttonStyle})

const bannerStyle = {
  background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  color: "#2c3e50",
  padding: "25px",
  borderRadius: "20px",
  marginTop: "30px",
  fontSize: "26px",
  fontWeight: "bold",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
  animation: "bounceIn 0.8s ease-out",
  backdropFilter: "blur(5px)",
};


const buttonStyle = {
  marginTop: "12px",
  padding: "12px 28px",
  fontSize: "18px",
  borderRadius: "30px",
  background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  color: "white",
  cursor: "pointer",
  border: "none",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

  return (
    <div style={winnerTextStyle}>
      <div>{winnerText}</div>
      <button style={winnerTextStyle} onClick={onReset}>
        Play Again 🔁
      </button>
    </div>
  );
}