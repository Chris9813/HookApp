import React from 'react'


export const Small = React.memo(({value}) => {

    console.log("I`M COMMING BACK");
    

    return (
        <div>
            <small>{value}</small>
        </div>
    )
}
)