import mongoose from 'mongoose';

const OauthSchema = new mongoose.Schema({
  token: { type: String, required: true },
  expires: { type: String, required: true },
  // type: { type: String, required: true }
});

export default mongoose.models.Oauth || mongoose.model('Oauth', OauthSchema);
