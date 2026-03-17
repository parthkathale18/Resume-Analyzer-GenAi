import React from 'react';
import { ThreeDot } from 'react-loading-indicators';

const Loading = () => {
    return (
        <main>
            <ThreeDot color={["#951a40", "#c12152", "#dd386b", "#e4648b"]} />
        </main>
    );
};

export default Loading;