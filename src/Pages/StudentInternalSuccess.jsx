import { useLocation } from "react-router-dom";
import SuccessLayout from "./SuccessLayout";

const StudentInternalSuccess = () => {
    const params = new URLSearchParams(useLocation().search);
    const reg = params.get("reg") || "";

    return (
        <SuccessLayout
            title="Application Received!"
            message="A confirmation email has been sent to your registered email address."
            regNumber={reg}
            category="studentpreneur"
            type="internal"
        />
    );
};

export default StudentInternalSuccess;