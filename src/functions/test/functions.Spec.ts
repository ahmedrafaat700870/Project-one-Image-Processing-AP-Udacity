import input from '../InputFile';
import OutPutFile from '../outputfile'
import ResizeImg from '../ressizeImg'
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
    expect(input('input')).toBe(
      `C:\\Users\\ahmed\\Desktop\\api-with-node-image-processing-main\\api-with-node-image-processing-main\\img\\input.jpg`
    );
  });
  it('test OutPutFile function', () => {
    expect(input('output')).toBe(
      `C:\\Users\\ahmed\\Desktop\\api-with-node-image-processing-main\\api-with-node-image-processing-main\\img\\output.jpg`
    );
  });
  it('test ResizeImg function',async () => {
      const output = ResizeImg as unknown as string;
      const resize = await ResizeImg(inp ,output , `200` , `200`)
      expect(resize.allowHalfOpen).toBeTrue()
  });
});
