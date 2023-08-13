
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const defaultTheme = createTheme();

function Todo() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        if (value.trim().length === 0) {
            alert("Enter a task before adding !!");
            setValue("");
            return;
        }

        dispatch(
            addTask({
                task: value
            })
        );

        setValue("");
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Box>
                    <Box component="form" noValidate sx={{ mt: 1 }} className='item'>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="text"
                            label="text"
                            type="text"
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                        <Button
                           
                            variant="contained"
                            sx={{ m: 2 }}
                            onClick={onSubmit}
                        >
                            ADD
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default Todo;