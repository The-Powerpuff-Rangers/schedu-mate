import { Client, Account, Databases } from "appwrite";

const app = new Client();

app
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

export const auth = new Account(app);
export const db = new Databases(
  app,
  process.env.REACT_APP_APPWRITE_DATABASE_IDs
);
export default app;

