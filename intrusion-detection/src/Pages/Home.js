import React, { useState } from "react";
import { uploadDataset } from "../Services/API";
import { useNavigate } from "react-router-dom";
import "../CSS/Home.css";

function Home() {
    const [selectedDataset, setSelectedDataset] = useState(""); // State to store selected dataset
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadMessage, setUploadMessage] = useState("");

    const navigate = useNavigate();

    // Predefined datasets
    const datasets = [
        { name: "UNSW-DATASET", file: "UNSW_NB15_testing-set.csv" },
    ];

    const handleDatasetSelect = (event) => {
        setSelectedDataset(event.target.value);
    };

    const handleUpload = async () => {
        if (!selectedDataset) {
            setUploadMessage("Please select a dataset.");
            return;
        }
    
        setUploadProgress(0);
    
        try {
            const response = await fetch(`/datasets/${selectedDataset}`);
            const blob = await response.blob();
    
            const formData = new FormData();
            formData.append("dataset", blob, selectedDataset);
    
            const message = await uploadDataset(formData, (progress) => {
                setUploadProgress(progress);
            });
    
            if (message.includes("success")) {
                localStorage.setItem("selectedDataset", selectedDataset); // ✅ Store dataset in localStorage
                window.dispatchEvent(new Event("datasetUpdated")); // ✅ Notify Navbar to update
                navigate("/Main/data-visualization");
            }
    
            setUploadMessage(message);
        } catch (error) {
            setUploadMessage(`Error: ${error.message}`);
        }
    };
    
    

    return (
        <div className="mainhome-1">
            <div className="Heading-home-1">
                <h1>Select a Dataset</h1>
            </div>

            <select className="dataset-select" value={selectedDataset} onChange={handleDatasetSelect}>
                <option value="">-- Select a Dataset --</option>
                {datasets.map((ds, index) => (
                    <option key={index} value={ds.file}>
                        {ds.name}
                    </option>
                ))}
            </select>

            <button className="upload-submit" onClick={handleUpload}>
                Use Dataset
            </button>

            {uploadProgress > 0 && (
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
                </div>
            )}

            {uploadMessage && <p className="upload-info"><strong>{uploadMessage}</strong></p>}
        </div>
    );
}

export default Home;
