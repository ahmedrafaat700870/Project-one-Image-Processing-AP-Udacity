import path from 'path';
const FoulderInput = '../../img/';
const input = (name_img: string | null) => {
  const file = path.resolve(
    __dirname,
    FoulderInput + name_img + '.jpg'
  ) as unknown as string;
  return file;
};
export default input;
