import React from 'react';

class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() { //(error)
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        console.warn('### ErrorBoundary ERROR', error, errorInfo);
        //todo log to sentry
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        //todo talk with designer for error-page
        if (this.state.hasError) {
            // return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
