import { Amplify } from "aws-amplify";
import awsconfig from "../aws/aws-exports.js";

export const registerAmplify = async () => {
  Amplify.configure(awsconfig);
};
