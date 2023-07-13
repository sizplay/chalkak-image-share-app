export interface IHeightAndWidth {
  height: number;
  width: number;
}

export const getHeightAndWidthFromDataUrl = (dataURL: string): Promise<IHeightAndWidth> =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        height: img.height,
        width: img.width,
      });
    };
    img.src = dataURL;
  });
