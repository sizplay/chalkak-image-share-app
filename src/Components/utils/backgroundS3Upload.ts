import axios from 'axios';
import { getDate } from './getDate';

const backgroundS3Upload = async (file: File, albumName: string, userId: string) => {
  const date = getDate();
  const imageName = `${userId || ''}/${albumName}/${date}/${file.name}~${new Date().getTime()}`;

  const s3uploadData = await axios.post('/api/upload', {
    name: imageName,
    body: file,
    type: file.type,
  });
  const { url } = s3uploadData.data;
  await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
      'Access-Control-Allow-Origin': '*',
    },
  });
  const newUrl = new URL(url);
  return newUrl.pathname;
};

export default backgroundS3Upload;
