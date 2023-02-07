



const Footer = () => {
    const year = new Date()
    return (
        <footer className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                     <h1 className="mt-4 p5 bg-danger text-white rounded">Team Member Allocation App - {year.getFullYear()}</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer