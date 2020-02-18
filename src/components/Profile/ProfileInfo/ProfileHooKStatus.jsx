import React, {useState, useEffect} from "react";

const ProfileHookStatus = (props) => {
    const putProfileUserStatus = props.putProfileUserStatus;

    //Hooks
    const [addedMode, setAddedMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

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