import './Field.css';

function Field(props) {
    return (
        <div className="box">
            <label htmlFor="">{props.fname}</label>
            <input type="text" placeholder={"Enter your " + props.fname} required/>
        </div>
    )
}

export default Field;