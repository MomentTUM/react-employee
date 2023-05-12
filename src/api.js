import axios from "axios";
const urlGetAll = "https://docker.geotalent.co.th/hr-qa/api/v1/employees";
const headerKey = {
  "x-api-key":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzeXN0ZW1OYW1lIjoiQURNSU4tR09ULUVNUC1BUEkiLCJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE2MTA2MzA2ODF9.dZc9c19zPf1o7E2VdCoRT97xvKvt0JNYwaE2eFT-DUI",
};
export const getAllEmployee = async () => {
  try {
    const response = await axios.get(
      urlGetAll,
      {
        headers: headerKey,
      }
    );
    return response.data.result;
  } catch (error) {
    console.log(error.response);
  }
};
