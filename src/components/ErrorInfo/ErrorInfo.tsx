import './styles.css';

type ErrorInfoProp = {
  error: string
}

export function ErrorInfo(props: ErrorInfoProp): React.ReactElement {
  return (
    <div className="error">
      <p className="errorText">{props.error}</p>
    </div>
  );
}
