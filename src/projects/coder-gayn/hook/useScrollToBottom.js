import { useEffect, useRef } from "react";


const useScrollToBottom = (arrayData = []) => {

    const bottomScrollRef = useRef(null);

    useEffect(() => {
        bottomScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [arrayData.length]);

    return bottomScrollRef;

}

export default useScrollToBottom