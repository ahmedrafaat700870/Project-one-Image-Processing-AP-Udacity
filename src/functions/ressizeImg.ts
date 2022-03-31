import sharp from 'sharp';

const ResizeImg = async (
  input_path: string,
  output_path: string,
  Width: string,
  Height: string
) => {
  console.log(Width);
  console.log(Height);

  await sharp(input_path)
    .resize({ width: parseInt(Width), height: parseInt(Height) })
    .toFile(output_path, (err) => err);
};

export default ResizeImg;
