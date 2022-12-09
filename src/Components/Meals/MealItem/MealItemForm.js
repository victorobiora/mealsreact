import classes from './MealItemForm.module.css'
import inputclass from './Input.module.css'

const MealItemForm = props => {
       return <form className={classes.form}>
        <div className={inputclass.input}>
            <label htmlFor={props.id} className = {inputclass.label}> Amount</label>
            <input 
            id={props.id}
            type={props.type}
            min= '1'
            max= '5'
            step= '1'
            defaultValue='1' />
        </div>
        <button> + Add </button>
       </form>
};

export default MealItemForm;