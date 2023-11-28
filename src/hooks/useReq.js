import axios from 'axios'

const useReq = () => {
    
    const getData = async (url)=>{
      try {
        let userData = await axios.get(url)
        return userData.data
      } catch (error) {
        return {message:error.message}
      }
    }
             
  return getData
}

export default useReq