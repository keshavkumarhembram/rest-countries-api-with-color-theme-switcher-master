import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import styles from './BackButton.module.css';

function BackButton() {
  const mode = useSelector(state => state.theme.mode);
    const navigate = useNavigate();
  return (
    <div className={`${styles['back-button']} ${mode === 'dark'? styles.dark: ''}`}>
        <button onClick={()=> {navigate(-1)}}>
        <FontAwesomeIcon icon={faArrowLeftLong} /> Back
        </button>
    </div>
  )
}

export default BackButton