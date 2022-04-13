import path from 'path';
const FoulderOutput = '../../dist/out/';
const OutPutFile = (
  name: string | null,
  Height: number | null,
  Width: number | null
): string => {
  return path.resolve(
    __dirname,
    FoulderOutput + name + '-' + Height + '-' + Width + '.jpg'
  ) as string;
};
export default OutPutFile;
