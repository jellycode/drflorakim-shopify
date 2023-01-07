import { library, dom, config } from '@fortawesome/fontawesome-svg-core';

import { faQuoteLeft, faQuoteRight } from '@fortawesome/sharp-solid-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-thin-svg-icons';

if (library) {
 library.add(faQuoteLeft, faQuoteRight, faAngleLeft, faAngleRight);
}

export default () => {
 dom.watch();
};
