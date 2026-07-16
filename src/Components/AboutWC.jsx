export default function AboutWC({ image, title, desc, reverse }) {
    return (
        <div className="row align-items-center py-4">
            <div className={`col-md-6 ${reverse ? "order-md-2" : ""} text-center`}>
                <img src={image} alt={title} className="img-fluid rounded shadow" style={{ maxHeight: '280px' }} />
            </div>
            <div className={`col-md-6 ${reverse ? "order-md-1" : ""} text-center text-md-start mt-4 mt-md-0`}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div >
    )
}