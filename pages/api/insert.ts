import { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';

import zoho_oauth_model from '../../db/models/zoho_oauth';
import dbConnect from '../../db/dbConnect';

import { generateToken, createRecord } from '../../util/Zoho/helpers';

const insert = async (req: NextApiRequest, res: NextApiResponse) => {
  const _id = '5f8e06ad1d83924a3ccba24f';
  try {
    await dbConnect();
    const record = await zoho_oauth_model.findById(_id);

    if (moment(record.expires).format('YYYY-MM-DD HH:mm:ss') < moment().format('YYYY-MM-DD HH:mm:ss')) {
      const resp = await generateToken();
      record.token = resp.access_token;
      record.expires = moment().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');
      console.log('record.save() ', await record.save());
    }
    await createRecord('Leads', record.token, { ...req.body });
    res.status(200).json({ status: 'success', record });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 'failure', message: error });
  }
};

export default insert;
