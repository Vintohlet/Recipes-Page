import classNames from "classnames";
import {useTheme} from "../providers/ThemeProvider.jsx"
import Header from "../layout/Header.jsx";

export default function Layout(props){
    const {isLightTheme} = useTheme();
    return(
          <div className={classNames("app",{
            dark:isLightTheme
          })}>

              <Header />
              {props.children}
            </div>
    )
}