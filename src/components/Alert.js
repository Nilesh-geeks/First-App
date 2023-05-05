import React from 'react'

export default function alert(props) {
    return (
        <div style={{height:'50px'}}>

       { props.alert && <div className={`alert alert-${props.mode} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>}

        </div>
    )
}
