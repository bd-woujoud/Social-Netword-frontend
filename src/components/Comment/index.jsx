import React from 'react'
import './comment.css'
import moment from 'moment'
import avatar from '../../assets/img/avatar.jpg'

export default ({comment}) => {
    return (
        <>
            <div className="comment">
                <img src={'http://localhost:5000/images/'+comment.user.avatar} alt="" />
                <div>

                    <div className="commentcontent">
                        <span>{comment.user.username}</span>
                        <p> {comment.text} </p>
                    </div>
                    <span style={{paddingLeft:"10px" , fontSize:"12px" , color:"lightgrey"  }} >{moment(comment.createdAt).fromNow()}</span>
                </div>
            </div>
        </>
    )
}