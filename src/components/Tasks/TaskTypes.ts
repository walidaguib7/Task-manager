
export enum StatusType {
    Todo = "Todo",
    InProgress = "In_Progress",
    Completed = "Completed",
}

export enum PriorityType {
    High = "High",
    Medium = "Medium",
    Low = "Low"
}


export type TaskTypes = {
    Task_name: string;
    Status: StatusType;
    Due_Date: Date;
    Priority: PriorityType;
    Description: string;
    CreatedAt: Date;
    UpdatedAt?: Date;
    CompletedAt?: Date;
    Category_ID: "";
}



export type CategoryTypes = {
    Id: number;
    Category_Name: string;
    Description: string;
}