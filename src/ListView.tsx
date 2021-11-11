import { useRef, useEffect } from "react";
import { zoom } from "d3-zoom";
import { select } from 'd3-selection';

interface Props {
  sharePoint: boolean;
  atlas: boolean;
  website: boolean;
  online: boolean;
  all: boolean;
  roles: string[];
}

export const ListView = (props: Props) => {
  const {
    sharePoint,
    atlas,
    website,
    online,
    roles,
    all,
  } = props;
  const SVG = useRef<SVGSVGElement>(null);
  const mapG = useRef<SVGGElement>(null);
  useEffect(() => {
    const mapGSelect = select(mapG.current);
    const mapSvgSelect = select(SVG.current);
    const zoomBehaviour = zoom()
      .scaleExtent([1, 3])
      .translateExtent([[0, 0], [3115, 2033]])
      .on('zoom', ({ transform }) => {
        mapGSelect.attr('transform', transform);
      });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapSvgSelect.call(zoomBehaviour as any);
  }, []);
  return (
    <div style={{width: "calc(100% - 40px)", height: "calc(100vh - 195px)"}}>
      <svg width="100%" height="100%" style={{padding:"50px 20px 20px 20px"}} viewBox="0 0 1557 999" fill="none" xmlns="http://www.w3.org/2000/svg" ref={SVG}>
        <g id="Group 79" ref={mapG}>
          <g id="Online">
            <g id="OnlineAssets">
              <g id="PQAC SharePoint"opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Project Board") !== -1 || roles.indexOf("Programme Officer") !== -1 || roles.indexOf("Quality Assessor") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6" filter="url(#filter0_d_60:2317)">
                  <rect x="395" y="918" width="201" height="66" rx="6" fill="white" />
                  <rect x="395.5" y="918.5" width="200" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Project QA - Closure SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="415" y="942.22">Project QA - Closure&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="415" y="970.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12" cx="395.5" cy="935.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13" cx="395.5" cy="935.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="PCM Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_2" filter="url(#filter1_d_60:2317)">
                  <rect x="623" y="918" width="236" height="66" rx="6" fill="white" />
                  <rect x="623.5" y="918.5" width="235" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Project Closure Manager Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="643" y="942.22">Project Closure Manager&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="643" y="970.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_2" cx="623.5" cy="935.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_2" cx="623.5" cy="935.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="CDR Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_3" filter="url(#filter2_d_60:2317)">
                  <rect x="1154" y="832" width="249" height="66" rx="6" fill="white" />
                  <rect x="1154.5" y="832.5" width="248" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Combined Delivery Report Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1174" y="856.22">Combined Delivery Report&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1174" y="884.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_3" cx="1154.5" cy="849.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_3" cx="1154.5" cy="849.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="OREOI Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_4" filter="url(#filter3_d_60:2317)">
                  <rect x="18" y="918" width="350" height="66" rx="6" fill="white" />
                  <rect x="18.5" y="918.5" width="349" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Output Result for Each Output Indicator Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="38" y="942.22">Output Result for Each Output Indicator&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="38" y="970.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_4" cx="18.5" cy="935.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_4" cx="18.5" cy="935.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="ProjIDOutputID Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_5" filter="url(#filter4_d_60:2317)">
                  <rect x="658" y="660" width="223" height="66" rx="6" fill="white" />
                  <rect x="658.5" y="660.5" width="222" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Project ID &#38; Output IDs Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="678" y="684.22">Project ID &#38; Output IDs&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="678" y="712.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_5" cx="658.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_5" cx="658.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="IBT Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_6" filter="url(#filter5_d_60:2317)">
                  <rect x="908" y="660" width="252" height="66" rx="6" fill="white" />
                  <rect x="908.5" y="660.5" width="251" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Indicators, Baseline, Target Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="928" y="684.22">Indicators, Baseline, Target&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="928" y="712.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_6" cx="908.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_6" cx="908.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="GM Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_7" filter="url(#filter6_d_60:2317)">
                  <rect x="1187" y="660" width="160" height="66" rx="6" fill="white" />
                  <rect x="1187.5" y="660.5" width="159" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Gender Marker Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1207" y="684.22">Gender Marker&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1207" y="712.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_7" cx="1187.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_7" cx="1187.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="Link SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_8" filter="url(#filter7_d_60:2317)">
                  <rect x="15" y="746" width="289" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="746.5" width="288" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Link Output IDs to CPD Outputs SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="770.22">Link Output IDs to CPD Outputs&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="798.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_8" cx="15.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_8" cx="15.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="OutputIDs SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_9" filter="url(#filter8_d_60:2317)">
                  <rect x="331" y="746" width="185" height="66" rx="6" fill="white" />
                  <rect x="331.5" y="746.5" width="184" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Output ID Markers SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="351" y="770.22">Output ID Markers&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="351" y="798.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_9" cx="331.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_9" cx="331.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="PipelineModule Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_10" filter="url(#filter9_d_60:2317)">
                  <rect x="15" y="574" width="168" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="574.5" width="167" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Pipeline Module Atlas ERP">
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="626.22">Atlas ERP</tspan>
                  </text>
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="598.22">Pipeline Module&#10;</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_10" cx="15.5" cy="591.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_10" cx="15.5" cy="591.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="PIP SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_11" filter="url(#filter10_d_60:2317)">
                  <rect x="210" y="574" width="206" height="66" rx="6" fill="white" />
                  <rect x="210.5" y="574.5" width="205" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Project Initiation Plan SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="230" y="598.22">Project Initiation Plan&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="230" y="626.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_11" cx="210.5" cy="591.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_11" cx="210.5" cy="591.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="PPG SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_12" filter="url(#filter11_d_60:2317)">
                  <rect x="443" y="574" width="287" height="66" rx="6" fill="white" />
                  <rect x="443.5" y="574.5" width="286" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Project Preparation Grant (PPG) SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="463" y="598.22">Project Preparation Grant (PPG)&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="463" y="626.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_12" cx="443.5" cy="591.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_12" cx="443.5" cy="591.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="ProjectDoc SharePoint Website" opacity={((sharePoint || website)  || (online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_13" filter="url(#filter12_d_60:2317)">
                  <rect x="757" y="574" width="262" height="66" rx="6" fill="white" />
                  <rect x="757.5" y="574.5" width="261" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Project Document SharePoint &#38; Public website">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="777" y="598.22">Project Document&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="777" y="626.22">SharePoint</tspan>
                  </text>
                  <text fill="#BCBEC0" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="864.047" y="626.22"> &#38; Public website</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_13" cx="757.5" cy="591.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_13" cx="757.5" cy="591.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="JPPD SahrePoint Website" opacity={((sharePoint || website)  || (online && all)) &&  (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_14" filter="url(#filter13_d_60:2317)">
                  <rect x="1046" y="574" width="321" height="66" rx="6" fill="white" />
                  <rect x="1046.5" y="574.5" width="320" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Joint Programme Project Document SharePoint &#38; Public website">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1066" y="598.22">Joint Programme Project Document&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1066" y="626.22">SharePoint</tspan>
                  </text>
                  <text fill="#BCBEC0" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1153.05" y="626.22"> &#38; Public website</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_14" cx="1046.5" cy="591.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_14" cx="1046.5" cy="591.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="ProjectQA SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1  || roles.indexOf("Quality Assessor") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_15" filter="url(#filter14_d_60:2317)">
                  <rect x="15" y="660" width="185" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="660.5" width="184" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Project QA Design SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="684.22">Project QA Design&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="712.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_15" cx="15.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_15" cx="15.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="HACT SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_16" filter="url(#filter15_d_60:2317)">
                  <rect x="227" y="660" width="235" height="66" rx="6" fill="white" />
                  <rect x="227.5" y="660.5" width="234" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="HACT Micro Assessment SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="247" y="684.22">HACT Micro Assessment&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="247" y="712.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_16" cx="227.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_16" cx="227.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="RiskRegister Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_17" filter="url(#filter16_d_60:2317)">
                  <rect x="489" y="660" width="142" height="66" rx="6" fill="white" />
                  <rect x="489.5" y="660.5" width="141" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Risk Register Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="509" y="684.22">Risk Register&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="509" y="712.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_17" cx="489.5" cy="677.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_17" cx="489.5" cy="677.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="Prompt SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_18" filter="url(#filter17_d_60:2317)">
                  <rect x="543" y="746" width="128" height="66" rx="6" fill="white" />
                  <rect x="543.5" y="746.5" width="127" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Prompt SharePoint_2">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="563" y="770.22">Prompt&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="563" y="798.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_18" cx="543.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_18" cx="543.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="MMB Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_19" filter="url(#filter18_d_60:2317)">
                  <rect x="698" y="746" width="254" height="66" rx="6" fill="white" />
                  <rect x="698.5" y="746.5" width="253" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Managing MYWP &#38; Budget Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="718" y="770.22">Managing MYWP &#38; Budget&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="718" y="798.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_19" cx="698.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_19" cx="698.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="HACT SharePoint_2" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_20" filter="url(#filter19_d_60:2317)">
                  <rect x="979" y="746" width="250" height="66" rx="6" fill="white" />
                  <rect x="979.5" y="746.5" width="249" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="HACT Assurance Activities SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="999" y="770.22">HACT Assurance Activities&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="999" y="798.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_20" cx="979.5" cy="763.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_20" cx="979.5" cy="763.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="MTFPE SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_21" filter="url(#filter20_d_60:2317)">
                  <rect x="15" y="832" width="303" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="832.5" width="302" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Mid-Term/Final Project Evaluation SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="856.22">Mid-Term/Final Project Evaluation&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="884.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_21" cx="15.5" cy="849.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_21" cx="15.5" cy="849.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="MYWP Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_22" filter="url(#filter21_d_60:2317)">
                  <rect x="345" y="832" width="164" height="66" rx="6" fill="white" />
                  <rect x="345.5" y="832.5" width="163" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="MYWP Revision Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="365" y="856.22">MYWP Revision&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="365" y="884.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_22" cx="345.5" cy="849.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_22" cx="345.5" cy="849.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="UREI Atlas" opacity={(atlas || (online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1 || roles.indexOf("M&E Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_23" filter="url(#filter22_d_60:2317)">
                  <rect x="536" y="832" width="302" height="66" rx="6" fill="white" />
                  <rect x="536.5" y="832.5" width="301" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Update Results for Each Indicator Atlas ERP">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="556" y="856.22">Update Results for Each Indicator&#10;</tspan>
                  </text>
                  <text fill="#014B7A" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="556" y="884.22">Atlas ERP</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_23" cx="536.5" cy="849.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_23" cx="536.5" cy="849.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
              <g id="PQAI SharePoint" opacity={(sharePoint || (online && all)) && (roles.length === 0 || roles.indexOf("Quality Assessor") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_24" filter="url(#filter23_d_60:2317)">
                  <rect x="865" y="832" width="262" height="66" rx="6" fill="white" />
                  <rect x="865.5" y="832.5" width="261" height="65" rx="5.5" stroke="#0F8B79" />
                </g>
                <g id="Project QA - Implementation SharePoint">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="885" y="856.22">Project QA - Implementation&#10;</tspan>
                  </text>
                  <text fill="#028085" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="885" y="884.22">SharePoint</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_24" cx="865.5" cy="849.5" r="7" fill="white" stroke="#0F8B79" />
                <circle id="Ellipse 13_24" cx="865.5" cy="849.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
              </g>
            </g>
            <text id="Online Assets (24 out of 48)" fill="#0F8B79" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="32" font-weight="bold" letterSpacing="0em">
              <tspan x="8" y="552.28">Online Assets (24 out of 48)</tspan>
            </text>
          </g>
          <g id="Offline">
            <text id="Offline Assets (24 out of 48)" fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="32" font-weight="bold" letterSpacing="0em">
              <tspan x="8" y="25.28">Offline Assets (24 out of 48)</tspan>
            </text>
            <g id="OfflineAssets">
              <g id="FPR Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_25" filter="url(#filter24_d_60:2317)">
                  <rect x="856" y="391" width="195" height="66" rx="6" fill="white" />
                  <rect x="856.5" y="391.5" width="194" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Final Project Report Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="876" y="415.22">Final Project Report&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="876" y="443.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_25" cx="856.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_25" cx="856.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="FACE Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_26" filter="url(#filter25_d_60:2317)">
                  <rect x="391" y="391" width="129" height="66" rx="6" fill="white" />
                  <rect x="391.5" y="391.5" width="128" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="FACE Form Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="411" y="415.22">FACE Form&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="411" y="443.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_26" cx="391.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_26" cx="391.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="DPPR Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_27" filter="url(#filter26_d_60:2317)">
                  <rect x="547" y="391" width="282" height="66" rx="6" fill="white" />
                  <rect x="547.5" y="391.5" width="281" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Donor/Project Progress Report Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="567" y="415.22">Donor/Project Progress Report&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="567" y="443.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_27" cx="547.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_27" cx="547.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="MPBRM Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_28" filter="url(#filter27_d_60:2317)">
                  <rect x="15" y="391" width="349" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="391.5" width="348" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Minutes Project Board Regular Meeting Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="415.22">Minutes Project Board Regular Meeting&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="443.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_28" cx="15.5" cy="408.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_28" cx="15.5" cy="408.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="LPAC Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_29" filter="url(#filter28_d_60:2317)">
                  <rect x="227" y="219" width="149" height="66" rx="6" fill="white" />
                  <rect x="227.5" y="219.5" width="148" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="LPAC Minutes Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="247" y="243.22">LPAC Minutes&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="247" y="271.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_29" cx="227.5" cy="236.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_29" cx="227.5" cy="236.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="PSDDD Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_30" filter="url(#filter29_d_60:2317)">
                  <rect x="15" y="47" width="319" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="47.5" width="318" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Private Sector Donors Due Diligence Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="71.22">Private Sector Donors Due Diligence&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="99.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_30" cx="15.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_30" cx="15.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="WorkshopReport Offline" opacity={(all || !online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_31" filter="url(#filter30_d_60:2317)">
                  <rect x="361" y="47" width="173" height="66" rx="6" fill="white" />
                  <rect x="361.5" y="47.5" width="172" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Workshop report Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="381" y="71.22">Workshop report&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="381" y="99.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_31" cx="361.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_31" cx="361.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="SurveyData Offline" opacity={(all || !online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_32" filter="url(#filter31_d_60:2317)">
                  <rect x="561" y="47" width="136" height="66" rx="6" fill="white" />
                  <rect x="561.5" y="47.5" width="135" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Survey Data Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="581" y="71.22">Survey Data&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="581" y="99.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_32" cx="561.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_32" cx="561.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="GD Offline" opacity={(all || !online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_33" filter="url(#filter32_d_60:2317)">
                  <rect x="724" y="47" width="188" height="66" rx="6" fill="white" />
                  <rect x="724.5" y="47.5" width="187" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Group Discussions Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="744" y="71.22">Group Discussions&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="744" y="99.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_33" cx="724.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_33" cx="724.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="StakeholderMeetingReport Offline" opacity={(all || !online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_34" filter="url(#filter33_d_60:2317)">
                  <rect x="939" y="47" width="270" height="66" rx="6" fill="white" />
                  <rect x="939.5" y="47.5" width="269" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Stakeholder Meeting Reports Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="959" y="71.22">Stakeholder Meeting Reports&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="959" y="99.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_34" cx="939.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_34" cx="939.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="BOTR Offline" opacity={(all || !online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_35" filter="url(#filter34_d_60:2317)">
                  <rect x="1236" y="47" width="306" height="66" rx="6" fill="white" />
                  <rect x="1236.5" y="47.5" width="305" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Back to the Office Reports (BOTR) Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1256" y="71.22">Back to the Office Reports (BOTR)&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1256" y="99.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_35" cx="1236.5" cy="64.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_35" cx="1236.5" cy="64.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="FR Offline" opacity={(all || !online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_36" filter="url(#filter35_d_60:2317)">
                  <rect x="15" y="133" width="184" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="133.5" width="183" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Feasibility Reports Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="157.22">Feasibility Reports&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="185.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_36" cx="15.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_36" cx="15.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="GA Offline" opacity={(all || !online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_37" filter="url(#filter36_d_60:2317)">
                  <rect x="226" y="133" width="191" height="66" rx="6" fill="white" />
                  <rect x="226.5" y="133.5" width="190" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Gender Assesment Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="246" y="157.22">Gender Assesment&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="246" y="185.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_37" cx="226.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_37" cx="226.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="SESP Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_38" filter="url(#filter37_d_60:2317)">
                  <rect x="444" y="133" width="411" height="66" rx="6" fill="white" />
                  <rect x="444.5" y="133.5" width="410" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Social and Environmental Screening Procedure Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="464" y="157.22">Social and Environmental Screening Procedure&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="464" y="185.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_38" cx="444.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_38" cx="444.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="PCAT Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_39" filter="url(#filter38_d_60:2317)">
                  <rect x="882" y="133" width="365" height="66" rx="6" fill="white" />
                  <rect x="882.5" y="133.5" width="364" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Partner Capacity Assessment Tool (PCAT) Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="902" y="157.22">Partner Capacity Assessment Tool (PCAT)&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="902" y="185.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_39" cx="882.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_39" cx="882.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="LoA Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_40" filter="url(#filter39_d_60:2317)">
                  <rect x="1274" y="133" width="200" height="66" rx="6" fill="white" />
                  <rect x="1274.5" y="133.5" width="199" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="LoA or RPA with RPs Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1294" y="157.22">LoA or RPA with RPs&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1294" y="185.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_40" cx="1274.5" cy="150.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_40" cx="1274.5" cy="150.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="GA Offline_2" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_41" filter="url(#filter40_d_60:2317)">
                  <rect x="15" y="219" width="185" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="219.5" width="184" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Grant Agreements Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="243.22">Grant Agreements&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="271.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_41" cx="15.5" cy="236.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_41" cx="15.5" cy="236.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="MinProjBoard Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_42" filter="url(#filter41_d_60:2317)">
                  <rect x="403" y="219" width="282" height="66" rx="6" fill="white" />
                  <rect x="403.5" y="219.5" width="281" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Minutes Project Board Kick-Off Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="423" y="243.22">Minutes Project Board Kick-Off&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="423" y="271.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_42" cx="403.5" cy="236.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_42" cx="403.5" cy="236.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="AWP Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_43" filter="url(#filter42_d_60:2317)">
                  <rect x="712" y="219" width="243" height="66" rx="6" fill="white" />
                  <rect x="712.5" y="219.5" width="242" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="AWP/Multi-Year Work Plan Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="732" y="243.22">AWP/Multi-Year Work Plan&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="732" y="271.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_43" cx="712.5" cy="236.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_43" cx="712.5" cy="236.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="HR Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_44" filter="url(#filter43_d_60:2317)">
                  <rect x="982" y="219" width="202" height="66" rx="6" fill="white" />
                  <rect x="982.5" y="219.5" width="201" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="HR Recriutment Plan Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1002" y="243.22">HR Recriutment Plan&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1002" y="271.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_44" cx="982.5" cy="236.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_44" cx="982.5" cy="236.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="BTORFV Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_45" filter="url(#filter44_d_60:2317)">
                  <rect x="15" y="305" width="338" height="66" rx="6" fill="white" />
                  <rect x="15.5" y="305.5" width="337" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="BTOR Field Visit by Project Assurance Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="35" y="329.22">BTOR Field Visit by Project Assurance&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="35" y="357.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_45" cx="15.5" cy="322.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_45" cx="15.5" cy="322.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="PBRM Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_46" filter="url(#filter45_d_60:2317)">
                  <rect x="380" y="305" width="353" height="66" rx="6" fill="white" />
                  <rect x="380.5" y="305.5" width="352" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Minutes: Project Board to Revise MYWP Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="400" y="329.22">Minutes: Project Board to Revise MYWP&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="400" y="357.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_46" cx="380.5" cy="322.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_46" cx="380.5" cy="322.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="LLR Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_47" filter="url(#filter46_d_60:2317)">
                  <rect x="1096" y="305" width="244" height="66" rx="6" fill="white" />
                  <rect x="1096.5" y="305.5" width="243" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Lessons Learned in ROAR Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="1116" y="329.22">Lessons Learned in ROAR&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="1116" y="357.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_47" cx="1096.5" cy="322.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_47" cx="1096.5" cy="322.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
              <g id="LLPR Offline" opacity={(all || !online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_48" filter="url(#filter47_d_60:2317)">
                  <rect x="760" y="305" width="309" height="66" rx="6" fill="white" />
                  <rect x="760.5" y="305.5" width="308" height="65" rx="5.5" stroke="#D52B1E" />
                </g>
                <g id="Lessons Learned in Project Report Offline">
                  <text fill="black" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                    <tspan x="780" y="329.22">Lessons Learned in Project Report&#10;</tspan>
                  </text>
                  <text fill="#D52B1E" xmlSpace="preserve" style={{whiteSpace:"pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                    <tspan x="780" y="357.22">Offline</tspan>
                  </text>
                </g>
                <circle id="Ellipse 12_48" cx="760.5" cy="322.5" r="7" fill="white" stroke="#D52B1E" />
                <circle id="Ellipse 13_48" cx="760.5" cy="322.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_60:2317" x="380" y="903" width="231" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter1_d_60:2317" x="608" y="903" width="266" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter2_d_60:2317" x="1139" y="817" width="279" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter3_d_60:2317" x="3" y="903" width="380" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter4_d_60:2317" x="643" y="645" width="253" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter5_d_60:2317" x="893" y="645" width="282" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter6_d_60:2317" x="1172" y="645" width="190" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter7_d_60:2317" x="0" y="731" width="319" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter8_d_60:2317" x="316" y="731" width="215" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter9_d_60:2317" x="0" y="559" width="198" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter10_d_60:2317" x="195" y="559" width="236" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter11_d_60:2317" x="428" y="559" width="317" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter12_d_60:2317" x="742" y="559" width="292" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter13_d_60:2317" x="1031" y="559" width="351" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter14_d_60:2317" x="0" y="645" width="215" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter15_d_60:2317" x="212" y="645" width="265" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter16_d_60:2317" x="474" y="645" width="172" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter17_d_60:2317" x="528" y="731" width="158" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter18_d_60:2317" x="683" y="731" width="284" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter19_d_60:2317" x="964" y="731" width="280" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter20_d_60:2317" x="0" y="817" width="333" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter21_d_60:2317" x="330" y="817" width="194" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter22_d_60:2317" x="521" y="817" width="332" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter23_d_60:2317" x="850" y="817" width="292" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter24_d_60:2317" x="841" y="376" width="225" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter25_d_60:2317" x="376" y="376" width="159" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter26_d_60:2317" x="532" y="376" width="312" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter27_d_60:2317" x="0" y="376" width="379" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter28_d_60:2317" x="212" y="204" width="179" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter29_d_60:2317" x="0" y="32" width="349" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter30_d_60:2317" x="346" y="32" width="203" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter31_d_60:2317" x="546" y="32" width="166" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter32_d_60:2317" x="709" y="32" width="218" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter33_d_60:2317" x="924" y="32" width="300" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter34_d_60:2317" x="1221" y="32" width="336" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter35_d_60:2317" x="0" y="118" width="214" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter36_d_60:2317" x="211" y="118" width="221" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter37_d_60:2317" x="429" y="118" width="441" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter38_d_60:2317" x="867" y="118" width="395" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter39_d_60:2317" x="1259" y="118" width="230" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter40_d_60:2317" x="0" y="204" width="215" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter41_d_60:2317" x="388" y="204" width="312" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter42_d_60:2317" x="697" y="204" width="273" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter43_d_60:2317" x="967" y="204" width="232" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter44_d_60:2317" x="0" y="290" width="368" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter45_d_60:2317" x="365" y="290" width="383" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter46_d_60:2317" x="1081" y="290" width="274" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
          <filter id="filter47_d_60:2317" x="745" y="290" width="339" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60:2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60:2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60:2317" result="shape" />
          </filter>
        </defs>
      </svg>
  </div>
)}