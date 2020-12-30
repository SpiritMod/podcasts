//core
import React, {useRef, useState} from "react";
import {Scrollbars} from "react-custom-scrollbars";

//styles
import "./styles/scrollbar.scss";

const CustomScrollbars: React.FC = ({children}) => {

  const scrollbarRef = useRef(null);

  const [bottomStatus, setBottomStatus] = useState(false);

  const handleUpdate = (values: any) => {
    const { scrollTop, scrollHeight, clientHeight } = values;
    const t = ((scrollTop + 60) / (scrollHeight - clientHeight));
    (t > 1) ? setBottomStatus(true) : setBottomStatus(false)
  };

  return (
    <>
      <Scrollbars
        ref={scrollbarRef}
        className={`scrollbar ${bottomStatus ? 'has-bottom' : ''}`}
        autoHide={false}
        renderTrackVertical={props => <div {...props} className="scrollbar-track" />}
        renderThumbVertical={props => <div {...props} className="scrollbar-thumb" />}
        onUpdate={handleUpdate}
        style={{ height: 450 }}
      >
        <div className="scrollbar-content s-content transcript">
          {children}
        </div>
      </Scrollbars>
    </>
  )
}

export default CustomScrollbars;
