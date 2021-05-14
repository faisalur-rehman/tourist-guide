import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export async function postData(endpoint, data) {
  return api.post(`${endpoint}`, {
    ...data,
  });
}
console.log("");
export async function formUserProfilePost(endpoint, data, token) {
  const config = {
    headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
  };
  return api.post(
    `${endpoint}`,
    {
      ...data,
    },
    config
  );
}
export async function formPostData(endpoint, data, token) {
  return api.post(
    `${endpoint}`,
    {
      ...data,
    },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
}

export async function formGetData(endpoint, token) {
  return api.get(`${endpoint}`, {
    headers: {
      "x-auth-token": token,
    },
  });
}
export async function patchData(endpoint, id, data, token) {
  return api.patch(
    `${endpoint}/${id}`,
    { ...data },
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );
}
