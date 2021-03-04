import { receiveStr } from './convertData.js';
import { strToHexArr, renderReception} from './renderReception.js';
import { setTranslationEvt } from './hexTranslate.js';
import setSendingMsgEvt from './sendData.js';

// 파라미터 = 지구에서 화성에 송신할 문자열
receiveStr('Mark')
    .then(str => strToHexArr(str))
    .then(renderReception)

setTranslationEvt();
setSendingMsgEvt();