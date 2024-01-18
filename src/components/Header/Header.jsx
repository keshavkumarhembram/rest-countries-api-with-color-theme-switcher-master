import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import {faMoon as faMoonSolid} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch,useSelector } from "react-redux";

import { toggle } from "../../features/theme/themeSlice";
import styles from "./Header.module.css";

function Header() {
  const mode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <header className={`${styles.header} ${mode === 'dark'? styles.dark: ''}`}>
        <h1>Where in the world?</h1>
        <button onClick={() => dispatch(toggle())}><FontAwesomeIcon icon={mode === 'dark' ? faMoonSolid: faMoonRegular} /><span>Dark Mode</span></button>
    </header>
  )
}

export default Header