import { Button, Col } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Theme } from "../types";
import * as themeActionCreator from "../actionCreators/themes";
import { bindActionCreators } from "redux";

type EmployeeProps = {
  themes?: Theme[];
  themeAction?: any;
};

const Themes = (props: EmployeeProps) => {
  useEffect(() => {
    console.log(props);
  });
  return (
    <>
      {props.themes?.map((theme) => {
        return (
          <Col span="8">
            <img
              style={{
                width: "100%",
              }}
              src={theme.image}
              alt=""
            />
            <h1>{theme.title}</h1>
            <p>{theme.description}</p>
            <button
              onClick={() => {
                props.themeAction.deleteTheme(theme.id);
              }}
              className="btn"
            >
              Remove
            </button>
          </Col>
        );
      })}
    </>
  );
};
function mapStateToProps(state: any) {
  return {
    theme: state.themeReducer,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    themeAction: bindActionCreators(themeActionCreator, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Themes);
