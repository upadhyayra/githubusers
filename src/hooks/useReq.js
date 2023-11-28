import { useEffect, useState } from 'react'
import axios from 'axios'

const useReq = () => {
    
    const getData = async (url)=>{
      try {
        let userData = await axios.get(url)
        return userData.data
      } catch (error) {
        console.log(error.message)
        return {message:error.message}
      }
    }
             
  return getData
}

export default useReq