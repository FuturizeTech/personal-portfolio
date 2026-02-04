// app/components/TagCloudComponent.jsx
'use client';

import { useEffect } from 'react';

export default function TagCloudComponent({ onLoad }) {
    useEffect(() => {
        const container = document.getElementById("tag-cloud-container");
        if (!container) return;
        if (onLoad) onLoad();
    }, [onLoad]);

    return (
        <div id="tag-cloud-container"></div>
    );
}
