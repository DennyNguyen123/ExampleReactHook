import { useState, useEffect } from "react";

export default function Review_Avatar() {
  const [avatar, setAvatar] = useState();

    useEffect(()=>{
      return()=>{
        avatar && URL.revokeObjectURL(avatar.preview)
      }
    },[avatar])

    const handlePreviewAvatar= (e) =>{
      const file = e.target.files[0];
      file.preview = URL.createObjectURL(file);
      setAvatar(file)
      // console.log(avatar);
    }


  return (
    <div>
      <h2>Review Avatar</h2>
      <input 
        type='file'
        onChange={handlePreviewAvatar}
      />
      {
        avatar && (
          <img src={avatar.preview} alt="" width="80%"></img>
        )
      }
    </div>
  );
}
