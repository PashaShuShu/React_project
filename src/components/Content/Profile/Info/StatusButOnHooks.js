import React, { useState, useEffect } from 'react';




const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(true);
    const [status, setStatus] = useState(props.status);

    useEffect(() =>{ 
        setStatus(props.status)

    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(false);
    }
    const deactivateEditMode = () => {
        setEditMode(true);
        props.updateStatus(status);
    }

    const onChangeStatusText = (e) => {
        let text = e.currentTarget.value;
        setStatus(text);
    }

    return (
        <>
            <div>
                {editMode ?
                    <div>
                        <span onDoubleClick={activateEditMode}>
                            {props.status || "I dont have status"
                            }
                        </span>
                    </div>
                    :
                    <div>
                        <input
                            placeholder="мой статус"
                            onChange={onChangeStatusText}
                            onMouseLeave={deactivateEditMode}
                            value={status}>

                        </input>
                    </div>
                }
            </div>
        </>
    )
}

export default ProfileStatus;