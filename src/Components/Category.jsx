export default function Category({ image, heading, type }) {
    return (
        <div
            className="mb-4 p-4 text-center text-white"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "0% 10%",
                height: '350px'
            }}
        >
            <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center text-white">
                <h2 className="fw-bold mb-5">{heading}</h2>
                <ul className="list-unstyled text-center">
                    {type.map((el) => {
                        return <li className="mb-2 fw-bold fs-4">{el}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}
