import classes from './MyPostForms.module.css'
import { Form, Field } from 'react-final-form'
import { Textarea } from '../../../common/FormsControls/FormsControls';

const MyPostForm = (props) => {
    const validate = (max) => (e) => {
        const errors = {}
        if (!e.post) {
            errors.post = "Do you want to make a post?";
        } else if (e.post.length > max) {
            errors.post = "to long";
        }
        return errors;
    }
    
    const onSubmit = (e) => {
        debugger
        props.updatePostText(e.post)
        props.addPost();
    }

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate(100)}
            
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <lable>Make a post</lable>
                    <Field name="post">
                        {({ input, meta }) => (
                            <div>
                                <Textarea {...input} placeholder="some post text" />
                                {meta.touched && meta.error &&
                                    <span className={classes.error}>{meta.error}</span>
                                }
                            </div>
                        )}
                    </Field>
                    <button type="submit">Post</button>
                </form>
            )}
        />
    )
}

export default MyPostForm;