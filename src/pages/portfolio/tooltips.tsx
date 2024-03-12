import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiReact,
  SiVite,
  SiPostgresql,
  SiAwsamplify,
  SiPython,
} from "react-icons/si";
import { IconContext } from "react-icons";
import { FaGolang } from "react-icons/fa6";

export const GoToolTip = () => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="hover:cursor-default ">
            <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
              <FaGolang />
            </IconContext.Provider>
          </TooltipTrigger>
          <TooltipContent>
            <p>Golang</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
export const ReactToolTip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default ">
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiReact />
          </IconContext.Provider>
        </TooltipTrigger>
        <TooltipContent>
          <p>ReactJs</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export const PostgressToolTip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default ">
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiPostgresql />
          </IconContext.Provider>
        </TooltipTrigger>
        <TooltipContent>
          <p>PostgresSQL</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export const ViteToolTip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default ">
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiVite />
          </IconContext.Provider>
        </TooltipTrigger>
        <TooltipContent>
          <p>Vite</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export const AwsCognitoAmplifyToolTip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default ">
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiAwsamplify />
          </IconContext.Provider>
        </TooltipTrigger>
        <TooltipContent>
          <p>Aws Amplify + Aws Cognito</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const AmplifyToolTip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default ">
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiAwsamplify />
          </IconContext.Provider>
        </TooltipTrigger>
        <TooltipContent>
          <p>Aws Amplify</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const PythonPygameTooltip = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default ">
          <IconContext.Provider value={{ color: "#6E07F3", size: "2em" }}>
            <SiPython />
          </IconContext.Provider>
        </TooltipTrigger>
        <TooltipContent>
          <p>Pyhon + PygameCE</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
