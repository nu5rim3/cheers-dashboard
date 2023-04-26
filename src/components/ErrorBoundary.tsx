import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    errorMessage: any;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        errorMessage: ''
    };

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorMessage: error.message };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error);
        console.error("Uncaught errorInfo:", errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <>
                <h1>Error!</h1>
                <h4>{this.state.errorMessage}</h4>
            </>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;