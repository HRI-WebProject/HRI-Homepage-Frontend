import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import styles from "../ResearchArea.module.css";
import { Paper } from "@mui/material";
import TitleBar from "../../../common/TitleBar/TitleBar";
import TopMenu from "../../../common/TopMenu/TopMenu";
import { Row, Col, Card, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EquipmentAddCard from "./EquipmentAddCard";
import EquipmentEditCard from "./EquipmentEditCard";
import Fade from "react-reveal/Fade";

function Equipments() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);
  const [colSize, setColSize] = useState();
  const [curId, setCurId] = useState();
  const [equipments, setEquipments] = useState();
  const { Meta } = Card;

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const isMediumScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const clickAddButton = () => {
    setShowCard(!showCard);
  };

  const editProcess = (id) => {
    setCurId(id);
    setShowEditCard(!showEditCard);
  };

  const deleteProcess = (id) => {
    axios
      .delete(`/admin/researchEquipment/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert("해당 내용이 삭제되었습니다.");
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (account && account.status === "OK") setIsLogged(true);
    axios
      .get("/researchEquipment")
      .then((res) => {
        if (res.status === 200) {
          setEquipments(res.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isSmallScreen) setColSize(12);
    else if (isMediumScreen) setColSize(8);
    else setColSize(6);
  });

  return (
    <div>
      <TitleBar title="researchEquipment" category="Research" />
      <div className={styles.container}>
        <TopMenu selected_key="ResearchArea" />
        <Paper elevation={0} square className={styles.paper}>
          {isLogged && ( // AddButton
            <div style={{ textAlign: "right", paddingBottom: "10px" }}>
              <Button
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                className={styles.addbutton}
                onClick={clickAddButton}
              />
            </div>
          )}
          <Row gutter={[16, 16]}>
            {equipments &&
              equipments.map((item, idx) => (
                <>
                  {showEditCard && item.id === curId ? (
                    <EquipmentEditCard currentId={curId} />
                  ) : (
                    <Col span={colSize}>
                      <Fade top distance="20px">
                        <>
                          <Card
                            hoverable
                            style={{ width: 240, cursor: "default" }}
                            cover={<img alt="example" src={item.photo} />}
                          >
                            <Meta
                              title={item.name}
                              description={item.engName}
                            />
                          </Card>
                          {isLogged && (
                            <div className={styles.container_left}>
                              <Button
                                className={styles.edit_button}
                                onClick={() => editProcess(item.id)}
                              >
                                Edit
                              </Button>
                              <Button
                                className={styles.delete_button}
                                onClick={() => deleteProcess(item.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          )}
                        </>
                      </Fade>
                    </Col>
                  )}
                </>
              ))}
            {showCard && ( // + Button 클릭 시
              <EquipmentAddCard />
            )}
          </Row>
        </Paper>
      </div>
    </div>
  );
}

export default Equipments;
