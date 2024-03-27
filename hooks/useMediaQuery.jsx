import {useState, useEffect} from "react"

export const useMediaQuery = () => { 

    const [width, setWidth] = useState(0); 

    const handleWindowSizeChange = () => { 
        setWidth(window.innerWidth); 
    }; 
  
    useEffect(() => { 
        handleWindowSizeChange(); 
  
        window.addEventListener("resize", handleWindowSizeChange); 
  
        return () => { 
            window.removeEventListener("resize", handleWindowSizeChange); 
        }; 
    }, []); 
  
    return width <= 1023; 
}