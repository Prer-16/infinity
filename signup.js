import {useState,useEffect} from 'react';
import {storage} from "./firebase";
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import{ v4} from "uuid";

function App() {
 
  const [imageUpload, setimageUpload] = useState(null);
  const[imageList,setImageList]= useState([]);
  const imageListRef =ref(storage,"images/");
  const uploadimage =()=>{ 
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4() }` );
    uploadBytes(imageRef,imageUpload).then(()=>{
      alert("Image uploaded");
    });
  };
  useEffect(()=> {
listAll(imageListRef).then((response)=>{
  response.items.forEach((item)=>{
    getDownloadURL(item).then((url)=>{
      setImageList((prev)=>[...prev,url]);
    });
  }); 
  });
},[]);
 

 
  
  
  return (
    <div className="App">
      <input type="file"
      onChange={(event) =>{
        setimageUpload(event.target.files[0]);
      }}
      />
      <button onClick={uploadimage}>upload Image</button>
      {imageList.map((url)=>{
        return<img src={url} />
      })}
    </div>
  );
   
      
     
  
   

}

export default App;
