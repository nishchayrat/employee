import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) =>{
            console.log(res.data);
            this.setState({employee : res.data});
        });
    }

    render() {
        return (
            <div className="employees-list">
                <h2 className='text-center'>Employee List</h2>

                <div className='row'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key = {employee.employeeId}>
                                            <td>{employee.employeeId}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;