import "./Article.scss";
import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'

const Article = () => {
  useEffect(()=>{
    // fetch("https://api.notion.com/v1/databases/45ea2c4b7c4d4a2fa4b2c3f90992cd5e/",{
    //   headers:{
    //     Authorization:"Bearer secret_RyfU3Nl2dInDmfmVE2tkjlVLyf2Br82wsqoJUZKGLJN",
    //     "Notion-Version":"2022-02-22"
    //   }
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res)
    //   });
    fetch("/api/test")
      .then((res) => {
        console.log(res)
      });
  },[])


  return (
    <>
      <div className="container contact_page">
        <div style={{height:"1200px"}}>
          <div style={{width:"200px",height:"18vh",background:"red"}}></div>
          <div style={{color:'black'}}>ggggg</div>
        </div>
      </div>
    </>
  );
};

export default Article;