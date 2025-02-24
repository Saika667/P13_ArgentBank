import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from '../../features/example/exampleActions'

function Example () {
    const count = useSelector((state) => state.example.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Compteur : {count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    )
}

export default Example