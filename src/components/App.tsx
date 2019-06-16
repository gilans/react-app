import *  as React from 'react'

import Taskform from './TaskForm'
import TaskList from './TaskList'

import { ITask } from './Task'
export class App extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            tasks: []
        }
    }
    addNewTask(task:ITask){
this.setState({
    tasks: [...this.state.tasks,task]
},()=>console.log(this.state))
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">{this.props.title}
                    </a>

                </nav>
                <div className="container p-4">
                    <div className="col-md-4">
                        <Taskform addANewTask ={this.addNewTask.bind(this)}/>
                    </div>
                    <div className="col-md-8">
                        <TaskList tasks={this.state.tasks}/>
                    </div>
                </div>
            </div>
        )
    }
}

interface IProps {
    title: string;
}

interface IState {
    tasks: ITask[];
}