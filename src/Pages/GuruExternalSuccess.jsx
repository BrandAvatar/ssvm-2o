import { useLocation } from "react-router-dom";
import SuccessLayout from "./SuccessLayout";

const GuruExternalSuccess = () => {
    const params = new URLSearchParams(useLocation().search);
    const reg = params.get("reg") || "";

    return (
        <SuccessLayout
           title="Application Received!"
            message="Your application has been successfully submitted. Our team will review it and get back to you if required."
            regNumber={reg}
            category="guru"
            type="external"
        />
    );
};

export default GuruExternalSuccess;