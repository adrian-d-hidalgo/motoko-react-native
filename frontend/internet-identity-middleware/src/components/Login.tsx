import Card from "./Card";
import LoginButton from "./LoginButton";

export default function Login() {
  return (
    <Card>
      <Card.Title>Start Login</Card.Title>
      <Card.Content>
        <p className="text-lg text-gray-700 mb-4">Please, press the button to login</p>
      </Card.Content>
      <Card.Actions>
        <LoginButton />
      </Card.Actions>
    </Card>
  );
}
