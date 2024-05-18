import Card from "./Card";

export default function DataValidationError() {
  return (
    <Card>
      <Card.StatusIndicator status="Error" />
      <Card.Title>Data Error</Card.Title>
      <Card.Content>
        <p>It looks that some data have not been provided</p>
      </Card.Content>
    </Card>
  );
}
