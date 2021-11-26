import { useState } from 'react';
import { useLocation } from '@reach/router';
import { useEffect } from 'react';
export default function UseGetLgn() {
    const [lgn, SetLgn] = useState("");
    const location = useLocation();
    useEffect(() => {
        SetLgn(location.pathname.slice(0, 4, 1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lgn])

    return lgn;
}