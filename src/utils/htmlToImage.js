import html2canvas from "html2canvas";

export const captureVerseAsImage = async (verseId) => {
  const element = document.getElementById(verseId);
  if (!element) return null;

  try {
    const canvas = await html2canvas(element, { scale: 2 });
    return canvas.toDataURL("image/png");
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};
