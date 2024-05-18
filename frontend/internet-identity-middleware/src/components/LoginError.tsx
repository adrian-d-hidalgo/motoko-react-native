import Card from "./Card";
import LoginButton from "./LoginButton";

export default function LoginError() {
  // Get error from context and personalize the error message

  return (
    <Card>
      <Card.StatusIndicator status="Error" />
      <Card.Title>Login Error</Card.Title>
      <Card.Content>
        <p className="text-lg text-gray-700 mb-4">
          An error appears to have occurred while trying to log in, please try again.
        </p>
      </Card.Content>
      <Card.Actions>
        <LoginButton />
      </Card.Actions>
    </Card>
  );
}
