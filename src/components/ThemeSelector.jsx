import { CSSTransition } from "react-transition-group";

const ThemeSelector = ({themes, setIsActive, ins}) => {
    const switchTheme = (mode = false) => {
        if(mode){
            document.querySelector('body').setAttribute('data-theme', mode)
        }else{
            document.querySelector('body').removeAttribute('data-theme')
        }
        setIsActive()
    }
    return ( 
        <CSSTransition in={ins} timeout={3000} unmountOnExit classNames='tr_box'>
            <div className="theme-box border">
                {themes.map((theme,index) => (
                    <button key={index} onClick={() => switchTheme(theme.theme)} style={{background: `linear-gradient(${theme.gradient})`}}></button>
                ))}
            </div>
        </CSSTransition>
     );
}
 
export default ThemeSelector;