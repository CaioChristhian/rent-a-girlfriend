import HeightSvg from '../assets/ruler.svg';
import HairSvg from '../assets/hair-cut.svg';
import WaistSvg from '../assets/waist.svg';
import EyesColorsSvg from '../assets/eyes.svg';
import BustSvg from '../assets/brassiere.svg';
import PeachSvg from '../assets/peach.svg';
import FlowerSvg from '../assets/lotus.svg';

export function getDetailsIcon(type: string) {
  switch (type) {
    case 'height':
      return HeightSvg;
    case 'hair':
      return HairSvg;
    case 'waist':
      return WaistSvg;
    case 'eyes':
      return EyesColorsSvg;
    case 'bust':
      return BustSvg;
    case 'butt':
      return PeachSvg;
  default:
    return FlowerSvg;
  }
}