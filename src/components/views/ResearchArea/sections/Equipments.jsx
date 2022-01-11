import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import styles from "@researcharea/ResearchArea.module.css";
import { Paper } from "@mui/material";
import TitleBar from "@titlebar/TitleBar";
import TopMenu from "@topmenu/TopMenu";
import { Row, Col, Card, Button, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EquipmentAddCard from "./EquipmentAddCard";
import ButtonSet from "@common/ButtonSet/ButtonSet";
import EquipmentEditCard from "./EquipmentEditCard";

function Equipments() {
  const account = useSelector((state) => state.user.loginSuccess);
  const [isLogged, setIsLogged] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);
  const [curId, setCurId] = useState();
  const [equipments, setEquipments] = useState();
  const { Meta } = Card;
  const history = useHistory();

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1100px)",
  });

  const movePage = (url) => {
    history.push(url);
  };

  const clickAddButton = () => {
    setShowCard(!showCard);
  };

  const editProcess = (id) => {
    // console.log(id);
    setCurId(id);
    setShowEditCard(!showEditCard);
  };

  const deleteProcess = (id) => {
    // axios
    //   .delete(`/admin/professors/${id}`)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       alert("해당 내용이 삭제되었습니다.");
    //       window.location.reload();
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const equipmentList = [
    {
      id: "1",
      engName: "Mavic Mini",
      name: "Mavic Mini",
      photo: "/assets/equipment/equipment1.png",
    },
    {
      id: "2",
      engName: "Robomaster S1",
      name: "Robomaster S1",
      photo: "/assets/equipment/equipment2.jpg",
    },
    {
      id: "3",
      engName: "Vive Pro Eye",
      name: "Vive Pro Eye",
      photo: "/assets/equipment/equipment3.png",
    },
  ];

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

  return (
    <div className={styles.container}>
      <TitleBar title="연구실 장비" />
      <TopMenu selected_key="ResearchArea" />
      <Paper className={styles.paper}>
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
                  <Col span={6}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={item.photo} />}
                    >
                      <Meta title={item.name} description={item.engName} />
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
  );
}

export default Equipments;
