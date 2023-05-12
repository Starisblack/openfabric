import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div onClick={props.closed} className={attachedClasses.join(" ")}>
        <Logo />

        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;
