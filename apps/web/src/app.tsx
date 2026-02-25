import DisplayForm from "./components/display-form.js";
import { BugReportForm } from "./components/task-form.js";
export default function App() {
  return (
    <div className="flex items-center justify-center gap-10 p-18">
      <BugReportForm />
      <DisplayForm />
    </div>
  );
}
