
import { Button } from "shared/ui/Button";
import { useEffect, useState } from "react";


export const BugButton = () => {
    const [error, setError] = useState(false);

    const trowError = () => setError(true);

    useEffect(()=> {
        if (error)
        { throw new Error() }
    },[error])

    return (
        <Button
            onClick={trowError}
        >
            ERROR
        </Button>
    );
};
