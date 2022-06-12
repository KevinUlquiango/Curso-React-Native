import UserState from "./hooks/UserState";
import Aplication from "./Aplication";

export default function App() {
  return (
    <UserState>
      <Aplication />
    </UserState>
  );
}
