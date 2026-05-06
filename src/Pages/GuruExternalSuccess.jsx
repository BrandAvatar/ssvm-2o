import { useLocation } from "react-router-dom";
import SuccessLayout from "./SuccessLayout";

const GuruExternalSuccess = () => {
    const params = new URLSearchParams(useLocation().search);
    const reg = params.get("reg") || "";

    return (
        <SuccessLayout
           title="Application Received!"
            message="Your application has been submitted successfully. Our team will review it shortly."
            regNumber={reg}
            category="guru"
            type="external"
        />
    );
};

export default GuruExternalSuccess;