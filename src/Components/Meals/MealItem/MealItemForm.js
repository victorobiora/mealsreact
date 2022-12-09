import classes from './MealItemForm.module.css'
import inputclass from './Input.module.css'

const MealItemForm = props => {
       return <form className={classes.form}>
        <div className={inputclass.input}>
            <label htmlFor={props.id} className = {inputclass.label}> Amount</label>
            <input id={props.id} type={props.type}/>
        </div>
        <button> + Add </button>
       </form>
};

export default MealItemForm;