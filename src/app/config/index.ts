import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: process.env.DATABASE_URL,
  //   bcrypt_salt: process.env.BCRYPT_SALT_ROUND,
  //   default_pass: process.env.DEFAULT_PASS
};
