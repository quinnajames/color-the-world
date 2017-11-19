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
})
