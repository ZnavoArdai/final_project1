
import axios from "axios"
export const getAllPosts= async ()=>{

    try {
        const res=await axios.get("http://localhost:6060/posts/api/");

        const data=res.data;
        return data
    } catch (error) {
        console.log(error)
    }

}