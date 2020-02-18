import React, {useState} from "react";

const ProfileHookStatus = (props) => {
    const initialStatus = props.status;
    const putProfileUserStatus = props.putProfileUserStatus;
    //Hooks
    const [addedMode, setAddedMode] = useState(false);
    const [status, setStatus] = useState(initialStatus)

    const activeEditMode = () => {
        setAddedMode(true);
    };

    const deactivationEditMode = () => {
        setAddedMode(false);
        putProfileUserStatus(status);
    };

    const handleChangeStatus = (e) => {
        setStatus(e.currentTarget.value);

    };

    return (
        <div>
            {addedMode
                ? <input type="text" onBlur={deactivationEditMode} value={status} onChange={handleChangeStatus}/>
                : <span onDoubleClick={activeEditMode}>{(status === '') ? '-------' : status}</span>
            }
        </div>
    )
};

export default ProfileHookStatus;