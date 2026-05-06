import { useLocation } from "react-router-dom";
import SuccessLayout from "./SuccessLayout";

const GuruExternalSuccess = () => {
    const params = new URLSearchParams(useLocation().search);
    const reg = params.get("reg") || "";

    return (
        <SuccessLayout
           title="Application Received!"
            message="A confirmation email has been sent to your registered email address."
            regNumber={reg}
            category="guru"
            type="external"
        />
    );
};

export default GuruExternalSuccess;