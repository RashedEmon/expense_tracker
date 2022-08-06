const alert={
    backgroundColor: "#055105",
    padding: "5px",
    position: "fixed",
    top: "2px",
    right: "50%",
    color: "white"
}

const Alert = ({message,response})=>{
    return (
        <div className={alert}>
            <h3>{message}</h3>
        </div>
    );
}
export default Alert;