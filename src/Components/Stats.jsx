export default function Stats({ number, title }) {
    return (
        <div className="text-center p-4 border rounded-5 h-100 d-flex flex-column">
            <h2 className="fw-semibold display-5">{number}</h2>
            <p className="fs-5 mb-0">{title}</p>
        </div>
    )
}