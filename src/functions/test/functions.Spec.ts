import input from '../InputFile';
import OutPutFile from '../outputfile'
import ResizeImg from '../ressizeImg'
import fs from 'fs'
import path from 'path'
describe(`test defination functions` ,() => {
    it(`input function` ,() =>{
        expect(input).toBeDefined()
    })
    it(`OutPutFile function` ,() =>{
        expect(OutPutFile).toBeDefined()
    })
    it(`ResizeImg function` ,() =>{
        expect(ResizeImg).toBeDefined()
    })
})
describe('Start test function logic', () => {
    let inp: string ;
    beforeAll(() => {
        inp =  input('coco_ot');
    })
  it('test input function', () => {
    const filepath = path.resolve(__dirname , '../../img/', 'input.jpg')
    expect(input('input')).toBe(filepath);
  });
  it('test OutPutFile function', () => {
    const width = 200;
    const height = 200;
    const filepath = path.resolve(__dirname , '../../out/', `output-${width}-${height}.jpg`)
    expect(OutPutFile('output' , width , height)).toBe(
      `${filepath}`
    );
  });
  it('test ResizeImg function',async () => {
      const output = ResizeImg as unknown as string;
      const resize = await ResizeImg(inp ,output , `200` , `200`)
      expect(resize.allowHalfOpen).toBeTrue()
  });
});
