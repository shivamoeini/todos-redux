import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
const TodoItem = ({ id, title }) => {
    const dispatch = useDispatch();
    
    const removeTask = () => {
        dispatch(
            deleteTask({
                id: id
            })
        )
    }
    return (
        <li className='items'>
            <div>
                <Typography variant="h6" sx={{ m: 2 }}>
                    {title}
                </Typography>
            </div>
            <div>
                <Button
                   onClick={() => { removeTask(); }} >
                    Delete
                </Button>
            </div>
        </li>
    );
};

export default TodoItem;