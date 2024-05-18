import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

interface CardSectionProps {
  children: ReactNode;
}

interface StatusIndicatorProps {
  status: "Warn" | "Error" | "Success";
}

const Card: React.FC<CardProps> & {
  Title: React.FC<CardSectionProps>;
  Content: React.FC<CardSectionProps>;
  Actions: React.FC<CardSectionProps>;
  StatusIndicator: React.FC<StatusIndicatorProps>;
} = ({ children }) => {
  return <div className="bg-white border border-gray-200 rounded-lg p-6 m-4 shadow-md">{children}</div>;
};

const CardTitle: React.FC<CardSectionProps> = ({ children }) => {
  return <div className="mb-4 text-xl font-bold text-black">{children}</div>;
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  let icon = null;
  let color = "";

  switch (status) {
    case "Warn":
      icon = <ExclamationCircleIcon className="h-6 w-6 text-yellow-500" />;
      color = "yellow-500";
      break;
    case "Error":
      icon = <XCircleIcon className="h-6 w-6 text-red-500" />;
      color = "red-500";
      break;
    case "Success":
      icon = <CheckCircleIcon className="h-6 w-6 text-green-500" />;
      color = "green-500";
      break;
    default:
      break;
  }

  return (
    <div className="mb-4">
      <div className={`mb-2 flex items-center text-${color}`}>{icon}</div>
      <div className="border-b border-gray-200 w-full"></div>
    </div>
  );
};

const CardContent: React.FC<CardSectionProps> = ({ children }) => {
  return <div className="mb-4 text-black">{children}</div>;
};

const CardActions: React.FC<CardSectionProps> = ({ children }) => {
  return <div>{children}</div>;
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Actions = CardActions;
Card.StatusIndicator = StatusIndicator;

export default Card;
