import { Button, Col, Input, Row, Form } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ThemeModel } from "../types";
import * as themeActionCreator from "../actionCreators/themes";
import { bindActionCreators } from "redux";
import Modal from "antd/lib/modal/Modal";
import { useFormik } from "formik";

type EmployeeProps = {
  themes?: ThemeModel[];
  themeAction?: any;
  fetching?: any;
  error?: any;
};

const Themes = (props: EmployeeProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { error, fetching, themes } = props;
  const [form] = Form.useForm();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      description: "",
      image: "",
      link: "",
    },
    onReset: () => {
      form.resetFields();
    },
    onSubmit: (values, { resetForm }) => {
      props.themeAction.createTheme(values);
      resetForm();
    },
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

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
      <Row className="themes-section">
        <div className="container">
          <div className="themes-section-header">
            <h1>Child pages</h1>
            <p>Check out our responsive themes based on Evolution</p>
          </div>
          <Button type="primary" onClick={() => setModalVisible(true)}>
            Add Theme
          </Button>

          <Row className="themes-section-content" gutter={[16, 24]}>
            <Modal
              title="Add Theme"
              centered
              visible={modalVisible}
              onOk={() => {
                setModalVisible(false);
                formik.handleSubmit();
              }}
              onCancel={() => {
                setModalVisible(false);
                formik.resetForm();
              }}
            >
              <Form form={form}>
                <Form.Item label="Title" name="title">
                  <Input
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="Description" name="description">
                  <Input
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="Link" name="link">
                  <Input
                    value={formik.values.link}
                    onChange={formik.handleChange}
                  />
                </Form.Item>
                <Form.Item label="Image" name="image">
                  <Input
                    type="file"
                    onChange={(e) => {
                      formik.setFieldValue("image", e.target.files?.item(0));
                    }}
                  />
                </Form.Item>
              </Form>
            </Modal>
            {fetching ? <h1>Loading....</h1> : <Themes themes={themes} />}
            {error && <h1>{error}</h1>}
          </Row>
        </div>
      </Row>
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
