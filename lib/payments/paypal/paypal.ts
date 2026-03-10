import { Client } from '@paypal/paypal-server-sdk';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local', override: true });

export function createPPClient(){
  return Client.fromEnvironment(process.env);
}





