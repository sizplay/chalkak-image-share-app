import { NextApiRequest, NextApiResponse } from 'next';
import { S3ClientConfig, S3Client, DeleteObjectsCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.S3_UPLOAD_REGION,
  credentials: {
    accessKeyId: process.env.S3_UPLOAD_KEY,
    secretAccessKey: process.env.S3_UPLOAD_SECRET,
  },
  signatureVersion: 'v4',
} as S3ClientConfig);

const S3Delete = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { data } = req.body;

      const params = {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        Bucket: process.env.S3_UPLOAD_BUCKET!,
        Delete: {
          Objects: data.keys.map((key: string) => ({ Key: key })),
        },
      };
      const command = new DeleteObjectsCommand(params);
      const response = await s3.send(command);

      res.status(200).json({ response });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
};

export default S3Delete;
