import { useState } from "react";

export const useChecked = () => {
    const [status, setStatus] = useState(false);
    const checkedStatus = () => setStatus(!status);

    return {status , checkedStatus };
};