import React from 'react';
type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    //error: Error

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('error: ' + error);
    console.log('errorInfo: ' + JSON.stringify(errorInfo));
    console.log('componentStack: ' + errorInfo.componentStack);
  }

  render(): React.ReactNode {
    if (process.env.NODE_ENV === 'production' && this.state.hasError) {
      return <h3>Something went wrong...</h3>;
    }

    return this.props.children;
  }
}
