import React from "react";
import axios from "axios";
import { Button } from "antd";
import styles from "./ButtonSet.module.css";
import { useHistory } from "react-router";

function ButtonSet({ pageFeature, id, value }) {
  const history = useHistory();
  const moveToEditPage = () => {
    let currentId = id + "";
    if (window.location.pathname === "/alumni") {
      history.push({
        pathname: "members" + "/" + currentId + "/edit",
        state: { id: id },
      });
    } else if (window.location.pathname.substr(1, 12) === "publications") {
      history.push({
        pathname: window.location.pathname + "/" + currentId + "/edit",
        state: { id: id, value: value },
      });
    } else if (window.location.pathname.substr(1, 5) === "board") {
      history.push({
        pathname: window.location.pathname + "/edit",
        state: { id: id, value: value },
      });
    } else {
      history.push({
        pathname: window.location.pathname + "/" + currentId + "/edit",
        state: { id: id },
      });
    }
  };

  const deleteProcess = (param) => {
    let currentId = id + "";
    switch (param) {
      case "professor":
        axios
          .delete(`/admin/professors/${currentId}`)
          .then((res) => {
            if (res.status === 200) {
              alert("해당 내용이 삭제되었습니다.");
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case "members":
        axios
          .delete(`/admin/members/${currentId}`)
          .then((res) => {
            if (res.status === 200) {
              alert("해당 내용이 삭제되었습니다.");
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case "researchArea":
        axios
          .delete(`/admin/researchArea/${currentId}`)
          .then((res) => {
            if (res.status === 200) {
              alert("해당 내용이 삭제되었습니다.");
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case "projects":
        axios
          .delete(`/admin/projects/${currentId}`)
          .then((res) => {
            if (res.status === 200) {
              alert("해당 내용이 삭제되었습니다.");
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case "publications":
        axios
          .delete(`/admin/publications/${currentId}`)
          .then((res) => {
            if (res.status === 200) {
              alert("해당 내용이 삭제되었습니다.");
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case "notice":
        axios
          .delete(`/admin/board/${currentId}`)
          .then((res) => {
            if (res.status === 200) {
              alert("해당 내용이 삭제되었습니다.");
              history.push("/board/notice");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      case "activity":
        axios
          .delete(`/admin/board/${currentId}`)
          .then((res) => {
            if (res.status === 200) {
              alert("해당 내용이 삭제되었습니다.");
              history.push("/board/activity");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Button className={styles.edit_button} onClick={moveToEditPage}>
          Edit
        </Button>
        <Button
          className={styles.delete_button}
          onClick={() => deleteProcess(pageFeature)}
        >
          Delete
        </Button>
      </div>
    </>
  );
}

export default ButtonSet;
