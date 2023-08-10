/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextApiRequest, NextApiResponse } from 'next';
import { S3 } from 'aws-sdk';

const s3 = new S3({
  accessKeyId: process.env.S3_UPLOAD_KEY,
  secretAccessKey: process.env.S3_UPLOAD_SECRET,
  region: process.env.S3_UPLOAD_REGION,
});

const S3Delete = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { data } = req.body;

      s3.deleteObjects(
        {
          Bucket: process.env.S3_UPLOAD_BUCKET!,
          Delete: {
            Objects: data.keys,
          },
        },
        (err, data) => {
          if (err) {
            console.log('err', err);
            throw err;
          }
          res.status(200).json({ data });
        },
      );
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
};

export default S3Delete;
