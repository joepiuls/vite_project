export const Users = [
  {
    id:1,
    profilePicture: "assets/person/1.jpeg",
    username: "Safak Kocaoglu",
  },
  {
    id:2,
    profilePicture: "assets/person/2.jpeg",
    username: "Janell Shrum",
  },
  {
    id:3,
    profilePicture: "assets/person/3.jpeg",
    username: "Alex Durden",
  },
  {
    id:4,
    profilePicture: "assets/person/4.jpeg",
    username: "Dora Hawks",
  },
  {
    id:5,
    profilePicture: "assets/person/5.jpeg",
    username: "Thomas Holden",
  },
  {
    id:6,
    profilePicture: "assets/person/6.jpeg",
    username: "Shirley Beauchamp",
  },
  {
    id:7,
    profilePicture: "assets/person/7.jpeg",
    username: "Travis Bennett",
  },
  {
    id:8,
    profilePicture: "assets/person/8.jpeg",
    username: "Kristen Thomas",
  },
  {
    id:9,
    profilePicture: "assets/person/9.jpeg",
    username: "Gary Duty",
  },
  {
    id:10,
    profilePicture: "assets/person/10.jpeg",
    username: "Safak Kocaoglu",
  },
];


import { pictures } from "./assets/person";
const [p1, p2, p3, p4] = {pictures} 

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: {p1},
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: {p2},
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: {p3},
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: {p4},
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: {p5},
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: {p6},
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: {p7},
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: {p8},
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: {p9},
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: {p10},
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];