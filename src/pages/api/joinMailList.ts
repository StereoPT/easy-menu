import type { NextApiRequest, NextApiResponse } from 'next';

import { addToMailList } from '@/libs/mailgun';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const { email } = req.body;

    if (!email) {
      throw new Error('Missing Email');
    }

    await addToMailList(email);
    res.status(200).json({ message: 'Thanks for Joining my Mail List!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
