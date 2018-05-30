import Rossya from "./Rossya.png";
import iFly from "./iFly.png";
import Nordwind from "./Nordwind.png";
import NordwindCharter from "./Nordwind-charter.png";
import RedWings from "./RedWings.png";
import RedWingsSmall from "./RedWings_small.png";
import RossyaSmall from "./Rossya_small.png";
import Unknown from "./Unknown.png";

const Logotypes = {
  Rossya: { fullSize: Rossya, small: RossyaSmall },
  iFly: { fullSize: iFly, small: null },
  Nordwind: { fullSize: Nordwind, small: null },
  NordwindCharter: { fullSize: NordwindCharter, small: null },
  "Red Wings": { fullSize: RedWings, small: RedWingsSmall },
  Unknown: { fullSize: null, small: Unknown }
};

export default Logotypes;
