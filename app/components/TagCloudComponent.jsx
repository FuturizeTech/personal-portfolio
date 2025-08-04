// app/components/TagCloudComponent.jsx
'use client';

import { useEffect } from 'react';

export default function TagCloudComponent() {
    useEffect(() => {
        const container = document.getElementById("tag-cloud-container");
        if (!container) return;

    }, []);

    return (
        <div id="tag-cloud-container"></div>
    );
}
