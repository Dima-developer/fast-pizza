import React from 'react'
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
    return (
        <ContentLoader className="pizza-block"
            speed={2}
            width={280}
            height={480}
            viewBox="0 0 280 480"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="120" />
            <rect x="0" y="280" rx="6" ry="6" width="280" height="30" />
            <rect x="0" y="330" rx="6" ry="6" width="280" height="90" />
            <rect x="0" y="445" rx="6" ry="6" width="90" height="30" />
            <rect x="120" y="440" rx="20" ry="20" width="160" height="40" />
        </ContentLoader>
    )
};

export default PizzaLoadingBlock;