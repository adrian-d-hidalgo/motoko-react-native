import Card from "./Card";
import RedirectButton from "./RedirectButton";

export default function Redirect() {
  return (
    <Card>
      <Card.StatusIndicator status="Success" />
      <Card.Title>Login Success</Card.Title>
      <Card.Content>
        <p>Please tap the button or close this window</p>
      </Card.Content>
      <Card.Actions>
        <RedirectButton />
      </Card.Actions>
    </Card>
  );
}
