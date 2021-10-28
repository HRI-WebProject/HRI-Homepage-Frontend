import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ItemData from "@board/sections/ItemData";

function ImageDataList() {
  return (
    <>
      <ImageList cols={3} sx={{ width: "100%", height: 700 }}>
        {ItemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.subtitle}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}

export default ImageDataList;
