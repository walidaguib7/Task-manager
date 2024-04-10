
import { DB, TasksCollection, client } from "@/utils/Appwrite";
import { Databases, Query } from "appwrite";
import { useQuery } from "react-query"

const databases = new Databases(client);



export const useFetchByStatus = (page: number, task: string, label: string) => {
    const limit = 8;
    const offset = (page - 1) * limit;
    return useQuery(
        [label, task, page],
        async () => {
            if (task == "") {
                return await databases.listDocuments(DB, TasksCollection, [
                    Query.equal("UserID", localStorage.getItem("user") || ""),
                    Query.equal("Status", label),
                    Query.limit(limit),
                    Query.offset(offset),
                ]);
            } else {
                return await databases.listDocuments(DB, TasksCollection, [
                    Query.equal("UserID", localStorage.getItem("user") || ""),
                    Query.startsWith("Task_name", task),
                ]);
            }
        },
        { keepPreviousData: true }
    );
}