export interface AddTaskProps {
task :string;
setTask : (task:string)=>void;
handleCreateTask : ()=>void;
}
export interface ITask {
_id :string;
task : string;
completed: boolean;
}
export interface TaskProps {
    taskIndividual :ITask;
    handleCompletedTask:(id:string)=>void;
    handleDeletedTask:(id:string)=>void;

}
export interface IDeleteTaskRequestParam {
    params:{
    id:string

}
}