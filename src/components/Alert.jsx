
const Alert = ({color, children}) => {
    return (
    <>
    <div className={`alert alert-${color}`}>{children}</div>;
    </>
    
    )
};

export default Alert;