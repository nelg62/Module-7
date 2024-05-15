import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

function ActivityFinder() {
  // Fetches a random activity

  const [participants, setParticipants] = useState(1);
  const [type, setType] = useState("");

  // uses custom hook to handle the effect for loading external data
  const data = useData(
    "https://www.boredapi.com/api/activity?" + "participants=" + participants
  );

  const getByType = useData(
    "https://www.boredapi.com/api/activity?" + "type=" + type
  );

  // get the activity from the json or show error message if failed
  const activity = data ? data.activity : "not found";

  const getAgainBytype = getByType ? getByType.activity : "not found";
  console.log(getAgainBytype);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
} // ++ Add a second use of useData to fetch activities based on type

export default ActivityFinder;
