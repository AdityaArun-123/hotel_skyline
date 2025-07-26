import React from 'react';
import './empty-book-room-page.css';
import { useNavigate } from 'react-router-dom';

export const EmptyBookRoomPage = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className="empty-room-page-container">
            <div className="oops-heading">oops !</div>
            <p>nothing here...</p>
            <p>Looks like you have not selected any room. Go back and select a room to proceed further.</p>
            <div className="go-back-btn common-button" onClick={()=>{navigate('/roons-page')}}>go to Room page</div>
        </div>
    </>
  )
}
