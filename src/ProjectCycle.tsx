import { useRef, useState, useEffect } from "react";
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

export const ProjectCycle = (props: Props) => {
  const {
    sharePoint,
    atlas,
    website,
    online,
    roles,
    all,
  } = props;
  const [selectedHeader, setSelectedHeader] = useState<string | null>(null);
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
    <div style={{width: "calc(100% - 40px)", height: "calc(100vh - 145px)"}}>
      <svg width="100%" height="100%" style={{padding:"0 20px 20px 20px"}} viewBox="0 0 3115 1845" fill="none" xmlns="http://www.w3.org/2000/svg" ref={SVG}>
        <g id="Group 78" ref={mapG}>
          <g id="BGLines">
            <rect id="Rectangle 1" x="35" y="136" width="3074" height="1654" rx="30" stroke="#E4882E" strokeWidth="12" />
            <path id="Rectangle 3" d="M1581 1790H65C48.4314 1790 35 1776.57 35 1760V1634" stroke="#BCBEC0" strokeWidth="12" />
            <path id="Rectangle 2" d="M1086 136H3079C3095.57 136 3109 149.431 3109 166V1760C3109 1776.57 3095.57 1790 3079 1790H1116C1099.43 1790 1086 1776.57 1086 1760V1640.67" stroke="#56ACC3" strokeWidth="12" />
            <path id="Line 1" d="M1086 1654V142" stroke="#56ACC3" strokeWidth="6" strokeDasharray="36 36" />
          </g>
          <g id="Formulate" opacity={selectedHeader === 'Formulate' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'Formulate' ? setSelectedHeader('Formulate') : setSelectedHeader(null)}}>
              <circle id="Ellipse 1" cx="97" cy="136" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
              <text id="1" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="90.4219" y="145.28">1</tspan>
              </text>
              <text id="Formulate_2" fill="#E4882E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="62" y="89.28">Formulate</tspan>
              </text>
            </g>
            <g id="Connectors">
              <path id="Rectangle 5" d="M98 171L98 216C98 221.523 102.477 226 108 226H124" stroke="#E4882E" />
              <path id="Rectangle 7" d="M98 284L98 382C98 387.523 102.477 392 108 392H130" stroke="#E4882E" />
              <path id="Rectangle 16" d="M98 312L98 1118C98 1123.52 102.477 1128 108 1128H124" stroke="#E4882E" />
              <path id="Rectangle 18" d="M98 456L98 1262C98 1267.52 102.477 1272 108 1272H124" stroke="#E4882E" />
              <path id="Rectangle 17" d="M98 384L98 1190C98 1195.52 102.477 1200 108 1200H124" stroke="#E4882E" />
              <path id="Rectangle 66" d="M98 569L98 1334C98 1339.52 102.477 1344 108 1344H124" stroke="#E4882E" />
              <path id="Rectangle 67" d="M98 569L98 1450C98 1455.52 102.477 1460 108 1460H124" stroke="#E4882E" />
              <path id="Rectangle 8" d="M98 370L98 454C98 459.523 102.477 464 108 464H124" stroke="#E4882E" />
              <path id="Rectangle 6" d="M98 171L98 288C98 293.523 102.477 298 108 298H124" stroke="#E4882E" />
              <path id="Rectangle 9" d="M98 441L98 548C98 553.523 102.477 558 108 558H124" stroke="#E4882E" />
              <path id="Rectangle 10" d="M98 526L98 620C98 625.523 102.477 630 108 630H124" stroke="#E4882E" />
              <path id="Rectangle 11" d="M98 694L98 714C98 719.523 102.477 724 108 724H124" stroke="#E4882E" />
              <path id="Rectangle 12" d="M98 780V786C98 791.523 102.477 796 108 796H124" stroke="#E4882E" />
              <path id="Rectangle 13" d="M98 738L98 858C98 863.523 102.477 868 108 868H124" stroke="#E4882E" />
              <path id="Rectangle 14" d="M98 830L98 930C98 935.523 102.477 940 108 940H124" stroke="#E4882E" />
              <path id="Rectangle 15" d="M98 905L98 1024C98 1029.52 102.477 1034 108 1034H124" stroke="#E4882E" />
            </g>
            <g id="PipelineModule Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_2" filter="url(#filter0_d_87_2)">
                <rect x="131" y="208" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="208.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Pipeline Module" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="234.22">Pipeline Module</tspan>
              </text>
              <circle id="Ellipse 12" cx="131.5" cy="225.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13" cx="131.5" cy="225.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="PSDDD Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_3" filter="url(#filter1_d_87_2)">
                <rect x="131" y="280" width="234" height="64" rx="6" fill="white" />
                <rect x="131.5" y="280.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Private Sector Donors Due Diligence" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="306.22">Private Sector Donors </tspan>
                <tspan x="151" y="328.22">Due Diligence</tspan>
              </text>
              <circle id="Ellipse 12_2" cx="131.5" cy="297.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_2" cx="131.5" cy="297.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="PIP SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1)  ? 1 : 0.25}>
              <g id="Rectangle 6_4" filter="url(#filter2_d_87_2)">
                <rect x="131" y="374" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="374.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project Initiation Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="400.22">Project Initiation Plan</tspan>
              </text>
              <circle id="Ellipse 12_3" cx="131.5" cy="391.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_3" cx="131.5" cy="391.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="PPG SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_5" filter="url(#filter3_d_87_2)">
                <rect x="131" y="446" width="234" height="64" rx="6" fill="white" />
                <rect x="131.5" y="446.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project Preparation Grant (PPG)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="472.22">Project Preparation </tspan>
                <tspan x="151" y="494.22">Grant (PPG)</tspan>
              </text>
              <circle id="Ellipse 12_4" cx="131.5" cy="463.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_4" cx="131.5" cy="463.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="ProjectDoc SharePoint Website" opacity={((sharePoint || website)  || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_6" filter="url(#filter4_d_87_2)">
                <rect x="131" y="540" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="540.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project Document" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="566.22">Project Document</tspan>
              </text>
              <circle id="Ellipse 12_5" cx="131.5" cy="557.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_5" cx="131.5" cy="557.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="JPPD SahrePoint Website" opacity={((sharePoint || website)  || (!online && all)) &&  (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_7" filter="url(#filter5_d_87_2)">
                <rect x="131" y="612" width="234" height="64" rx="6" fill="white" />
                <rect x="131.5" y="612.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Joint Programme Project Document" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="638.22">Joint Programme </tspan>
                <tspan x="151" y="660.22">Project Document</tspan>
              </text>
              <circle id="Ellipse 12_6" cx="131.5" cy="629.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_6" cx="131.5" cy="629.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="WorkshopReport Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
              <g id="Rectangle 6_8" filter="url(#filter6_d_87_2)">
                <rect x="131" y="706" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="706.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Workshop report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="732.22">Workshop report</tspan>
              </text>
              <circle id="Ellipse 12_7" cx="131.5" cy="723.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_7" cx="131.5" cy="723.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="SurveyData Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
              <g id="Rectangle 6_9" filter="url(#filter7_d_87_2)">
                <rect x="131" y="778" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="778.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Survey Data" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="804.22">Survey Data</tspan>
              </text>
              <circle id="Ellipse 12_8" cx="131.5" cy="795.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_8" cx="131.5" cy="795.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="GD Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
              <g id="Rectangle 6_10" filter="url(#filter8_d_87_2)">
                <rect x="131" y="850" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="850.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Group Discussions" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="876.22">Group Discussions</tspan>
              </text>
              <circle id="Ellipse 12_9" cx="131.5" cy="867.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_9" cx="131.5" cy="867.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="StakeholderMeetingReport Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
              <g id="Rectangle 6_11" filter="url(#filter9_d_87_2)">
                <rect x="131" y="922" width="234" height="64" rx="6" fill="white" />
                <rect x="131.5" y="922.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Stakeholder Meeting Reports" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="948.22">Stakeholder Meeting </tspan>
                <tspan x="151" y="970.22">Reports</tspan>
              </text>
              <circle id="Ellipse 12_10" cx="131.5" cy="939.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_10" cx="131.5" cy="939.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="BOTR Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
              <g id="Rectangle 6_12" filter="url(#filter10_d_87_2)">
                <rect x="131" y="1016" width="234" height="64" rx="6" fill="white" />
                <rect x="131.5" y="1016.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Back to the Office Reports (BOTR)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1042.22">Back to the Office </tspan>
                <tspan x="151" y="1064.22">Reports (BOTR)</tspan>
              </text>
              <circle id="Ellipse 12_11" cx="131.5" cy="1033.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_11" cx="131.5" cy="1033.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="FR Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
              <g id="Rectangle 6_13" filter="url(#filter11_d_87_2)">
                <rect x="131" y="1110" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="1110.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Feasibility Reports" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1136.22">Feasibility Reports</tspan>
              </text>
              <circle id="Ellipse 12_12" cx="131.5" cy="1127.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_12" cx="131.5" cy="1127.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="GA Offline" opacity={(all || online) && roles.length === 0 ? 1 : 0.25}>
              <g id="Rectangle 6_14" filter="url(#filter12_d_87_2)">
                <rect x="131" y="1182" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="1182.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Gender Assesment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1208.22">Gender Assesment</tspan>
              </text>
              <circle id="Ellipse 12_13" cx="131.5" cy="1199.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_13" cx="131.5" cy="1199.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="ProjectQA SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1  || roles.indexOf("Quality Assessor") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_15" filter="url(#filter13_d_87_2)">
                <rect x="131" y="1254" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="1254.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project QA Design" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1280.22">Project QA Design</tspan>
              </text>
              <circle id="Ellipse 12_14" cx="131.5" cy="1271.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_14" cx="131.5" cy="1271.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="SESP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_16" filter="url(#filter14_d_87_2)">
                <rect x="131" y="1326" width="234" height="86" rx="6" fill="white" />
                <rect x="131.5" y="1326.5" width="233" height="85" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Social and Environmental Screening Procedure" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1352.22">Social and </tspan>
                <tspan x="151" y="1374.22">Environmental </tspan>
                <tspan x="151" y="1396.22">Screening Procedure</tspan>
              </text>
              <circle id="Ellipse 12_15" cx="131.5" cy="1343.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_15" cx="131.5" cy="1343.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="RiskRegister Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_17" filter="url(#filter15_d_87_2)">
                <rect x="131" y="1442" width="234" height="42" rx="6" fill="white" />
                <rect x="131.5" y="1442.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Risk Register" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1468.22">Risk Register</tspan>
              </text>
              <circle id="Ellipse 12_16" cx="131.5" cy="1459.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_16" cx="131.5" cy="1459.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
          </g>
          <g id="SelectImplementingPartner" opacity={selectedHeader === 'SelectImplementingPartner' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_2" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'SelectImplementingPartner' ? setSelectedHeader('SelectImplementingPartner') : setSelectedHeader(null)}}>
              <circle id="Ellipse 2" cx="421" cy="136" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
              <text id="Select Implementing Partner" fill="#E4882E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="386" y="25.28">Select&#10;</tspan>
                <tspan x="386" y="57.28">Implementing&#10;</tspan>
                <tspan x="386" y="89.28">Partner</tspan>
              </text>
              <text id="2" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="411.406" y="145.28">2</tspan>
              </text>
            </g>
            <g id="Connectors_2">
              <path id="Rectangle 19" d="M421 171V216C421 221.523 425.477 226 431 226H447" stroke="#E4882E" />
              <path id="Rectangle 20" d="M421 282V404C421 409.523 425.477 414 431 414H447" stroke="#E4882E" />
              <path id="Rectangle 21" d="M421 436V548C421 553.523 425.477 558 431 558H447" stroke="#E4882E" />
              <path id="Rectangle 23" d="M421 508V620C421 625.523 425.477 630 431 630H447" stroke="#E4882E" />
              <path id="Rectangle 24" d="M421 354V476C421 481.523 425.477 486 431 486H447" stroke="#E4882E" />
              <path id="Rectangle 25" d="M421 179V310C421 315.523 425.477 320 431 320H447" stroke="#E4882E" />
            </g>
            <g id="PCAT Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_18" filter="url(#filter16_d_87_2)">
                <rect x="454" y="208" width="234" height="64" rx="6" fill="white" />
                <rect x="454.5" y="208.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Partner Capacity Assessment Tool (PCAT)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="234.22">Partner Capacity </tspan>
                <tspan x="474" y="256.22">Assessment Tool (PCAT)</tspan>
              </text>
              <circle id="Ellipse 12_17" cx="454.5" cy="225.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_17" cx="454.5" cy="225.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="HACT SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_19" filter="url(#filter17_d_87_2)">
                <rect x="454" y="302" width="234" height="64" rx="6" fill="white" />
                <rect x="454.5" y="302.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="HACT Micro Assessment" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="328.22">HACT Micro </tspan>
                <tspan x="474" y="350.22">Assessment</tspan>
              </text>
              <circle id="Ellipse 12_18" cx="454.5" cy="319.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_18" cx="454.5" cy="319.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="RiskRegister Atlas_2" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_20" filter="url(#filter18_d_87_2)">
                <rect x="454" y="396" width="234" height="42" rx="6" fill="white" />
                <rect x="454.5" y="396.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Risk Register_2" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="422.22">Risk Register</tspan>
              </text>
              <circle id="Ellipse 12_19" cx="454.5" cy="413.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_19" cx="454.5" cy="413.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="LoA Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_21" filter="url(#filter19_d_87_2)">
                <rect x="454" y="540" width="234" height="42" rx="6" fill="white" />
                <rect x="454.5" y="540.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="LoA or RPA with RPs" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="566.22">LoA or RPA with RPs</tspan>
              </text>
              <circle id="Ellipse 12_20" cx="454.5" cy="557.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_20" cx="454.5" cy="557.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="ProjectDocument SharePoint Website" opacity={((sharePoint || website) || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_22" filter="url(#filter20_d_87_2)">
                <rect x="454" y="468" width="234" height="42" rx="6" fill="white" />
                <rect x="454.5" y="468.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project Document_2" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="494.22">Project Document</tspan>
              </text>
              <circle id="Ellipse 12_21" cx="454.5" cy="485.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_21" cx="454.5" cy="485.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="GA Offline_2" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_23" filter="url(#filter21_d_87_2)">
                <rect x="454" y="612" width="234" height="42" rx="6" fill="white" />
                <rect x="454.5" y="612.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Grant Agreements" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="638.22">Grant Agreements</tspan>
              </text>
              <circle id="Ellipse 12_22" cx="454.5" cy="629.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_22" cx="454.5" cy="629.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="AppraiseAndApprove" opacity={selectedHeader === 'AppraiseAndApprove' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_3" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'AppraiseAndApprove' ? setSelectedHeader('AppraiseAndApprove') : setSelectedHeader(null)}}>
              <circle id="Ellipse 4" cx="745" cy="136" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
              <text id="Appraise &#38; Approve" fill="#E4882E" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="710" y="57.28">Appraise &#38;&#10;</tspan>
                <tspan x="710" y="89.28">Approve</tspan>
              </text>
              <text id="3" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="735.609" y="145.28">3</tspan>
              </text>
            </g>
            <g id="Connectors_3">
              <path id="Rectangle 26" d="M744 171V216C744 221.523 748.477 226 754 226H770" stroke="#E4882E" />
              <path id="Rectangle 28" d="M744 342V454C744 459.523 748.477 464 754 464H770" stroke="#E4882E" />
              <path id="Rectangle 29" d="M744 414V526C744 531.523 748.477 536 754 536H770" stroke="#E4882E" />
              <path id="Rectangle 32" d="M744 400V597C744 602.523 748.477 607 754 607H770" stroke="#E4882E" />
              <path id="Rectangle 33" d="M744 390V692C744 697.523 748.477 702 754 702H770" stroke="#E4882E" />
              <path id="Rectangle 30" d="M744 238V360C744 365.523 748.477 370 754 370H770" stroke="#E4882E" />
              <path id="Rectangle 31" d="M744 184V288C744 293.523 748.477 298 754 298H770" stroke="#E4882E" />
            </g>
            <g id="LPAC Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_24" filter="url(#filter22_d_87_2)">
                <rect x="777" y="208" width="234" height="42" rx="6" fill="white" />
                <rect x="777.5" y="208.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="LPAC Minutes" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="234.22">LPAC Minutes</tspan>
              </text>
              <circle id="Ellipse 12_23" cx="777.5" cy="225.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_23" cx="777.5" cy="225.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="ProjIDOutputID Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_25" filter="url(#filter23_d_87_2)">
                <rect x="777" y="280" width="234" height="42" rx="6" fill="white" />
                <rect x="777.5" y="280.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project ID &#38; Output IDs" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="306.22">Project ID &#38; Output IDs</tspan>
              </text>
              <circle id="Ellipse 12_24" cx="777.5" cy="297.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_24" cx="777.5" cy="297.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="IBT Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_26" filter="url(#filter24_d_87_2)">
                <rect x="777" y="352" width="234" height="64" rx="6" fill="white" />
                <rect x="777.5" y="352.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Indicators, Baseline, Target" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="378.22">Indicators, Baseline, </tspan>
                <tspan x="797" y="400.22">Target</tspan>
              </text>
              <circle id="Ellipse 12_25" cx="777.5" cy="369.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_25" cx="777.5" cy="369.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="RiskRegister Atlas_3" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_27" filter="url(#filter25_d_87_2)">
                <rect x="777" y="446" width="234" height="42" rx="6" fill="white" />
                <rect x="777.5" y="446.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Risk Register_3" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="472.22">Risk Register</tspan>
              </text>
              <circle id="Ellipse 12_26" cx="777.5" cy="463.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_26" cx="777.5" cy="463.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="GM Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_28" filter="url(#filter26_d_87_2)">
                <rect x="777" y="518" width="234" height="42" rx="6" fill="white" />
                <rect x="777.5" y="518.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Gender Marker" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="544.22">Gender Marker</tspan>
              </text>
              <circle id="Ellipse 12_27" cx="777.5" cy="535.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_27" cx="777.5" cy="535.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="Link SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_29" filter="url(#filter27_d_87_2)">
                <rect x="777" y="590" width="234" height="64" rx="6" fill="white" />
                <rect x="777.5" y="590.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Link Output IDs to CPD Outputs" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="616.22">Link Output IDs to CPD </tspan>
                <tspan x="797" y="638.22">Outputs</tspan>
              </text>
              <circle id="Ellipse 12_28" cx="777.5" cy="607.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_28" cx="777.5" cy="607.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="OutputIDs SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_30" filter="url(#filter28_d_87_2)">
                <rect x="777" y="684" width="234" height="42" rx="6" fill="white" />
                <rect x="777.5" y="684.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Output ID Markers" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="710.22">Output ID Markers</tspan>
              </text>
              <circle id="Ellipse 12_29" cx="777.5" cy="701.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_29" cx="777.5" cy="701.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
          </g>
          <g id="AnnualPlanning" opacity={selectedHeader === 'AnnualPlanning' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_4" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'AnnualPlanning' ? setSelectedHeader('AnnualPlanning') : setSelectedHeader(null)}}>
              <circle id="Ellipse 5" cx="1181" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Annual Planning" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1146" y="57.28">Annual&#10;</tspan>
                <tspan x="1146" y="89.28">Planning</tspan>
              </text>
              <text id="4" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1171.45" y="145.28">4</tspan>
              </text>
            </g>
            <g id="Connectors_4">
              <path id="Rectangle 34" d="M1181 171V216C1181 221.523 1185.48 226 1191 226H1207" stroke="#56ACC3" />
              <path id="Rectangle 35" d="M1181 282V404C1181 409.523 1185.48 414 1191 414H1207" stroke="#56ACC3" />
              <path id="Rectangle 37" d="M1181 354V476C1181 481.523 1185.48 486 1191 486H1207" stroke="#56ACC3" />
              <path id="Rectangle 38" d="M1181 190V310C1181 315.523 1185.48 320 1191 320H1207" stroke="#56ACC3" />
            </g>
            <g id="MinProjBoard Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_31" filter="url(#filter29_d_87_2)">
                <rect x="1214" y="208" width="234" height="64" rx="6" fill="white" />
                <rect x="1214.5" y="208.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Minutes Project Board Kick-Off" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1234" y="234.22">Minutes Project Board </tspan>
                <tspan x="1234" y="256.22">Kick-Off</tspan>
              </text>
              <circle id="Ellipse 12_30" cx="1214.5" cy="225.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_30" cx="1214.5" cy="225.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="AWP Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_32" filter="url(#filter30_d_87_2)">
                <rect x="1214" y="302" width="234" height="64" rx="6" fill="white" />
                <rect x="1214.5" y="302.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="AWP/Multi-Year Work Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1234" y="328.22">AWP/Multi-Year Work </tspan>
                <tspan x="1234" y="350.22">Plan</tspan>
              </text>
              <circle id="Ellipse 12_31" cx="1214.5" cy="319.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_31" cx="1214.5" cy="319.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="Prompt SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_33" filter="url(#filter31_d_87_2)">
                <rect x="1214" y="396" width="234" height="42" rx="6" fill="white" />
                <rect x="1214.5" y="396.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Prompt" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1234" y="422.22">Prompt</tspan>
              </text>
              <circle id="Ellipse 12_32" cx="1214.5" cy="413.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_32" cx="1214.5" cy="413.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="HR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_34" filter="url(#filter32_d_87_2)">
                <rect x="1214" y="468" width="234" height="42" rx="6" fill="white" />
                <rect x="1214.5" y="468.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="HR Recriutment Plan" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1234" y="494.22">HR Recriutment Plan</tspan>
              </text>
              <circle id="Ellipse 12_33" cx="1214.5" cy="485.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_33" cx="1214.5" cy="485.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="DeliverResults" opacity={selectedHeader === 'DeliverResults' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_5" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'DeliverResults' ? setSelectedHeader('DeliverResults') : setSelectedHeader(null)}}>
              <circle id="Ellipse 6" cx="1505" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Deliver Results" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1470" y="57.28">Deliver&#10;</tspan>
                <tspan x="1470" y="89.28">Results</tspan>
              </text>
              <text id="5" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1495.27" y="145.28">5</tspan>
              </text>
            </g>
            <g id="Connetors">
              <path id="Rectangle 39" d="M1505 171V216C1505 221.523 1509.48 226 1515 226H1531" stroke="#56ACC3" />
              <path id="Rectangle 40" d="M1505 282V404C1505 409.523 1509.48 414 1515 414H1531" stroke="#56ACC3" />
              <path id="Rectangle 41" d="M1505 376V498C1505 503.523 1509.48 508 1515 508H1531" stroke="#56ACC3" />
              <path id="Rectangle 43" d="M1505 366V592C1505 597.523 1509.48 602 1515 602H1531" stroke="#56ACC3" />
              <path id="Rectangle 44" d="M1505 356V686C1505 691.523 1509.48 696 1515 696H1531" stroke="#56ACC3" />
              <path id="Rectangle 42" d="M1505 181V310C1505 315.523 1509.48 320 1515 320H1531" stroke="#56ACC3" />
            </g>
            <g id="MMB Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_35" filter="url(#filter33_d_87_2)">
                <rect x="1538" y="208" width="234" height="64" rx="6" fill="white" />
                <rect x="1538.5" y="208.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Managing MYWP &#38; Budget" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="234.22">Managing MYWP &#38; </tspan>
                <tspan x="1558" y="256.22">Budget</tspan>
              </text>
              <circle id="Ellipse 12_34" cx="1538.5" cy="225.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_34" cx="1538.5" cy="225.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="BTORFV Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_36" filter="url(#filter34_d_87_2)">
                <rect x="1538" y="302" width="234" height="64" rx="6" fill="white" />
                <rect x="1538.5" y="302.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="BTOR Field Visit by Project Assurance" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="328.22">BTOR Field Visit by </tspan>
                <tspan x="1558" y="350.22">Project Assurance</tspan>
              </text>
              <circle id="Ellipse 12_35" cx="1538.5" cy="319.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_35" cx="1538.5" cy="319.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="HACT SharePoint_2" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_37" filter="url(#filter35_d_87_2)">
                <rect x="1538" y="396" width="234" height="64" rx="6" fill="white" />
                <rect x="1538.5" y="396.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="HACT Assurance Activities" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="422.22">HACT Assurance </tspan>
                <tspan x="1558" y="444.22">Activities</tspan>
              </text>
              <circle id="Ellipse 12_36" cx="1538.5" cy="413.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_36" cx="1538.5" cy="413.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="MTFPE SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_38" filter="url(#filter36_d_87_2)">
                <rect x="1538" y="490" width="234" height="64" rx="6" fill="white" />
                <rect x="1538.5" y="490.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Mid-Term/Final Project Evaluation" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="516.22">Mid-Term/Final Project </tspan>
                <tspan x="1558" y="538.22">Evaluation</tspan>
              </text>
              <circle id="Ellipse 12_37" cx="1538.5" cy="507.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_37" cx="1538.5" cy="507.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="PBRM Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_39" filter="url(#filter37_d_87_2)">
                <rect x="1538" y="584" width="234" height="64" rx="6" fill="white" />
                <rect x="1538.5" y="584.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Minutes: Project Board to Revise MYWP" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="610.22">Minutes: Project Board </tspan>
                <tspan x="1558" y="632.22">to Revise MYWP</tspan>
              </text>
              <circle id="Ellipse 12_38" cx="1538.5" cy="601.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_38" cx="1538.5" cy="601.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="MYWP Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_40" filter="url(#filter38_d_87_2)">
                <rect x="1538" y="678" width="234" height="42" rx="6" fill="white" />
                <rect x="1538.5" y="678.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="MYWP Revision" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="704.22">MYWP Revision</tspan>
              </text>
              <circle id="Ellipse 12_39" cx="1538.5" cy="695.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_39" cx="1538.5" cy="695.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
          </g>
          <g id="Monitor" opacity={selectedHeader === 'Monitor' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_6" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'Monitor' ? setSelectedHeader('Monitor') : setSelectedHeader(null)}}>
              <circle id="Ellipse 7" cx="1829" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Monitor_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1794" y="89.28">Monitor</tspan>
              </text>
              <text id="6" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="1819.27" y="145.28">6</tspan>
              </text>
            </g>
            <g id="Connectors_5">
              <path id="Rectangle 45" d="M1829 171V216C1829 221.523 1833.48 226 1839 226H1855" stroke="#56ACC3" />
              <path id="Rectangle 46" d="M1829 282V404C1829 409.523 1833.48 414 1839 414H1855" stroke="#56ACC3" />
              <path id="Rectangle 47" d="M1829 354V476C1829 481.523 1833.48 486 1839 486H1855" stroke="#56ACC3" />
              <path id="Rectangle 48" d="M1829 344V570C1829 575.523 1833.48 580 1839 580H1855" stroke="#56ACC3" />
              <path id="Rectangle 49" d="M1829 334V664C1829 669.523 1833.48 674 1839 674H1855" stroke="#56ACC3" />
              <path id="Rectangle 50" d="M1829 185V310C1829 315.523 1833.48 320 1839 320H1855" stroke="#56ACC3" />
            </g>
            <g id="UREI Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1 || roles.indexOf("M&E Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_41" filter="url(#filter39_d_87_2)">
                <rect x="1862" y="208" width="234" height="64" rx="6" fill="white" />
                <rect x="1862.5" y="208.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Update Results for Each Indicator" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="234.22">Update Results for Each </tspan>
                <tspan x="1882" y="256.22">Indicator</tspan>
              </text>
              <circle id="Ellipse 12_40" cx="1862.5" cy="225.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_40" cx="1862.5" cy="225.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="PQAI SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Quality Assessor") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_42" filter="url(#filter40_d_87_2)">
                <rect x="1862" y="302" width="234" height="64" rx="6" fill="white" />
                <rect x="1862.5" y="302.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project QA - Implementation" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="328.22">Project QA - </tspan>
                <tspan x="1882" y="350.22">Implementation</tspan>
              </text>
              <circle id="Ellipse 12_41" cx="1862.5" cy="319.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_41" cx="1862.5" cy="319.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="RiskRegister Atlas_4" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_43" filter="url(#filter41_d_87_2)">
                <rect x="1862" y="396" width="234" height="42" rx="6" fill="white" />
                <rect x="1862.5" y="396.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Risk Register_4" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="422.22">Risk Register</tspan>
              </text>
              <circle id="Ellipse 12_42" cx="1862.5" cy="413.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_42" cx="1862.5" cy="413.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="BTORFV Offline_2" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_44" filter="url(#filter42_d_87_2)">
                <rect x="1862" y="468" width="234" height="64" rx="6" fill="white" />
                <rect x="1862.5" y="468.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="BTOR Field Visit by Project Assurance_2" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="494.22">BTOR Field Visit by </tspan>
                <tspan x="1882" y="516.22">Project Assurance</tspan>
              </text>
              <circle id="Ellipse 12_43" cx="1862.5" cy="485.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_43" cx="1862.5" cy="485.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="LLR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_45" filter="url(#filter43_d_87_2)">
                <rect x="1862" y="656" width="234" height="64" rx="6" fill="white" />
                <rect x="1862.5" y="656.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Lessons Learned in ROAR" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="682.22">Lessons Learned in </tspan>
                <tspan x="1882" y="704.22">ROAR</tspan>
              </text>
              <circle id="Ellipse 12_44" cx="1862.5" cy="673.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_44" cx="1862.5" cy="673.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="LLPR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_46" filter="url(#filter44_d_87_2)">
                <rect x="1862" y="562" width="234" height="64" rx="6" fill="white" />
                <rect x="1862.5" y="562.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Lessons Learned in Project Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="588.22">Lessons Learned in </tspan>
                <tspan x="1882" y="610.22">Project Report</tspan>
              </text>
              <circle id="Ellipse 12_45" cx="1862.5" cy="579.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_45" cx="1862.5" cy="579.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="Oversight" opacity={selectedHeader === 'Oversight' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_7" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'Oversight' ? setSelectedHeader('Oversight') : setSelectedHeader(null)}}>
              <circle id="Ellipse 8" cx="2153" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Oversight_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2118" y="89.28">Oversight</tspan>
              </text>
              <text id="7" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2144.28" y="145.28">7</tspan>
              </text>
            </g>
            <path id="Connetors_2" d="M2153 171V216C2153 221.523 2157.48 226 2163 226H2179" stroke="#56ACC3" />
            <g id="MPBRM Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_47" filter="url(#filter45_d_87_2)">
                <rect x="2186" y="208" width="234" height="64" rx="6" fill="white" />
                <rect x="2186.5" y="208.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Minutes Project Board Regular Meeting" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2206" y="234.22">Minutes Project Board </tspan>
                <tspan x="2206" y="256.22">Regular Meeting</tspan>
              </text>
              <circle id="Ellipse 12_46" cx="2186.5" cy="225.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_46" cx="2186.5" cy="225.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
          </g>
          <g id="MakeChange" opacity={selectedHeader === 'MakeChange' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_8" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'MakeChange' ? setSelectedHeader('MakeChange') : setSelectedHeader(null)}}>
              <circle id="Ellipse 9" cx="2477" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Make Change" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2442" y="57.28">Make&#10;</tspan>
                <tspan x="2442" y="89.28">Change</tspan>
              </text>
              <text id="8" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2467.3" y="145.28">8</tspan>
              </text>
            </g>
            <g id="Connectors_6">
              <path id="Rectangle 52" d="M2477 171V216C2477 221.523 2481.48 226 2487 226H2503" stroke="#56ACC3" />
              <path id="Rectangle 53" d="M2477 278V382C2477 387.523 2481.48 392 2487 392H2503" stroke="#56ACC3" />
              <path id="Rectangle 54" d="M2477 179V287C2477 292.523 2481.48 297 2487 297H2503" stroke="#56ACC3" />
            </g>
            <g id="RiskRegister Atlas_5" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_48" filter="url(#filter46_d_87_2)">
                <rect x="2510" y="208" width="234" height="42" rx="6" fill="white" />
                <rect x="2510.5" y="208.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Risk Register_5" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2530" y="234.22">Risk Register</tspan>
              </text>
              <circle id="Ellipse 12_47" cx="2510.5" cy="225.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_47" cx="2510.5" cy="225.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="MPBRM Offline_2" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_49" filter="url(#filter47_d_87_2)">
                <rect x="2510" y="280" width="234" height="64" rx="6" fill="white" />
                <rect x="2510.5" y="280.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Minutes Project Board Regular Meeting_2" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2530" y="306.22">Minutes Project Board </tspan>
                <tspan x="2530" y="328.22">Regular Meeting</tspan>
              </text>
              <circle id="Ellipse 12_48" cx="2510.5" cy="297.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_48" cx="2510.5" cy="297.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="PD SharePoint Website" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_50" filter="url(#filter48_d_87_2)">
                <rect x="2510" y="374" width="234" height="42" rx="6" fill="white" />
                <rect x="2510.5" y="374.5" width="233" height="41" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project Document_3" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2530" y="400.22">Project Document</tspan>
              </text>
              <circle id="Ellipse 12_49" cx="2510.5" cy="391.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_49" cx="2510.5" cy="391.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
          </g>
          <g id="Report" opacity={selectedHeader === 'Report' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_9" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'Report' ? setSelectedHeader('Report') : setSelectedHeader(null)}}>
              <circle id="Ellipse 10" cx="2801" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
              <text id="Report_2" fill="#56ACC3" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2766" y="89.28">Report</tspan>
              </text>
              <text id="9" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="2791.27" y="145.28">9</tspan>
              </text>
            </g>
            <g id="Connectors_7">
              <path id="Rectangle 55" d="M2801 171V216C2801 221.523 2805.48 226 2811 226H2827" stroke="#56ACC3" />
              <path id="Rectangle 56" d="M2801 260V382C2801 387.523 2805.48 392 2811 392H2827" stroke="#56ACC3" />
              <path id="Rectangle 57" d="M2801 354V476C2801 481.523 2805.48 486 2811 486H2827" stroke="#56ACC3" />
              <path id="Rectangle 58" d="M2801 157V288C2801 293.523 2805.48 298 2811 298H2827" stroke="#56ACC3" />
            </g>
            <g id="FACE Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_51" filter="url(#filter49_d_87_2)">
                <rect x="2834" y="208" width="234" height="42" rx="6" fill="white" />
                <rect x="2834.5" y="208.5" width="233" height="41" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="FACE Form" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2854" y="234.22">FACE Form</tspan>
              </text>
              <circle id="Ellipse 12_50" cx="2834.5" cy="225.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_50" cx="2834.5" cy="225.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="CDR Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_52" filter="url(#filter50_d_87_2)">
                <rect x="2834" y="280" width="234" height="64" rx="6" fill="white" />
                <rect x="2834.5" y="280.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Combined Delivery Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2854" y="306.22">Combined Delivery </tspan>
                <tspan x="2854" y="328.22">Report</tspan>
              </text>
              <circle id="Ellipse 12_51" cx="2834.5" cy="297.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_51" cx="2834.5" cy="297.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="DPPR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_53" filter="url(#filter51_d_87_2)">
                <rect x="2834" y="374" width="234" height="64" rx="6" fill="white" />
                <rect x="2834.5" y="374.5" width="233" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Donor/Project Progress Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2854" y="400.22">Donor/Project Progress </tspan>
                <tspan x="2854" y="422.22">Report</tspan>
              </text>
              <circle id="Ellipse 12_52" cx="2834.5" cy="391.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_52" cx="2834.5" cy="391.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="OREOI Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_54" filter="url(#filter52_d_87_2)">
                <rect x="2834" y="468" width="234" height="64" rx="6" fill="white" />
                <rect x="2834.5" y="468.5" width="233" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Output Result for Each Output Indicator" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2854" y="494.22">Output Result for Each </tspan>
                <tspan x="2854" y="516.22">Output Indicator</tspan>
              </text>
              <circle id="Ellipse 12_53" cx="2834.5" cy="485.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_53" cx="2834.5" cy="485.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
          </g>
          <g id="Close" opacity={selectedHeader === 'Close' || selectedHeader === null ? 1 : 0.25}>
            <g id="Head_10" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'Close' ? setSelectedHeader('Close') : setSelectedHeader(null)}}>
              <circle id="Ellipse 11" cx="35" cy="1636" r="31" fill="white" stroke="#BCBEC0" strokeWidth="8" />
              <text id="10" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="18.5" y="1645.28">10</tspan>
              </text>
              <text id="Close_2" fill="#BCBEC0" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
                <tspan x="35" y="1838.28">Close</tspan>
              </text>
            </g>
            <g id="Connectors_8">
              <path id="Rectangle 62" d="M70 1636L100.872 1636C106.395 1636 110.872 1640.48 110.872 1646L110.872 1677C110.872 1682.52 115.349 1687 120.872 1687L124 1687" stroke="#BCBEC0" />
              <path id="Rectangle 63" d="M70 1636L341.872 1636C347.395 1636 351.872 1640.48 351.872 1646L351.872 1677C351.872 1682.52 356.349 1687 361.872 1687L365 1687" stroke="#BCBEC0" />
              <path id="Rectangle 64" d="M70 1636L582.872 1636C588.395 1636 592.872 1640.48 592.872 1646L592.872 1677C592.872 1682.52 597.349 1687 602.872 1687L606 1687" stroke="#BCBEC0" />
              <path id="Rectangle 65" d="M70 1636L823.872 1636C829.395 1636 833.872 1640.48 833.872 1646L833.872 1677C833.872 1682.52 838.349 1687 843.872 1687L847 1687" stroke="#BCBEC0" />
            </g>
            <g id="FPR Offline" opacity={(all || online) && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_55" filter="url(#filter53_d_87_2)">
                <rect x="131" y="1669" width="194" height="64" rx="6" fill="white" />
                <rect x="131.5" y="1669.5" width="193" height="63" rx="5.5" stroke="#CC3E27" />
              </g>
              <text id="Final Project Report" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1695.22">Final Project </tspan>
                <tspan x="151" y="1717.22">Report</tspan>
              </text>
              <circle id="Ellipse 12_54" cx="131.5" cy="1686.5" r="7" fill="white" stroke="#CC3E27" />
              <circle id="Ellipse 13_54" cx="131.5" cy="1686.5" r="4" fill="#CC3E27" stroke="#CC3E27" />
            </g>
            <g id="PQAC SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Project Board") !== -1 || roles.indexOf("Programme Officer") !== -1 || roles.indexOf("Quality Assessor") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_56" filter="url(#filter54_d_87_2)">
                <rect x="613" y="1669" width="194" height="64" rx="6" fill="white" />
                <rect x="613.5" y="1669.5" width="193" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project QA - Closure" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="633" y="1695.22">Project QA - </tspan>
                <tspan x="633" y="1717.22">Closure</tspan>
              </text>
              <circle id="Ellipse 12_55" cx="613.5" cy="1686.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_55" cx="613.5" cy="1686.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="PCM Atlas" opacity={(atlas || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_57" filter="url(#filter55_d_87_2)">
                <rect x="854" y="1669" width="194" height="64" rx="6" fill="white" />
                <rect x="854.5" y="1669.5" width="193" height="63" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Project Closure Manager" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="874" y="1695.22">Project Closure </tspan>
                <tspan x="874" y="1717.22">Manager</tspan>
              </text>
              <circle id="Ellipse 12_56" cx="854.5" cy="1686.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_56" cx="854.5" cy="1686.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
            <g id="ERC SharePoint" opacity={(sharePoint || (!online && all)) && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
              <g id="Rectangle 6_58" filter="url(#filter56_d_87_2)">
                <rect x="372" y="1669" width="194" height="86" rx="6" fill="white" />
                <rect x="372.5" y="1669.5" width="193" height="85" rx="5.5" stroke="#067F80" />
              </g>
              <text id="Mid-Term/Final Project Evaluation (ERC)" fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="392" y="1695.22">Mid-Term/Final </tspan>
                <tspan x="392" y="1717.22">Project Evaluation </tspan>
                <tspan x="392" y="1739.22">(ERC)</tspan>
              </text>
              <circle id="Ellipse 12_57" cx="372.5" cy="1686.5" r="7" fill="white" stroke="#067F80" />
              <circle id="Ellipse 13_57" cx="372.5" cy="1686.5" r="4" fill="#067F80" stroke="#067F80" />
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_d_87_2" x="116" y="193" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter1_d_87_2" x="116" y="265" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter2_d_87_2" x="116" y="359" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter3_d_87_2" x="116" y="431" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter4_d_87_2" x="116" y="525" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter5_d_87_2" x="116" y="597" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter6_d_87_2" x="116" y="691" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter7_d_87_2" x="116" y="763" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter8_d_87_2" x="116" y="835" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter9_d_87_2" x="116" y="907" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter10_d_87_2" x="116" y="1001" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter11_d_87_2" x="116" y="1095" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter12_d_87_2" x="116" y="1167" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter13_d_87_2" x="116" y="1239" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter14_d_87_2" x="116" y="1311" width="264" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter15_d_87_2" x="116" y="1427" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter16_d_87_2" x="439" y="193" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter17_d_87_2" x="439" y="287" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter18_d_87_2" x="439" y="381" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter19_d_87_2" x="439" y="525" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter20_d_87_2" x="439" y="453" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter21_d_87_2" x="439" y="597" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter22_d_87_2" x="762" y="193" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter23_d_87_2" x="762" y="265" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter24_d_87_2" x="762" y="337" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter25_d_87_2" x="762" y="431" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter26_d_87_2" x="762" y="503" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter27_d_87_2" x="762" y="575" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter28_d_87_2" x="762" y="669" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter29_d_87_2" x="1199" y="193" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter30_d_87_2" x="1199" y="287" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter31_d_87_2" x="1199" y="381" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter32_d_87_2" x="1199" y="453" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter33_d_87_2" x="1523" y="193" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter34_d_87_2" x="1523" y="287" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter35_d_87_2" x="1523" y="381" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter36_d_87_2" x="1523" y="475" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter37_d_87_2" x="1523" y="569" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter38_d_87_2" x="1523" y="663" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter39_d_87_2" x="1847" y="193" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter40_d_87_2" x="1847" y="287" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter41_d_87_2" x="1847" y="381" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter42_d_87_2" x="1847" y="453" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter43_d_87_2" x="1847" y="641" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter44_d_87_2" x="1847" y="547" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter45_d_87_2" x="2171" y="193" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter46_d_87_2" x="2495" y="193" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter47_d_87_2" x="2495" y="265" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter48_d_87_2" x="2495" y="359" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter49_d_87_2" x="2819" y="193" width="264" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter50_d_87_2" x="2819" y="265" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter51_d_87_2" x="2819" y="359" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter52_d_87_2" x="2819" y="453" width="264" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter53_d_87_2" x="116" y="1654" width="224" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter54_d_87_2" x="598" y="1654" width="224" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter55_d_87_2" x="839" y="1654" width="224" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
          <filter id="filter56_d_87_2" x="357" y="1654" width="224" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_87_2" />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape" />
          </filter>
        </defs>
    </svg>
  </div>
)}