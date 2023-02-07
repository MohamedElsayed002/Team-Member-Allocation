
import Male from './img/maleProfile.jpg'
import Female from './img/femaleProfile.jpg'

const Employees = ({employees,selectedTeam,handleChange,handleEmployeeCardClick}) => {
    // props was here but changed to APP
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select value={selectedTeam} onChange={handleChange} className="form-select form-select-lg">
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
            {
                employees.map(employee => {
                    return (
                        <div key={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} id={employee.id} style={{cursor:"pointer"}} onClick={handleEmployeeCardClick}>
                            { employee.gender === "male" ? <img className="card-img-top" src={Male} /> : <img className="card-img-top" src={Female} /> }
                            <div className="card-body">
                                <h5 className="card-title">Full Name : {employee.fullName}</h5>
                                <p className="card-text"><b>Designation</b>{employee.designation}</p>
                            </div>
                        </div>
                    )
                })
            }
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Employees