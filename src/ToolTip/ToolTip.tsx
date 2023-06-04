import "./ToolTip.css";
import Gist from "super-react-gist";

export default function ToolTip() {
  return (
    <div className="ToolTipComponent">
      <h1 className="ToolTip__h1">Tool Tip</h1>
      <div className="ToolTip__wrapper">
        Hover Me
        <div className="ToolTip">Tool Tip</div>
      </div>
      <div className="ToolTip__Gist">
        <Gist url="https://gist.github.com/thekingvice/7e438ebc2012da5e52c306fc8eb4b570" />
      </div>
    </div>
  );
}
