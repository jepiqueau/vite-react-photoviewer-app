import Button from './Button';
const StartFromIncrement = ({ startFrom, onAddIncrement, onSubstractIncrement })  => {
    return (
        <div>
            <h4>StartFrom: {startFrom}</h4>
            <Button name="+" handleClick={onAddIncrement}></Button>
            <Button name="-" handleClick={onSubstractIncrement}></Button>
        </div>
    )
}
export default StartFromIncrement