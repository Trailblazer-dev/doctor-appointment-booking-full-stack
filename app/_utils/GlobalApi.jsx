const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://doctor-appointment-admin-uayb.onrender.com/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("/categories?populate=*");
const getDoctorList = () => axiosClient.get("/doctors?populate=*");
const getDoctorByCategory = (category) =>
  axiosClient.get(
    "/doctors?filters[categories][Name][$in]=" + category + "&populate=*"
  );
// /doctors/?'+ id + '?populate=*
const getDoctorById = (id) => axiosClient.get("/doctors?populate=*");

const bookAppointment = (data) => axiosClient.post("/appointments", data);
// const getUserBookingList = (userEmail) =>
//   axiosClient.get(
//     "/appointments?filters[Email][$eq]=" +
//       userEmail +
//       "&populate[doctor][populate][image][populate][0]=url&populate=*"
//   );
const getUserBookingList = (userEmail) =>
  axiosClient.get(
    `/appointments?filters[Email][$eq]=${userEmail}&populate=doctor.image`
  );

// 
const deleteBooking = (id) => axiosClient.delete("/appointments/" + id);

const sendEmail = (data) => axios.post("/api/sendEmail", data);

export default {
  getCategory,
  getDoctorList,
  getDoctorByCategory,
  getDoctorById,
  bookAppointment,
  getUserBookingList,
  deleteBooking,
  sendEmail,
};
