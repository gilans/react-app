import * as React from 'react'
import { ITask } from './Task'
import { any } from 'prop-types';

class TaskForm extends React.Component<ITaskFormProps, any>{
    constructor(props: ITaskFormProps) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
    }
    getCurrentTimeStamp(): number {
        return new Date().getTime()
    }
    handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const newTask: ITask = {
            id: this.getCurrentTimeStamp(),
            title: this.state.title,
            description: this.state.description,
            completed: false
        }
        this.props.addANewTask(newTask)
        this.setState({ title: '', description: '' })

    }
    handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="card card-body">
                <form onSubmit={e => this.handleNewTask(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={e => this.handleInputChange(e)}
                            className="form-control"
                            placeholder="Task Title"
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="description"
                            onChange={e => this.handleInputChange(e)}
                            className="form-control"
                            placeholder="Task Description"
                            value={this.state.description}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                        Save
                    </button>
                </form>
            </div >
        )
    }
}
interface ITaskFormProps {
    addANewTask: (task: ITask) => void;
}
interface ITaskFormState {
    title: string;
    description: string;
}
export default TaskForm