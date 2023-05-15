import { v1 } from "uuid";
import { TaskType } from "../Todolist"

export const tasksReducer = (state: TaskType[], action: TsarType): TaskType[] => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return state.filter(el => el.id !== action.payload.id)
        }
        case "ADD-TASK": {
            let newTask = { id: v1(), title: action.payload.title, isDone: false };

            return [newTask, ...state]
        }
        default: return state
    }
}


type TsarType = RemoveTaskACType | AddTaskACType
type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        payload: { id }
    } as const
}



type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
    return {
        type: "ADD-TASK",
        payload: { title }
    } as const
}
