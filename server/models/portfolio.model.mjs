import mongoose from 'mongoose';
// import {db_name} from '../server.mjs';

const PortfolioSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true
  // },
  // email: {
  //   type: String
  // },
  // spotifyId: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  // accessToken: {
  //   type: String,
  //   required: true
  // },
  // accessTokenExpiry: {
  //   type: Date,
  //   required: true
  // },
  // refreshToken: {
  //   type: String,
  //   required: true
  // }
});

export default mongoose.model("Portfolio", PortfolioSchema);