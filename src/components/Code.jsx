import { useEffect, useState } from "react";
import Prism from "prismjs";
import "../assets/prism-vsc-dark-plus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

const Code = ({ code, language }) => {
  const [isTextCopied, setIsTextCopied] = useState(false);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsTextCopied(true);
    setTimeout(() => {
      setIsTextCopied(false);
    }, 5000);
  };

  return (
    <div className="Code mt-5 mb-5 max-w-full relative">
      <div
        className="flex justify-center items-center absolute top-2 right-2 rounded cursor-pointer text-white w-7 aspect-square text-sm bg-primary"
        onClick={copyToClipboard}
      >
        <FontAwesomeIcon icon={isTextCopied ? faCheck : faCopy} />
      </div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
