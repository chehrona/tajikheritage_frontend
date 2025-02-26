import React from 'react';

const HexagonBox = ({ text }) => {
    return (
        // <div style={styles.container}>
        <div style={styles.hexBox}>{text}</div>
        // </div>
    );
};

// Styles
const styles = {
    // container: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '10px', // Adjust as needed
    // },
    hexBox: {
        width: '150px', // Control width
        height: '20px', // Control height
        backgroundColor: '#808',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px',
        position: 'relative',
        clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)', // Hex shape with a straight left side
    },
};

export default HexagonBox;
