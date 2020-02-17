import React from "react";

const questions = [
  {
    sn: 1,
    title: "question 1",
    subm: 9,
    accuracy: "10%"
  },
  {
    sn: 2,
    title: "question 2",
    subm: 3,
    accuracy: "20%"
  },
  {
    sn: 3,
    title: "question 3",
    subm: 97,
    accuracy: "76%"
  },
  {
    sn: 4,
    title: "question 4",
    subm: 17,
    accuracy: "90%"
  },
  {
    sn: 5,
    title: "question 5",
    subm: 27,
    accuracy: "70%"
  },
  {
    sn: 6,
    title: "question 6",
    subm: 37,
    accuracy: "50%"
  },
  {
    sn: 7,
    title: "question 7",
    subm: 37,
    accuracy: "1%"
  },
  {
    sn: 8,
    title: "question 8",
    subm: 9,
    accuracy: "10%"
  }
];

export function getQuestions() {
  return questions;
}
