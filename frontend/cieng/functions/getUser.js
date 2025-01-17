import api from "../services/api"

export const getUser = async (setData, setErr) => {
    try{
        const response = await api.get("/tasks")
        setData(response?.data);
    }catch(e){
        setErr(true)
    }

}

