import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const TaskFormik = ({ add }) => {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(5, 'Name too short')
                .max(20, 'Name too long')
                .required('Name is required'),
            
            description: Yup.string()
                .required('Description is required'),
            
            level: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level')
        }
    )

    const submit = v => {
        const newTask = new Task(v.name, v.description, false, v.level)
        add(newTask)
    }

    return (
        <div>
            <Formik
                initialValues = { initialValues }
                validationSchema = { taskSchema }
                onSubmit = { submit }
            >

            {({ touched,
                errors }) => (
                    <Form>
                        <label htmlFor="name">Task Name</label>
                        <Field id="name" type="text" name="name" placeholder="Task name" />

                        {
                            errors.name && touched.name &&
                            (
                                <ErrorMessage name='name' component='div' />
                            )
                        }

                        <label htmlFor="description">Description</label>
                        <Field id="description" type="text" name="description" placeholder="Description" />

                        {
                            errors.description && touched.description &&
                            (
                                <ErrorMessage name='description' component='div' />
                            )
                        }

                        <label htmlFor="level">Level</label>
                        <Field as="select" id="level" name="level">
                            <option value={ LEVELS.NORMAL }>{ LEVELS.NORMAL }</option>
                            <option value={ LEVELS.URGENT }>{ LEVELS.URGENT }</option>
                            <option value={ LEVELS.BLOCKING }>{ LEVELS.BLOCKING }</option>
                        </Field>

                        {
                            errors.level && touched.level &&
                            (
                                <ErrorMessage name='level' component='div' />
                            )
                        }

                        <button type='submit'>Add Task</button>
                    </Form>
                )    
            }

            </Formik>
        </div>
    );
}

export default TaskFormik;
