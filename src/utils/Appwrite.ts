
import { Client } from 'appwrite'

export const ProjectID = "65a3e2ffbfeda772ec01";

export const Api = "https://cloud.appwrite.io/v1";

export const DB = "MyApp";


export const categoryCollection = "660ca2decfe052e8334b"
export const TasksCollection = "660ca383c3b8857472f3"


export const client = new Client()
    .setEndpoint(Api) // Your API Endpoint
    .setProject(ProjectID);



