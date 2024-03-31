import React from "react";
 
const Modalpopup = ({ isOpen, onClose, children }) => {
    const handleModalClick = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent
    };
    if (!isOpen) return null;
 
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
            <div onClick={handleModalClick}
                style={{
                    background: "white",
                   
                    width: 440,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
                {children}
            </div>
        </div>
    );
};
 
export default Modalpopup;