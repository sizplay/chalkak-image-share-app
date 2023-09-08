export const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop();
  const filename = url.split('/').pop();
  const metadata = { type: `image/${ext}` };
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return new File([data], filename!, metadata);
};
