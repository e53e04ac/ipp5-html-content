# ipp5-html-content

~~~~~ sh
npm install e53e04ac/ipp5-html-content
~~~~~

~~~~~ mjs
import { Ipp5HtmlContent } from 'e53e04ac/ipp5-html-content';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["e53e04ac/hold"]);
    B_2(["jsdom"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/jsdom"]);
    B_4(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/19614365368936f6974a633d25a1109a3465a99d";
  click B_1 "https://github.com/e53e04ac/hold/tree/3191dd4704f3e5f90d6c27f288ede7700f5fdb66";
  click B_2 "https://www.npmjs.com/package/jsdom/v/21.1.0";
  click B_3 "https://www.npmjs.com/package/@types/jsdom/v/21.1.0";
  click B_4 "https://www.npmjs.com/package/@types/node/v/18.14.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-html-content";
    E_0(["Ipp5HtmlContent"]);
  end;
  M(["index.mjs"])
  subgraph "jsdom";
    I_0_0(["JSDOM"]);
    I_0_1(["VirtualConsole"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["hold"]);
    I_2_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-html-content";
    E_0(["namespace Ipp5HtmlContent"]);
    E_1(["type Ipp5HtmlContent"]);
    E_2(["const Ipp5HtmlContent"]);
  end;
  M(["index.d.ts"])
  subgraph "jsdom";
    I_0_0(["DOMWindow"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~