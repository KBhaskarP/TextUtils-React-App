import React, { Component } from "react";

export default function About(props) {
  let myStyle={
    backgroundColor: props.mode==='light'?'black':'white',
    color:props.mode==='light'?'white':'black'
  }

  return (
    <>
      <div className="accordion accordion-flush" style={myStyle} id="accordionFlushExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              
            >
              About {props.title}
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            
          >
            <div className="accordion-body" style={myStyle}>
              {props.title} is a single-page web application developed using
              React. Its primary purpose is to provide various text manipulation
              and analysis functionalities in a user-friendly interface. The
              main features of {props.title} include: <strong>Text Transformation</strong>: Users
              can convert text between uppercase and lowercase formats.
              Additionally, they can replace specific strings within the text
              with alternative strings. <strong>Text Analysis</strong>: {props.title} offers
              functionality to analyze the provided text. This analysis may
              include determining the total word count, character count, and
              other relevant statistics. <strong>Time to Read</strong>: {props.title} calculates
              and displays an estimated reading time for the given text. This
              feature provides users with an approximation of the time required
              to read the text at a typical reading pace. Overall, {props.title}{" "}
              aims to simplify text manipulation tasks and provide users with
              insights into their text content through analysis features. Its
              intuitive interface and diverse functionalities make it a valuable
              tool for anyone working with text content.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
