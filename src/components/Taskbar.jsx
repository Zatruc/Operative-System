import React from "react";
import IconApp, {
  AppStoreIcon,
  CalculatorIcon,
  ExcelIcon,
  FolderIcon,
  SpotifyIcon,
  VScodeIcon,
  CalendarIcon,
} from "./IconApp";
import StartButton from "./StartButton";
import HomeButton from "./HomeButton";

const Taskbar = () => {
  return (
    <div className="bg-gray-900 flex items-center h-14 px-4 fixed bottom-0 left-0 w-full z-50">
      <div className="flex-grow"></div>
      <div className="flex h-12 items-center space-x-3 bg-gray-700 rounded-md px-2.5 py-1">
        <IconApp icon={AppStoreIcon} url={"/store"} />
        <IconApp icon={CalculatorIcon} url={"/calculator"} />
        <IconApp icon={VScodeIcon} url="/vscode" />
      </div>
      <div className="flex-shrink-0">
        <StartButton />
      </div>
      <div className="flex h-12 items-center space-x-3 bg-gray-700 rounded-md px-2.5 py-1">
        <IconApp icon={FolderIcon} />
        <IconApp icon={CalendarIcon} url={"/calendar"} />
        <IconApp icon={SpotifyIcon} url="/spotify" />
      </div>
      <div className="flex-grow"></div>
      <HomeButton />
    </div>
  );
};

export default Taskbar;
