import axios, { AxiosResponse } from 'axios';
import queryString from 'querystring';

interface generateTokenResp {
  access_token: string;
  api_domain: string;
  token_type: string;
  expires_in: number;
}

export const generateToken = async () => {
  try {
    const params = queryString.stringify({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token'
    });

    const resp: AxiosResponse<generateTokenResp> = await axios(`https://accounts.zoho.eu/oauth/v2/token?${params}`, {
      method: 'POST'
    });
    return resp.data;
  } catch (error) {
    // console.log(error);
    throw new Error('token error');
  }
};

export const createRecord = async (module_api_name: string, access_token: string, data: any) => {
  try {
    const resp = await axios(`https://www.zohoapis.eu/crm/v2/${module_api_name}`, {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${access_token}`
      },
      data: { data: [data] }
    });
    console.log(resp.data);

    return resp;
  } catch (error) {
    console.log('createRecord error - ', error);
    throw new Error('Error creating record');
  }
};
