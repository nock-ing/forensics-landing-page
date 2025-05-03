import React from 'react';

const TransactionGraph: React.FC = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="100"
                cy="100"
                r="20"
                fill="#3b82f6"
                className="animate-pulse"/>
            <circle
                cx="200"
                cy="50"
                r="20"
                fill="#10b981"
                className="animate-pulse"
                style={{ animationDelay: "0.2s" }}/>
            <circle
                cx="300"
                cy="100"
                r="20"
                fill="#f59e0b"
                className="animate-pulse"
                style={{ animationDelay: "0.4s" }}/>
            <circle
                cx="250"
                cy="200"
                r="20"
                fill="#ef4444"
                className="animate-pulse"
                style={{ animationDelay: "0.6s" }}/>
            <circle
                cx="150"
                cy="250"
                r="20"
                fill="#8b5cf6"
                className="animate-pulse"
                style={{ animationDelay: "0.8s" }}/>
            <circle
                cx="50"
                cy="200"
                r="20"
                fill="#ec4899"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}/>

            <path
                d="M100,100 L200,50"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                className="transaction-path"/>
            <path
                d="M200,50 L300,100"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "0.5s" }}/>
            <path
                d="M300,100 L250,200"
                stroke="#f59e0b"
                strokeWidth="2"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "1s" }}/>
            <path
                d="M250,200 L150,250"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "1.5s" }}/>
            <path
                d="M150,250 L50,200"
                stroke="#8b5cf6"
                strokeWidth="2"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "2s" }}/>
            <path
                d="M50,200 L100,100"
                stroke="#ec4899"
                strokeWidth="2"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "2.5s" }}/>

            <circle
                cx="200"
                cy="200"
                r="25"
                fill="#64748b"
                className="animate-pulse"
                style={{ animationDelay: "1.2s" }}/>

            <path
                d="M100,100 L200,200"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "0.8s" }}/>
            <path
                d="M200,50 L200,200"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "1s" }}/>
            <path
                d="M300,100 L200,200"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "1.2s" }}/>
            <path
                d="M250,200 L200,200"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "1.4s" }}/>
            <path
                d="M150,250 L200,200"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "1.6s" }}/>
            <path
                d="M50,200 L200,200"
                stroke="#ec4899"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                className="transaction-path"
                style={{ animationDelay: "1.8s" }}/>
        </svg>
    );
};

export default TransactionGraph;