import axios from 'axios';
import React,{useEffect, useState} from 'react'

function Contents(props) {
  const contentId = props.match.params.contentId;
  const [Contents, setContents] = useState("");

  useEffect(() => {
    axios.get(`/api/contents/contents_by_id?id=${contentId}&type=single`).then(response => {
      setContents(response.data[0])
      console.log(response.data);
    }).catch(err => alert(err));
  }, [])

  return (
    <div>Contents</div>
  )
}

export default Contents