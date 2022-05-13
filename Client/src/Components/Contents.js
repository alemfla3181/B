import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function Contents() {
  const prop  = useParams();
  const [Contents, setContents] = useState([
    "title",
    "content",
    "name",
    "createdAt",
    "_id",
  ]);

  useEffect(() => {
    axios.get(`/api/contents/contents_by_id?id=${prop.contentsId}`).then(response => {
      console.log(response.data.result);
      setContents({
        "title": response.data.result.title,
        "content": response.data.result.content,
        "name": response.data.result.name,
        "createdAt": response.data.result.createdAt,
        "_id":response.data.result._id,
      });
    }).catch(err => alert(err));
  }, [])

  return (
    <div>
      <div>
        {Contents.title}
        <div>
          작성자 : {Contents.name}
          작성 시간 : {Contents.createdAt}
          <div>
          내용
            {Contents.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contents