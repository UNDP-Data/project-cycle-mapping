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
      <svg width="100%" height="100%" style={{padding:"50px 20px 20px 20px"}} viewBox="0 0 1567 749" fill="none" xmlns="http://www.w3.org/2000/svg" ref={SVG}>
        <g id="Group 79" ref={mapG}>
          <g id="Online">
            <g id="OnlineAssets">
              <g id="PQAC SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Board") !== -1 || roles.indexOf("Programme Officer") !== -1 || roles.indexOf("Quality Assessor") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6" filter="url(#filter0_d_60_2317)">
                  <rect x="1286" y="630" width="201" height="42" rx="6" fill="white" />
                  <rect x="1286.5" y="630.5" width="200" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Project QA - Closure" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1306" y="656.22">Project QA - Closure</tspan>
                </text>
                <circle id="Ellipse 12" cx="1286.5" cy="647.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13" cx="1286.5" cy="647.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="PCM Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_2" filter="url(#filter1_d_60_2317)">
                  <rect x="15" y="692" width="236" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="692.5" width="235" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Project Closure Manager" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="718.22">Project Closure Manager</tspan>
                </text>
                <circle id="Ellipse 12_2" cx="15.5" cy="709.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_2" cx="15.5" cy="709.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="CDR Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_3" filter="url(#filter2_d_60_2317)">
                  <rect x="633" y="630" width="249" height="42" rx="6" fill="white" />
                  <rect x="633.5" y="630.5" width="248" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Combined Delivery Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="653" y="656.22">Combined Delivery Report</tspan>
                </text>
                <circle id="Ellipse 12_3" cx="633.5" cy="647.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_3" cx="633.5" cy="647.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="OREOI Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_4" filter="url(#filter3_d_60_2317)">
                  <rect x="909" y="630" width="350" height="42" rx="6" fill="white" />
                  <rect x="909.5" y="630.5" width="349" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Output Result for Each Output Indicator" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="929" y="656.22">Output Result for Each Output Indicator</tspan>
                </text>
                <circle id="Ellipse 12_4" cx="909.5" cy="647.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_4" cx="909.5" cy="647.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="ProjIDOutputID Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_5" filter="url(#filter4_d_60_2317)">
                  <rect x="446" y="506" width="223" height="42" rx="6" fill="white" />
                  <rect x="446.5" y="506.5" width="222" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Project ID &#38; Output IDs" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="466" y="532.22">Project ID &#38; Output IDs</tspan>
                </text>
                <circle id="Ellipse 12_5" cx="446.5" cy="523.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_5" cx="446.5" cy="523.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="IBT Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_6" filter="url(#filter5_d_60_2317)">
                  <rect x="696" y="506" width="252" height="42" rx="6" fill="white" />
                  <rect x="696.5" y="506.5" width="251" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Indicators, Baseline, Target" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="716" y="532.22">Indicators, Baseline, Target</tspan>
                </text>
                <circle id="Ellipse 12_6" cx="696.5" cy="523.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_6" cx="696.5" cy="523.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="GM Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_7" filter="url(#filter6_d_60_2317)">
                  <rect x="975" y="506" width="160" height="42" rx="6" fill="white" />
                  <rect x="975.5" y="506.5" width="159" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Gender Marker" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="995" y="532.22">Gender Marker</tspan>
                </text>
                <circle id="Ellipse 12_7" cx="975.5" cy="523.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_7" cx="975.5" cy="523.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="Link SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_8" filter="url(#filter7_d_60_2317)">
                  <rect x="1162" y="506" width="289" height="42" rx="6" fill="white" />
                  <rect x="1162.5" y="506.5" width="288" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Link Output IDs to CPD Outputs" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1182" y="532.22">Link Output IDs to CPD Outputs</tspan>
                </text>
                <circle id="Ellipse 12_8" cx="1162.5" cy="523.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_8" cx="1162.5" cy="523.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="OutputIDs SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_9" filter="url(#filter8_d_60_2317)">
                  <rect x="15" y="568" width="185" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="568.5" width="184" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Output ID Markers" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="594.22">Output ID Markers</tspan>
                </text>
                <circle id="Ellipse 12_9" cx="15.5" cy="585.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_9" cx="15.5" cy="585.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="PipelineModule Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_10" filter="url(#filter9_d_60_2317)">
                  <rect x="15" y="444" width="168" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="444.5" width="167" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Pipeline Module" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="470.22">Pipeline Module</tspan>
                </text>
                <circle id="Ellipse 12_10" cx="15.5" cy="461.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_10" cx="15.5" cy="461.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="PIP SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_11" filter="url(#filter10_d_60_2317)">
                  <rect x="210" y="444" width="206" height="42" rx="6" fill="white" />
                  <rect x="210.5" y="444.5" width="205" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Project Initiation Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="230" y="470.22">Project Initiation Plan</tspan>
                </text>
                <circle id="Ellipse 12_11" cx="210.5" cy="461.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_11" cx="210.5" cy="461.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="PPG SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_12" filter="url(#filter11_d_60_2317)">
                  <rect x="443" y="444" width="287" height="42" rx="6" fill="white" />
                  <rect x="443.5" y="444.5" width="286" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Project Preparation Grant (PPG)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="463" y="470.22">Project Preparation Grant (PPG)</tspan>
                </text>
                <circle id="Ellipse 12_12" cx="443.5" cy="461.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_12" cx="443.5" cy="461.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="ProjectDoc SharePoint Website" opacity={((sharePoint || website)  || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_13" filter="url(#filter12_d_60_2317)">
                  <rect x="757" y="444" width="182" height="42" rx="6" fill="white" />
                  <rect x="757.5" y="444.5" width="181" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Project Document" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="777" y="470.22">Project Document</tspan>
                </text>
                <circle id="Ellipse 12_13" cx="757.5" cy="461.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_13" cx="757.5" cy="461.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="JPPD SahrePoint Website" opacity={((sharePoint || website)  || (!online && all)) &&  (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_14" filter="url(#filter13_d_60_2317)">
                  <rect x="966" y="444" width="321" height="42" rx="6" fill="white" />
                  <rect x="966.5" y="444.5" width="320" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Joint Programme Project Document" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="986" y="470.22">Joint Programme Project Document</tspan>
                </text>
                <circle id="Ellipse 12_14" cx="966.5" cy="461.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_14" cx="966.5" cy="461.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="ProjectQA SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1  || roles.indexOf("Quality Assessor") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_15" filter="url(#filter14_d_60_2317)">
                  <rect x="1314" y="444" width="185" height="42" rx="6" fill="white" />
                  <rect x="1314.5" y="444.5" width="184" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Project QA Design" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1334" y="470.22">Project QA Design</tspan>
                </text>
                <circle id="Ellipse 12_15" cx="1314.5" cy="461.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_15" cx="1314.5" cy="461.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="HACT SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_16" filter="url(#filter15_d_60_2317)">
                  <rect x="15" y="506" width="235" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="506.5" width="234" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="HACT Micro Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="532.22">HACT Micro Assessment</tspan>
                </text>
                <circle id="Ellipse 12_16" cx="15.5" cy="523.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_16" cx="15.5" cy="523.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="RiskRegister Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_17" filter="url(#filter16_d_60_2317)">
                  <rect x="277" y="506" width="142" height="42" rx="6" fill="white" />
                  <rect x="277.5" y="506.5" width="141" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Risk Register" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="297" y="532.22">Risk Register</tspan>
                </text>
                <circle id="Ellipse 12_17" cx="277.5" cy="523.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_17" cx="277.5" cy="523.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="Prompt SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_18" filter="url(#filter17_d_60_2317)">
                  <rect x="227" y="568" width="97" height="42" rx="6" fill="white" />
                  <rect x="227.5" y="568.5" width="96" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Prompt" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="247" y="594.22">Prompt</tspan>
                </text>
                <circle id="Ellipse 12_18" cx="227.5" cy="585.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_18" cx="227.5" cy="585.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="MMB Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_19" filter="url(#filter18_d_60_2317)">
                  <rect x="351" y="568" width="254" height="42" rx="6" fill="white" />
                  <rect x="351.5" y="568.5" width="253" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Managing MYWP &#38; Budget" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="371" y="594.22">Managing MYWP &#38; Budget</tspan>
                </text>
                <circle id="Ellipse 12_19" cx="351.5" cy="585.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_19" cx="351.5" cy="585.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="HACT SharePoint_2" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_20" filter="url(#filter19_d_60_2317)">
                  <rect x="632" y="568" width="250" height="42" rx="6" fill="white" />
                  <rect x="632.5" y="568.5" width="249" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="HACT Assurance Activities" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="652" y="594.22">HACT Assurance Activities</tspan>
                </text>
                <circle id="Ellipse 12_20" cx="632.5" cy="585.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_20" cx="632.5" cy="585.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="MTFPE SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_21" filter="url(#filter20_d_60_2317)">
                  <rect x="909" y="568" width="303" height="42" rx="6" fill="white" />
                  <rect x="909.5" y="568.5" width="302" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Mid-Term/Final Project Evaluation" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="929" y="594.22">Mid-Term/Final Project Evaluation</tspan>
                </text>
                <circle id="Ellipse 12_21" cx="909.5" cy="585.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_21" cx="909.5" cy="585.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="MYWP Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_22" filter="url(#filter21_d_60_2317)">
                  <rect x="1239" y="568" width="164" height="42" rx="6" fill="white" />
                  <rect x="1239.5" y="568.5" width="163" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="MYWP Revision" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1259" y="594.22">MYWP Revision</tspan>
                </text>
                <circle id="Ellipse 12_22" cx="1239.5" cy="585.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_22" cx="1239.5" cy="585.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="UREI Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1 || roles.indexOf("M&E Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_23" filter="url(#filter22_d_60_2317)">
                  <rect x="15" y="630" width="302" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="630.5" width="301" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Update Results for Each Indicator" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="656.22">Update Results for Each Indicator</tspan>
                </text>
                <circle id="Ellipse 12_23" cx="15.5" cy="647.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_23" cx="15.5" cy="647.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
              <g id="PQAI SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Quality Assessor") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_24" filter="url(#filter23_d_60_2317)">
                  <rect x="344" y="630" width="262" height="42" rx="6" fill="white" />
                  <rect x="344.5" y="630.5" width="261" height="41" rx="5.5" stroke="#067F80" />
                </g>
                <text id="Project QA - Implementation" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="364" y="656.22">Project QA - Implementation</tspan>
                </text>
                <circle id="Ellipse 12_24" cx="344.5" cy="647.5" r="7" fill="white" stroke="#067F80" />
                <circle id="Ellipse 13_24" cx="344.5" cy="647.5" r="4" fill="#067F80" stroke="#067F80" />
              </g>
            </g>
            <text id="Assets Available Organization Wide (24 out of 48)" fill="#067F80" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="8" y="417.28">Assets Available Organization Wide (24 out of 48)</tspan>
            </text>
          </g>
          <g id="Offline">
            <text id="Assets Not Available Organization Wide (24 out of 48)" fill="#CC3E27" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="8" y="25.28">Assets Not Available Organization Wide (24 out of 48)</tspan>
            </text>
            <g id="OfflineAssets">
              <g id="FPR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_25" filter="url(#filter24_d_60_2317)">
                  <rect x="480" y="300" width="195" height="42" rx="6" fill="white" />
                  <rect x="480.5" y="300.5" width="194" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Final Project Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="500" y="326.22">Final Project Report</tspan>
                </text>
                <circle id="Ellipse 12_25" cx="480.5" cy="317.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_25" cx="480.5" cy="317.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="FACE Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_26" filter="url(#filter25_d_60_2317)">
                  <rect x="15" y="300" width="129" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="300.5" width="128" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="FACE Form" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="326.22">FACE Form</tspan>
                </text>
                <circle id="Ellipse 12_26" cx="15.5" cy="317.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_26" cx="15.5" cy="317.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="DPPR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_27" filter="url(#filter26_d_60_2317)">
                  <rect x="171" y="300" width="282" height="42" rx="6" fill="white" />
                  <rect x="171.5" y="300.5" width="281" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Donor/Project Progress Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="191" y="326.22">Donor/Project Progress Report</tspan>
                </text>
                <circle id="Ellipse 12_27" cx="171.5" cy="317.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_27" cx="171.5" cy="317.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="MPBRM Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_28" filter="url(#filter27_d_60_2317)">
                  <rect x="1002" y="238" width="349" height="42" rx="6" fill="white" />
                  <rect x="1002.5" y="238.5" width="348" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Minutes Project Board Regular Meeting" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1022" y="264.22">Minutes Project Board Regular Meeting</tspan>
                </text>
                <circle id="Ellipse 12_28" cx="1002.5" cy="255.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_28" cx="1002.5" cy="255.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="LPAC Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_29" filter="url(#filter28_d_60_2317)">
                  <rect x="227" y="176" width="149" height="42" rx="6" fill="white" />
                  <rect x="227.5" y="176.5" width="148" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="LPAC Minutes" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="247" y="202.22">LPAC Minutes</tspan>
                </text>
                <circle id="Ellipse 12_29" cx="227.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_29" cx="227.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="PSDDD Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1)  ? 1 : 0.25}>
                <g id="Rectangle 6_30" filter="url(#filter29_d_60_2317)">
                  <rect x="15" y="52" width="329" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="52.5" width="328" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Private Sector Donors Due Diligence" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="78.22">Private Sector Donors Due Diligence</tspan>
                </text>
                <circle id="Ellipse 12_30" cx="15.5" cy="69.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_30" cx="15.5" cy="69.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="WorkshopReport Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_31" filter="url(#filter30_d_60_2317)">
                  <rect x="371" y="52" width="173" height="42" rx="6" fill="white" />
                  <rect x="371.5" y="52.5" width="172" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Workshop report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="391" y="78.22">Workshop report</tspan>
                </text>
                <circle id="Ellipse 12_31" cx="371.5" cy="69.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_31" cx="371.5" cy="69.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="SurveyData Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_32" filter="url(#filter31_d_60_2317)">
                  <rect x="571" y="52" width="136" height="42" rx="6" fill="white" />
                  <rect x="571.5" y="52.5" width="135" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Survey Data" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="591" y="78.22">Survey Data</tspan>
                </text>
                <circle id="Ellipse 12_32" cx="571.5" cy="69.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_32" cx="571.5" cy="69.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="GD Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_33" filter="url(#filter32_d_60_2317)">
                  <rect x="734" y="52" width="188" height="42" rx="6" fill="white" />
                  <rect x="734.5" y="52.5" width="187" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Group Discussions" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="754" y="78.22">Group Discussions</tspan>
                </text>
                <circle id="Ellipse 12_33" cx="734.5" cy="69.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_33" cx="734.5" cy="69.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="StakeholderMeetingReport Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_34" filter="url(#filter33_d_60_2317)">
                  <rect x="949" y="52" width="270" height="42" rx="6" fill="white" />
                  <rect x="949.5" y="52.5" width="269" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Stakeholder Meeting Reports" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="969" y="78.22">Stakeholder Meeting Reports</tspan>
                </text>
                <circle id="Ellipse 12_34" cx="949.5" cy="69.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_34" cx="949.5" cy="69.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="BOTR Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_35" filter="url(#filter34_d_60_2317)">
                  <rect x="1246" y="52" width="306" height="42" rx="6" fill="white" />
                  <rect x="1246.5" y="52.5" width="305" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Back to the Office Reports (BOTR)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1266" y="78.22">Back to the Office Reports (BOTR)</tspan>
                </text>
                <circle id="Ellipse 12_35" cx="1246.5" cy="69.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_35" cx="1246.5" cy="69.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="FR Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_36" filter="url(#filter35_d_60_2317)">
                  <rect x="15" y="114" width="184" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="114.5" width="183" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Feasibility Reports" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="140.22">Feasibility Reports</tspan>
                </text>
                <circle id="Ellipse 12_36" cx="15.5" cy="131.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_36" cx="15.5" cy="131.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="GA Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
                <g id="Rectangle 6_37" filter="url(#filter36_d_60_2317)">
                  <rect x="226" y="114" width="191" height="42" rx="6" fill="white" />
                  <rect x="226.5" y="114.5" width="190" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Gender Assesment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="246" y="140.22">Gender Assesment</tspan>
                </text>
                <circle id="Ellipse 12_37" cx="226.5" cy="131.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_37" cx="226.5" cy="131.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="SESP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_38" filter="url(#filter37_d_60_2317)">
                  <rect x="444" y="114" width="411" height="42" rx="6" fill="white" />
                  <rect x="444.5" y="114.5" width="410" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Social and Environmental Screening Procedure" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="464" y="140.22">Social and Environmental Screening Procedure</tspan>
                </text>
                <circle id="Ellipse 12_38" cx="444.5" cy="131.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_38" cx="444.5" cy="131.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="PCAT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_39" filter="url(#filter38_d_60_2317)">
                  <rect x="882" y="114" width="365" height="42" rx="6" fill="white" />
                  <rect x="882.5" y="114.5" width="364" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Partner Capacity Assessment Tool (PCAT)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="902" y="140.22">Partner Capacity Assessment Tool (PCAT)</tspan>
                </text>
                <circle id="Ellipse 12_39" cx="882.5" cy="131.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_39" cx="882.5" cy="131.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="LoA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_40" filter="url(#filter39_d_60_2317)">
                  <rect x="1274" y="114" width="200" height="42" rx="6" fill="white" />
                  <rect x="1274.5" y="114.5" width="199" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="LoA or RPA with RPs" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1294" y="140.22">LoA or RPA with RPs</tspan>
                </text>
                <circle id="Ellipse 12_40" cx="1274.5" cy="131.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_40" cx="1274.5" cy="131.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="GA Offline_2" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_41" filter="url(#filter40_d_60_2317)">
                  <rect x="15" y="176" width="185" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="176.5" width="184" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Grant Agreements" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="202.22">Grant Agreements</tspan>
                </text>
                <circle id="Ellipse 12_41" cx="15.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_41" cx="15.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="MinProjBoard Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_42" filter="url(#filter41_d_60_2317)">
                  <rect x="403" y="176" width="282" height="42" rx="6" fill="white" />
                  <rect x="403.5" y="176.5" width="281" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Minutes Project Board Kick-Off" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="423" y="202.22">Minutes Project Board Kick-Off</tspan>
                </text>
                <circle id="Ellipse 12_42" cx="403.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_42" cx="403.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="AWP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_43" filter="url(#filter42_d_60_2317)">
                  <rect x="712" y="176" width="243" height="42" rx="6" fill="white" />
                  <rect x="712.5" y="176.5" width="242" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="AWP/Multi-Year Work Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="732" y="202.22">AWP/Multi-Year Work Plan</tspan>
                </text>
                <circle id="Ellipse 12_43" cx="712.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_43" cx="712.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="HR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_44" filter="url(#filter43_d_60_2317)">
                  <rect x="982" y="176" width="202" height="42" rx="6" fill="white" />
                  <rect x="982.5" y="176.5" width="201" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="HR Recriutment Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1002" y="202.22">HR Recriutment Plan</tspan>
                </text>
                <circle id="Ellipse 12_44" cx="982.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_44" cx="982.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="BTORFV Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_45" filter="url(#filter44_d_60_2317)">
                  <rect x="1211" y="176" width="338" height="42" rx="6" fill="white" />
                  <rect x="1211.5" y="176.5" width="337" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="BTOR Field Visit by Project Assurance" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="1231" y="202.22">BTOR Field Visit by Project Assurance</tspan>
                </text>
                <circle id="Ellipse 12_45" cx="1211.5" cy="193.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_45" cx="1211.5" cy="193.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="PBRM Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_46" filter="url(#filter45_d_60_2317)">
                  <rect x="15" y="238" width="353" height="42" rx="6" fill="white" />
                  <rect x="15.5" y="238.5" width="352" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Minutes: Project Board to Revise MYWP" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="35" y="264.22">Minutes: Project Board to Revise MYWP</tspan>
                </text>
                <circle id="Ellipse 12_46" cx="15.5" cy="255.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_46" cx="15.5" cy="255.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="LLR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_47" filter="url(#filter46_d_60_2317)">
                  <rect x="731" y="238" width="244" height="42" rx="6" fill="white" />
                  <rect x="731.5" y="238.5" width="243" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Lessons Learned in ROAR" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="751" y="264.22">Lessons Learned in ROAR</tspan>
                </text>
                <circle id="Ellipse 12_47" cx="731.5" cy="255.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_47" cx="731.5" cy="255.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
              <g id="LLPR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
                <g id="Rectangle 6_48" filter="url(#filter47_d_60_2317)">
                  <rect x="395" y="238" width="309" height="42" rx="6" fill="white" />
                  <rect x="395.5" y="238.5" width="308" height="41" rx="5.5" stroke="#CC3E27" />
                </g>
                <text id="Lessons Learned in Project Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                  <tspan x="415" y="264.22">Lessons Learned in Project Report</tspan>
                </text>
                <circle id="Ellipse 12_48" cx="395.5" cy="255.5" r="7" fill="white" stroke="#CC3E27" />
                <circle id="Ellipse 13_48" cx="395.5" cy="255.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_60_2317" x="1271" y="615" width="231" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter1_d_60_2317" x="0" y="677" width="266" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter2_d_60_2317" x="618" y="615" width="279" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter3_d_60_2317" x="894" y="615" width="380" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter4_d_60_2317" x="431" y="491" width="253" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter5_d_60_2317" x="681" y="491" width="282" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter6_d_60_2317" x="960" y="491" width="190" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter7_d_60_2317" x="1147" y="491" width="319" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter8_d_60_2317" x="0" y="553" width="215" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter9_d_60_2317" x="0" y="429" width="198" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter10_d_60_2317" x="195" y="429" width="236" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter11_d_60_2317" x="428" y="429" width="317" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter12_d_60_2317" x="742" y="429" width="212" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter13_d_60_2317" x="951" y="429" width="351" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter14_d_60_2317" x="1299" y="429" width="215" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter15_d_60_2317" x="0" y="491" width="265" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter16_d_60_2317" x="262" y="491" width="172" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter17_d_60_2317" x="212" y="553" width="127" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter18_d_60_2317" x="336" y="553" width="284" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter19_d_60_2317" x="617" y="553" width="280" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter20_d_60_2317" x="894" y="553" width="333" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter21_d_60_2317" x="1224" y="553" width="194" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter22_d_60_2317" x="0" y="615" width="332" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter23_d_60_2317" x="329" y="615" width="292" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter24_d_60_2317" x="465" y="285" width="225" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter25_d_60_2317" x="0" y="285" width="159" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter26_d_60_2317" x="156" y="285" width="312" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter27_d_60_2317" x="987" y="223" width="379" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter28_d_60_2317" x="212" y="161" width="179" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter29_d_60_2317" x="0" y="37" width="359" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter30_d_60_2317" x="356" y="37" width="203" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter31_d_60_2317" x="556" y="37" width="166" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter32_d_60_2317" x="719" y="37" width="218" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter33_d_60_2317" x="934" y="37" width="300" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter34_d_60_2317" x="1231" y="37" width="336" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter35_d_60_2317" x="0" y="99" width="214" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter36_d_60_2317" x="211" y="99" width="221" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter37_d_60_2317" x="429" y="99" width="441" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter38_d_60_2317" x="867" y="99" width="395" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter39_d_60_2317" x="1259" y="99" width="230" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter40_d_60_2317" x="0" y="161" width="215" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter41_d_60_2317" x="388" y="161" width="312" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter42_d_60_2317" x="697" y="161" width="273" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter43_d_60_2317" x="967" y="161" width="232" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter44_d_60_2317" x="1196" y="161" width="368" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter45_d_60_2317" x="0" y="223" width="383" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter46_d_60_2317" x="716" y="223" width="274" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
          <filter id="filter47_d_60_2317" x="380" y="223" width="339" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_60_2317" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_2317" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_2317" result="shape" />
          </filter>
        </defs>
      </svg>
  </div>
)}