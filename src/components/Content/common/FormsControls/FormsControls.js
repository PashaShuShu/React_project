
export const Textarea = ({ input, ...props }) => {
    return (
        <div>
            <textarea {...input} {...props} placeholder={props.placeholder} />
        </div>
    )
}