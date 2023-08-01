import React from 'react';

const Modal = (props) => {
    // console.log(props.modalData);
    const { image_link, description, features, integrations } = props.modalData;
    console.log(props);
    console.log(Object.values(features || {}));
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">

                        <div style={{
                            backgroundColor: 'rgba(235, 87, 87, 0.05)', padding: "50px 30px 50px 20px", width: "437px", height: "340px",
                            border: '2px solid rgba(255, 177, 217, 0.52)', borderRadius: "16px"
                        }} className="card-body">
                            <div>
                                <h2 className="card-title">{description ? description : "Not Found"}</h2>
                                <div style={{ marginTop: "10px" }} className='flex justify-between'>
                                    <div>
                                        <h1 className='text-xl font-bold'>Features</h1>
                                        {Object.values(features || {}).map((value) => (
                                            <li>{value.feature_name ? value.feature_name : "Not found"}</li>
                                        ))}
                                    </div>
                                    <div>
                                        <h1 className='text-xl font-bold'>Integrations</h1>
                                        {integrations &&
                                            integrations.map((item) => (
                                                <li>{item ? item : "not found"}</li>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: "20px", border: '3px solid rgba(217, 217, 217, 0.52)', borderRadius: "16px" }}>

                            <figure>
                                <img style={{ width: "437px", height: "340px", borderRadius: "50px", padding: "25px" }} className='w-full h-64 rounded-lg' src={image_link && image_link[0]} alt="Album" />

                            </figure>
                            <div style={{ padding: "25px" }}>
                                <h1 className='text-center text-xl font-bold' >Hi, how are you doing today?</h1>
                                <p className='text-center'>I'm doing well, thank you for asking. How can I assist you today?</p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;