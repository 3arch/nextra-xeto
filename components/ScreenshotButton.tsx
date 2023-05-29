import { useState } from "react";

interface Props {
  tagName?: string;
}

function ScreenshotButton(props: Props) {
  const { tagName } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const onScreenshot = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/htmltopdf?url=${window.location.href}`);
      const blob = await res.blob();
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "filename.pdf";
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove();
      console.log(url);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return <button onClick={onScreenshot}>Screen shot</button>;
}

export default ScreenshotButton;
