import { formatDate, truncateText } from "@/utils/common_functions";
import React from "react";
interface props {
  questionType: string;
  response: string;
  expand: boolean;
}
function Response({ questionType, response, expand }: props) {
  if (
    [
      "Radio Grid",
      "DropDown Grid",
      "Single line Text Grid",
      "Number Grid",
      "Checkbox Grid",
    ].includes(questionType)
  ) {
    const lines = response.split("\n");
    return (
      <td className="px-4 py-2 border-b min-w-44 whitespace-nowrap text-center">
        {expand
          ? lines.map((line: string, index: number) => (
              <p key={index}>{line}</p>
            ))
          : lines
              .slice(0, 2)
              .map((line: string, index: number) => <p key={index}>{line}</p>)}
        {!expand && lines.length > 2 && <p key="ellipsis">...</p>}
      </td>
    );
  } else if (questionType === "Date") {
    return formatDate(response);
  }
  return (
    <td className="px-4 py-2 border-b min-w-44 whitespace-nowrap text-center">
      {expand ? response : truncateText(response, 20)}
    </td>
  );
}

export default Response;
