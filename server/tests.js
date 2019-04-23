const axios = require("axios");

const baseUrl = "http://localhost:3002";

// GET REQUEST FOR STUDENT DATA [WORKS]
// axios.get("http://localhost:3002/api/student").then(res => {
//   console.log(res.data);
// });

// ====================================================

// POST REQUEST FOR STUDENT DATA [WORKS]
axios
  .post(`${baseUrl}/api/student/register`, {
    name: "syed shahbaz",
    lastname: "hussain",
    email: "shahbaz@shahbaz.com",
    password: "1234567",
    role: 'Student'
  })
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });

// =======================================================

// GET REQUEST FOR ADMINS [WORKS]
// axios.get(`${baseUrl}/api/admin`).then(res => console.log(res.data));

// =======================================================

// POST REQUEST FOR ADMINS [WORKS]
// axios
//   .post(`${baseUrl}/api/admin/register`, {
//     email: "admin@admin.com",
//     password: "admin",
//     name: "admin",
//     lastname: "admin",
//     role: "Admin"
//   })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// =======================================================

// GET REQUEST FOR COMPANIES [WORKS]
// axios.get(`${baseUrl}/api/company`).then(res => {
//   console.log(res.data);
// });

// =======================================================

// POST REQUEST FOR COMPANIES [WORKS]
// axios
//   .post(`${baseUrl}/api/company/register`, {
//     email: "axiom@axiom.com",
//     password: "1234560",
//     "Company Name": "Panacloud",
//     role: "Company"
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// =======================================================

// GET REQUEST FOR JOBS [WORKS]
// axios.get(`${baseUrl}/api/company/jobs`).then(res => {
//     console.log(res)
// })

// =======================================================

// POST REQUEST FOR JOBS
// axios
//   .post(`${baseUrl}/api/company/jobs`, {
//     title: "React Developer",
//     description: "A job for react stack developer",
//     "company name": "Panacloud",
//     date: "23/04/2019"
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
