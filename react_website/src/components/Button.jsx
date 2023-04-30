import './Button.css';

function Button({button}){

    function getButtonID(){
        return button.toString().split(" ")[1];
    }

    return(
        <div className={button}>
            {getButtonID()}
        </div>
    )
}

export default Button