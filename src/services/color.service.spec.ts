import { TestUtils } from '../test';
import { ColorService } from './color.service';

describe('Service: ColorService', () => {
  const htmlInputs = [
    '#c21719',
    '#000000',
    '#ff9900',
    '#c48029',
    '#296bc2',
    '#c229b8',
    '#2943c4'
  ];
  let service: ColorService;
  beforeEach(() => {
    service = new ColorService();
  })
  it('#hexToHsv should convert black to [0,0,0]', () => {
    expect(service.hexToHsv(htmlInputs[1])).toEqual([0,0,0]);
  })
  it('running #hexToHsv then #hsvToHex should return the original input', () => {

    expect(service.hsvToHex(service.hexToHsv(htmlInputs[0]))).toEqual(htmlInputs[0]);
    expect(service.hsvToHex(service.hexToHsv(htmlInputs[1]))).toEqual(htmlInputs[1]);
    expect(service.hsvToHex(service.hexToHsv(htmlInputs[2]))).toEqual(htmlInputs[2]);
    expect(service.hsvToHex(service.hexToHsv(htmlInputs[3]))).toEqual(htmlInputs[3]);
    expect(service.hsvToHex(service.hexToHsv(htmlInputs[4]))).toEqual(htmlInputs[4]);
    expect(service.hsvToHex(service.hexToHsv(htmlInputs[5]))).toEqual(htmlInputs[5]);
    expect(service.hsvToHex(service.hexToHsv(htmlInputs[6]))).toEqual(htmlInputs[6]);

    // htmlInputs.forEach((i) => {
    //   expect(service.hsvToHex(service.hexToHsv(i))).toEqual(i);
    // })
  })
})
