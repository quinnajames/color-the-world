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
  const hsvInputs = [
    [33.934426229508176, 52.813528185281, 90.58823529411765],
    [319.672131147541, 52.81385281385281, 90.58823529411765],
    [0, 0, 52.549019607843135],
    [359.62025316455697, 81.44329896907216, 76.07843137254902]
  ];
  const hsvTargets = [
    [34, 53, 91],
    [320, 53, 91],
    [0, 0, 53],
    [360, 81, 76] //color theory wise, first could also be 0
  ];
  let service: ColorService;
  beforeEach(() => {
    service = new ColorService();
  })
  it('#hexToHsv should convert black to [0,0,0]', () => {
    expect(service.hexToHsv(htmlInputs[1])).toEqual([0,0,0]);
  })
  it('running #hexToHsv then #hsvToHex should return the original input', () => {

     htmlInputs.forEach((i) => {
       expect(service.hsvToHex(service.hexToHsv(i))).toEqual(i);
     })
  })
  it('#roundArray should round HSVs correctly', () => {
    for (let x = 0; x < hsvInputs.length; x++) {
      expect(service.roundArray(hsvInputs[x])).toEqual(hsvTargets[x]);
    }
  })

})
