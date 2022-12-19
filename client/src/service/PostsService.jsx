import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060/";
export const getAllPosts = async () => {
  try {
    const res = await axios.get("posts/api/");

    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};



export const newPost = async(someData) => {
  const res = await axios.post("posts/api/", {
    category:someData.category,
    date: someData.date,
    title: someData.title,
    image: someData.image,
    description:someData.subject,
    user:localStorage.getItem("userId")
  });

  const data=await res.data;
  return data
};
