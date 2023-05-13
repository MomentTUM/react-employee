import axios from "axios";
const urlGetLookupDepartment = "https://docker.geotalent.co.th/hr-qa/api/v1/lookup/department"
const urlGetLookupPosition = "https://docker.geotalent.co.th/hr-qa/api/v1/lookup/position"
const urlGetLookupStatus = "https://docker.geotalent.co.th/hr-qa/api/v1/lookup/status"
const urlGetAll = "https://docker.geotalent.co.th/hr-qa/api/v1/employees";
const urlPostEmployee = "https://docker.geotalent.co.th/hr-qa/api/v1/employees"
const headerKey = {
  "x-api-key":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzeXN0ZW1OYW1lIjoiQURNSU4tR09ULUVNUC1BUEkiLCJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE2MTA2MzA2ODF9.dZc9c19zPf1o7E2VdCoRT97xvKvt0JNYwaE2eFT-DUI",
};
export const getAllEmployee = async () => {
  try {
    const response = await axios.get(urlGetAll, {
      headers: headerKey,
    });
    return response.data.result;
  } catch (error) {
    console.log(error.response);
  }
};

export const getEmployeeById = async (id)=>{
  try {
    const response = await axios.get(
      `https://docker.geotalent.co.th/hr-qa/api/v1/employees/${id}/Info`,
      {
        headers: headerKey,
      }
    );
    return response.data.result;
  } catch (error) {
    console.log(error.response)
  }
}

export const createEmployee = async (input) => {
  try {
    const response = await axios.post(
      urlPostEmployee,
      input,
      { headers: headerKey }
    );
    return response.data.result;
  } catch (error) {
    console.log(error.response);
  }
};




export const getAllPosition = async () => {
  try {
    const response = await axios.get(urlGetLookupPosition, {
      headers: headerKey,
    });
    return response.data.result;
  } catch (error) {
    console.log(error.response);
  }
};

export const getAllStatus = async () => {
  try {
    const response = await axios.get(urlGetLookupStatus, {
      headers: headerKey,
    });
    console.log(response.data.result)
    return response.data.result;
  } catch (error) {
    console.log(error.response);
  }
};

export const getAllDepartment = async () => {
  try {
    const response = await axios.get(urlGetLookupDepartment, {
      headers: headerKey,
    });
    console.log(response.data.result)
    return response.data.result;
  } catch (error) {
    console.log(error.response);
  }
};