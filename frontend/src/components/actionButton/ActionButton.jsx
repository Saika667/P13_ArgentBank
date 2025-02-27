import { Button } from "./ActionButtonStyle"

function ActionButton ({ onclick, label, classname }) {
    
    return (
        <Button onClick={ () => onclick() } className={classname}>{ label }</Button>
    )
}

export default ActionButton