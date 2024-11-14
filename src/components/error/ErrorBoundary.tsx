import { Component, PropsWithChildren } from 'react';

export interface FallbackProps {
  error: Error;
  resetError: () => void;
}

interface Props extends PropsWithChildren {
  fallback: React.ComponentType<FallbackProps>;
  onReset?: () => void;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  resetError = () => {
    this.props.onReset?.();
    this.setState({ error: null });
  };

  render() {
    const { fallback: Fallback, children } = this.props;
    const { error } = this.state;

    if (error) {
      return <Fallback error={error} resetError={this.resetError} />;
    }

    return children;
  }
}
