import * as React from 'react'
import { ITask } from './Task'
import { any } from 'prop-types';

class TaskList extends React.Component<ITaskListProps, any>{
    render(): JSX.Element[] {
        return (
            this.props.tasks.map((task: ITask, i: number) => {
                return (
                    <div key={task.id}>
                        
                        <div className="col-md-4 mt-2" key={i}>
                            <div className="card card-body">
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <button className="btn btn-danger btn-block">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}
interface ITaskListProps {
    tasks: ITask[]
}
export default TaskList