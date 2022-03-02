import React, {useState} from "react";
import Button from "./button";

const AddFrom = ({addNewTask,}) => {
    const [text, setName] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmitt = (e) => {
        e.preventDefault();
        if (!text) {

            alert("please enter text")
            return;
        }
        addNewTask({text, day, reminder});
        setReminder(false);
        setDay('');
        setName('');

    }

    return (
        <form className={'add-form'} onSubmit={onSubmitt}>
            <div className={'form-control'}><input placeholder={'Enter task name'} type="text" value={text}
                                                   onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={'form-control'}><input type="date" placeholder={"Add Date to Task"}
                                                   className={'form-control'} value={day}
                                                   onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />

            </div>
            <div className={'form-control'}><input type='submit' value='Save Task' className='btn btn-block'/>
            </div>


        </form>
    )
}

export default AddFrom