import { useTitle } from "@/App";

export const Settings = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Settings");
  return <div>Settings</div>;
};
