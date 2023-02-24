# ipp5-html-content

~~~~~ sh
npm install e53e04ac/ipp5-html-content
~~~~~

~~~~~ mjs
import { Ipp5HtmlContent } from 'e53e04ac/ipp5-html-content';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["event-emitter"]);
    B_1(["hold"]);
    B_2(["jsdom"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/jsdom"]);
    B_4(["@types/node"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/event-emitter\n98fd492f5a6e31cd646d4b79e70035061165871f"]);
    C_1(["e53e04ac/hold\n6845a848f97733b8cd8a34bfc03c3bf040818aa8"]);
  end;
  subgraph "npmjs";
    C_2(["jsdom\n21.1.0"]);
    C_3(["@types/jsdom\n21.1.0"]);
    C_4(["@types/node\n18.14.1"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  click C_0 "https://github.com/e53e04ac/event-emitter/tree/98fd492f5a6e31cd646d4b79e70035061165871f";
  click C_1 "https://github.com/e53e04ac/hold/tree/6845a848f97733b8cd8a34bfc03c3bf040818aa8";
  click C_2 "https://www.npmjs.com/package/jsdom/v/21.1.0";
  click C_3 "https://www.npmjs.com/package/@types/jsdom/v/21.1.0";
  click C_4 "https://www.npmjs.com/package/@types/node/v/18.14.1";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-html-content";
    E_0(["Ipp5HtmlContent"]);
  end;
  M["index.mjs"]
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
  M["index.d.ts"]
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
