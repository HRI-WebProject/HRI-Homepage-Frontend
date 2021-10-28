/* global kakao */
import React, { useEffect } from "react";
import styles from "@contact/Contact.module.css";

const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.558039151657226, 126.99831931741038),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.558039151657226,
      126.99831931741038
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // var mapTypeControl = new kakao.maps.MapTypeControl();
    // map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // var zoomControl = new kakao.maps.ZoomControl();
    // map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <div>
      <div id="map" className={styles.map}></div>
    </div>
  );
};

export default MapContainer;
