import { useRef, useState, useEffect } from "react";
import { zoom } from "d3-zoom";
import { select } from 'd3-selection';

interface Props {
  sharePoint: boolean;
  atlas: boolean;
  website: boolean;
  online: boolean;
  roles: string[];
}

export const ProjectCycle = (props: Props) => {
  const {
    sharePoint,
    atlas,
    website,
    online,
    roles,
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
      <svg width="100%" height="100%" style={{padding:"0 20px 20px 20px"}} viewBox="0 0 3115 2033" fill="none" xmlns="http://www.w3.org/2000/svg" ref={SVG}>
      <g id="Group 78" ref={mapG}>
        <g id="BGLines">
          <rect id="Rectangle 1" x="35" y="136" width="3074" height="1845" rx="30" stroke="#E4882E" strokeWidth="12" />
          <path id="Rectangle 3" d="M1581 1981H65C48.4314 1981 35 1967.57 35 1951V1825" stroke="#BCBEC0" strokeWidth="12" />
          <path id="Rectangle 2" d="M1086 136H3079C3095.57 136 3109 149.431 3109 166V1951C3109 1967.57 3095.57 1981 3079 1981H1116C1099.43 1981 1086 1967.57 1086 1951V1814.43" stroke="#56ACC3" strokeWidth="12" />
          <path id="Line 1" d="M1086 1825L1086 140" stroke="#56ACC3" strokeWidth="6" strokeDasharray="36 36" />
        </g>
        <g id="Formulate" opacity={selectedHeader === 'Formulate' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'Formulate' ? setSelectedHeader('Formulate') : setSelectedHeader(null)}}>
            <circle id="Ellipse 1" cx="97" cy="136" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
            <text id="1" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="90.4219" y="145.28">1</tspan>
            </text>
            <text id="Formulate_2" fill="#E4882E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="62" y="89.28">Formulate</tspan>
            </text>
          </g>
          <g id="Connectors">
            <path id="Rectangle 5" d="M98 171L98 216C98 221.523 102.477 226 108 226H124" stroke="#E4882E" />
            <path id="Rectangle 7" d="M98 284L98 406C98 411.523 102.477 416 108 416H124" stroke="#E4882E" />
            <path id="Rectangle 16" d="M98 484L98 1290C98 1295.52 102.477 1300 108 1300H124" stroke="#E4882E" />
            <path id="Rectangle 18" d="M98 656L98 1462C98 1467.52 102.477 1472 108 1472H124" stroke="#E4882E" />
            <path id="Rectangle 17" d="M98 570L98 1376C98 1381.52 102.477 1386 108 1386H124" stroke="#E4882E" />
            <path id="Rectangle 66" d="M98 569L98 1547C98 1552.52 102.477 1557 108 1557H124" stroke="#E4882E" />
            <path id="Rectangle 67" d="M98 569L98 1670C98 1675.52 102.477 1680 108 1680H124" stroke="#E4882E" />
            <path id="Rectangle 8" d="M98 370L98 492C98 497.523 102.477 502 108 502H124" stroke="#E4882E" />
            <path id="Rectangle 6" d="M98 171L98 302C98 307.523 102.477 312 108 312H124" stroke="#E4882E" />
            <path id="Rectangle 9" d="M98 568L98 598C98 603.523 102.477 608 108 608H124" stroke="#E4882E" />
            <path id="Rectangle 10" d="M98 608L98 702C98 707.523 102.477 712 108 712H124" stroke="#E4882E" />
            <path id="Rectangle 11" d="M98 694L98 824C98 829.523 102.477 834 108 834H124" stroke="#E4882E" />
            <path id="Rectangle 12" d="M98 780L98 910C98 915.523 102.477 920 108 920H124" stroke="#E4882E" />
            <path id="Rectangle 13" d="M98 876L98 995C98 1000.52 102.477 1005 108 1005H124" stroke="#E4882E" />
            <path id="Rectangle 14" d="M98 982L98 1082C98 1087.52 102.477 1092 108 1092H124" stroke="#E4882E" />
            <path id="Rectangle 15" d="M98 1067L98 1186C98 1191.52 102.477 1196 108 1196H124" stroke="#E4882E" />
          </g>
          <g className="PipelineModule Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_2" filter="url(#filter0_d_23:667)">
              <rect x="131" y="208" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="208.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="260.22">Atlas ERP</tspan>
              </text>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="232.22">Pipeline Module&#10;</tspan>
              </text>
            </g>
            <circle id="Ellipse 12" cx="131.5" cy="225.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13" cx="131.5" cy="225.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="PSDDD Offline" opacity={(roles.length === 0 || roles.indexOf("Project Developer") !== -1)  ? 1 : 0.25}>
            <g id="Rectangle 6_3" filter="url(#filter1_d_23:667)">
              <rect x="131" y="294" width="234" height="84" rx="6" fill="white" />
              <rect x="131.5" y="294.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="318.22">Private Sector Donors </tspan>
                <tspan x="151" y="336.22">Due Diligence&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="364.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_2" cx="131.5" cy="311.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_2" cx="131.5" cy="311.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="PIP SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1)  ? 1 : 0.25}>
            <g id="Rectangle 6_4" filter="url(#filter2_d_23:667)">
              <rect x="131" y="398" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="398.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="422.22">Project Initiation Plan&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="450.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_3" cx="131.5" cy="415.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_3" cx="131.5" cy="415.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="PPG SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_5" filter="url(#filter3_d_23:667)">
              <rect x="131" y="484" width="234" height="86" rx="6" fill="white" />
              <rect x="131.5" y="484.5" width="233" height="85" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="508.22">Project Preparation </tspan>
                <tspan x="151" y="526.22">Grant (PPG)&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="554.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_4" cx="131.5" cy="501.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_4" cx="131.5" cy="501.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="ProjectDoc SharePoint Website" opacity={(sharePoint || website) && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_6" filter="url(#filter4_d_23:667)">
              <rect x="131" y="590" width="234" height="84" rx="6" fill="white" />
              <rect x="131.5" y="590.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="614.22">Project Document&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="642.22">SharePoint</tspan>
              </text>
              <text fill="#BCBEC0" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="238.047" y="642.22"> &#38; Public </tspan>
                <tspan x="151" y="660.22">website</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_5" cx="131.5" cy="607.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_5" cx="131.5" cy="607.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="JPPD SharePoint Website" opacity={(sharePoint || website) && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_7" filter="url(#filter5_d_23:667)">
              <rect x="131" y="694" width="234" height="102" rx="6" fill="white" />
              <rect x="131.5" y="694.5" width="233" height="101" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="718.22">Joint Programme </tspan>
                <tspan x="151" y="736.22">Project Document&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="764.22">SharePoint</tspan>
              </text>
              <text fill="#BCBEC0" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="238.047" y="764.22"> &#38; Public </tspan>
                <tspan x="151" y="782.22">website</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_6" cx="131.5" cy="711.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_6" cx="131.5" cy="711.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="WorkshopReport Offline" opacity={roles.length === 0 ? 1 : 0.25}>
            <g id="Rectangle 6_8" filter="url(#filter6_d_23:667)">
              <rect x="131" y="816" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="816.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="840.22">Workshop report&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="868.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_7" cx="131.5" cy="833.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_7" cx="131.5" cy="833.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="SurveyData Offline" opacity={roles.length === 0 ? 1 : 0.25}>
            <g id="Rectangle 6_9" filter="url(#filter7_d_23:667)">
              <rect x="131" y="902" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="902.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="926.22">Survey Data&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="954.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_8" cx="131.5" cy="919.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_8" cx="131.5" cy="919.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="GD Offline" opacity={roles.length === 0 ? 1 : 0.25}>
            <g id="Rectangle 6_10" filter="url(#filter8_d_23:667)">
              <rect x="131" y="988" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="988.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1012.22">Group Discussions&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1040.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_9" cx="131.5" cy="1005.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_9" cx="131.5" cy="1005.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="StakeholderMeetingReport Offline" opacity={roles.length === 0 ? 1 : 0.25}>
            <g id="Rectangle 6_11" filter="url(#filter9_d_23:667)">
              <rect x="131" y="1074" width="234" height="84" rx="6" fill="white" />
              <rect x="131.5" y="1074.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1098.22">Stakeholder Meeting </tspan>
                <tspan x="151" y="1116.22">Reports&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1144.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_10" cx="131.5" cy="1091.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_10" cx="131.5" cy="1091.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="BOTR Offline" opacity={roles.length === 0 ? 1 : 0.25}>
            <g id="Rectangle 6_12" filter="url(#filter10_d_23:667)">
              <rect x="131" y="1178" width="234" height="84" rx="6" fill="white" />
              <rect x="131.5" y="1178.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1202.22">Back to the Office </tspan>
                <tspan x="151" y="1220.22">Reports (BOTR)&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1248.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_11" cx="131.5" cy="1195.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_11" cx="131.5" cy="1195.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="FR Offline" opacity={roles.length === 0 ? 1 : 0.25}>
            <g id="Rectangle 6_13" filter="url(#filter11_d_23:667)">
              <rect x="131" y="1282" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="1282.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1306.22">Feasibility Reports&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1334.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_12" cx="131.5" cy="1299.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_12" cx="131.5" cy="1299.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="GA Offline" opacity={roles.length === 0 ? 1 : 0.25}>
            <g id="Rectangle 6_14" filter="url(#filter12_d_23:667)">
              <rect x="131" y="1368" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="1368.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1392.22">Gender Assesment&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1420.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_13" cx="131.5" cy="1385.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_13" cx="131.5" cy="1385.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="ProjectQA SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1  || roles.indexOf("Quality Assessor") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_15" filter="url(#filter13_d_23:667)">
              <rect x="131" y="1454" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="1454.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1478.22">Project QA Design&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1506.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_14" cx="131.5" cy="1471.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_14" cx="131.5" cy="1471.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="SESP Offline" opacity={roles.length === 0 || roles.indexOf("Project Developer") !== -1 ? 1 : 0.25}>
            <g id="Rectangle 6_16" filter="url(#filter14_d_23:667)">
              <rect x="131" y="1540" width="234" height="102" rx="6" fill="white" />
              <rect x="131.5" y="1540.5" width="233" height="101" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1564.22">Social and </tspan>
                <tspan x="151" y="1582.22">Environmental </tspan>
                <tspan x="151" y="1600.22">Screening Procedure&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1628.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_15" cx="131.5" cy="1557.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_15" cx="131.5" cy="1557.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="RiskRegister Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_17" filter="url(#filter15_d_23:667)">
              <rect x="131" y="1662" width="234" height="66" rx="6" fill="white" />
              <rect x="131.5" y="1662.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1686.22">Risk Register&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1714.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_16" cx="131.5" cy="1679.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_16" cx="131.5" cy="1679.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
        </g>
        <g id="SelectImplementingPartner" opacity={selectedHeader === 'SelectImplementingPartner' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_2"style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'SelectImplementingPartner' ? setSelectedHeader('SelectImplementingPartner') : setSelectedHeader(null)}}>
            <circle id="Ellipse 2" cx="421" cy="136" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
            <text id="Select Implementing Partner" fill="#E4882E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="386" y="25.28">Select&#10;</tspan>
              <tspan x="386" y="57.28">Implementing&#10;</tspan>
              <tspan x="386" y="89.28">Partner</tspan>
            </text>
            <text id="2" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="411.406" y="145.28">2</tspan>
            </text>
          </g>
          <g id="Connectors_2">
            <path id="Rectangle 19" d="M421 171V216C421 221.523 425.477 226 431 226H447" stroke="#E4882E" />
            <path id="Rectangle 20" d="M421 302V424C421 429.523 425.477 434 431 434H447" stroke="#E4882E" />
            <path id="Rectangle 21" d="M421 502V614C421 619.523 425.477 624 431 624H447" stroke="#E4882E" />
            <path id="Rectangle 23" d="M421 588V700C421 705.523 425.477 710 431 710H447" stroke="#E4882E" />
            <path id="Rectangle 24" d="M421 388V510C421 515.523 425.477 520 431 520H447" stroke="#E4882E" />
            <path id="Rectangle 25" d="M421 189V320C421 325.523 425.477 330 431 330H447" stroke="#E4882E" />
          </g>
          <g className="PCAT Offline" opacity={roles.length === 0 || roles.indexOf("Project Developer") !== -1 ? 1 : 0.25}>
            <g id="Rectangle 6_18" filter="url(#filter16_d_23:667)">
              <rect x="454" y="208" width="234" height="84" rx="6" fill="white" />
              <rect x="454.5" y="208.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="232.22">Partner Capacity </tspan>
                <tspan x="474" y="250.22">Assessment Tool (PCAT)&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="474" y="278.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_17" cx="454.5" cy="225.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_17" cx="454.5" cy="225.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="HACT SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_19" filter="url(#filter17_d_23:667)">
              <rect x="454" y="312" width="234" height="84" rx="6" fill="white" />
              <rect x="454.5" y="312.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="336.22">HACT Micro </tspan>
                <tspan x="474" y="354.22">Assessment&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="474" y="382.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_18" cx="454.5" cy="329.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_18" cx="454.5" cy="329.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="RiskRegister Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_20" filter="url(#filter18_d_23:667)">
              <rect x="454" y="416" width="234" height="66" rx="6" fill="white" />
              <rect x="454.5" y="416.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="440.22">Risk Register&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="474" y="468.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_19" cx="454.5" cy="433.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_19" cx="454.5" cy="433.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="LoA Offline" opacity={(roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_21" filter="url(#filter19_d_23:667)">
              <rect x="454" y="606" width="234" height="66" rx="6" fill="white" />
              <rect x="454.5" y="606.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="630.22">LoA or RPA with RPs&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="474" y="658.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_20" cx="454.5" cy="623.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_20" cx="454.5" cy="623.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="ProjectDocument SharePoint Website" opacity={(sharePoint || website) && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_22" filter="url(#filter20_d_23:667)">
              <rect x="454" y="502" width="234" height="84" rx="6" fill="white" />
              <rect x="454.5" y="502.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="526.22">Project Document&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="474" y="554.22">SharePoint</tspan>
              </text>
              <text fill="#BCBEC0" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="561.047" y="554.22"> &#38; Public </tspan>
                <tspan x="474" y="572.22">website</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_21" cx="454.5" cy="519.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_21" cx="454.5" cy="519.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="GA Offline" opacity={(roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_23" filter="url(#filter21_d_23:667)">
              <rect x="454" y="692" width="234" height="66" rx="6" fill="white" />
              <rect x="454.5" y="692.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="474" y="716.22">Grant Agreements&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="474" y="744.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_22" cx="454.5" cy="709.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_22" cx="454.5" cy="709.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
        </g>
        <g id="AppraiseAndApprove" opacity={selectedHeader === 'AppraiseAndApprove' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_3" style={{cursor:"pointer"}} onClick={() => {selectedHeader !== 'AppraiseAndApprove' ? setSelectedHeader('AppraiseAndApprove') : setSelectedHeader(null)}}>
            <circle id="Ellipse 4" cx="745" cy="136" r="31" fill="white" stroke="#E4882E" strokeWidth="8" />
            <text id="Appraise &#38; Approve" fill="#E4882E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="710" y="57.28">Appraise &#38;&#10;</tspan>
              <tspan x="710" y="89.28">Approve</tspan>
            </text>
            <text id="3" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="735.609" y="145.28">3</tspan>
            </text>
          </g>
          <g id="Connectors_3">
            <path id="Rectangle 26" d="M744 171V216C744 221.523 748.477 226 754 226H770" stroke="#E4882E" />
            <path id="Rectangle 27" d="M744 180V302C744 307.523 748.477 312 754 312H764.485" stroke="#E4882E" />
            <path id="Rectangle 28" d="M744 380V492C744 497.523 748.477 502 754 502H770" stroke="#E4882E" />
            <path id="Rectangle 29" d="M744 466V578C744 583.523 748.477 588 754 588H770" stroke="#E4882E" />
            <path id="Rectangle 32" d="M744 466V663C744 668.523 748.477 673 754 673H770" stroke="#E4882E" />
            <path id="Rectangle 33" d="M744 466V768C744 773.523 748.477 778 754 778H770" stroke="#E4882E" />
            <path id="Rectangle 30" d="M744 266V388C744 393.523 748.477 398 754 398H770" stroke="#E4882E" />
            <path id="Rectangle 31" d="M744 171V302C744 307.523 748.477 312 754 312H770" stroke="#E4882E" />
          </g>
          <g className="LPAC Offline" opacity={(roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_24" filter="url(#filter22_d_23:667)">
              <rect x="777" y="208" width="234" height="66" rx="6" fill="white" />
              <rect x="777.5" y="208.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="232.22">LPAC Minutes&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="797" y="260.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_23" cx="777.5" cy="225.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_23" cx="777.5" cy="225.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="ProjIDOutputID Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_25" filter="url(#filter23_d_23:667)">
              <rect x="777" y="294" width="234" height="66" rx="6" fill="white" />
              <rect x="777.5" y="294.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="318.22">Project ID &#38; Output IDs&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="797" y="346.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_24" cx="777.5" cy="311.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_24" cx="777.5" cy="311.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="IBT Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_26" filter="url(#filter24_d_23:667)">
              <rect x="777" y="380" width="234" height="84" rx="6" fill="white" />
              <rect x="777.5" y="380.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="404.22">Indicators, Baseline, </tspan>
                <tspan x="797" y="422.22">Target&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="797" y="450.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_25" cx="777.5" cy="397.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_25" cx="777.5" cy="397.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="RiskRegister Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_27" filter="url(#filter25_d_23:667)">
              <rect x="777" y="484" width="234" height="66" rx="6" fill="white" />
              <rect x="777.5" y="484.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="508.22">Risk Register&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="797" y="536.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_26" cx="777.5" cy="501.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_26" cx="777.5" cy="501.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="GM Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_28" filter="url(#filter26_d_23:667)">
              <rect x="777" y="570" width="234" height="66" rx="6" fill="white" />
              <rect x="777.5" y="570.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="594.22">Gender Marker&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="797" y="622.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_27" cx="777.5" cy="587.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_27" cx="777.5" cy="587.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="Link SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_29" filter="url(#filter27_d_23:667)">
              <rect x="777" y="656" width="234" height="84" rx="6" fill="white" />
              <rect x="777.5" y="656.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="680.22">Link Output IDs to CPD </tspan>
                <tspan x="797" y="698.22">Outputs&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="797" y="726.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_28" cx="777.5" cy="673.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_28" cx="777.5" cy="673.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="OutputIDs SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_30" filter="url(#filter28_d_23:667)">
              <rect x="777" y="760" width="234" height="66" rx="6" fill="white" />
              <rect x="777.5" y="760.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="797" y="784.22">Output ID Markers&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="797" y="812.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_29" cx="777.5" cy="777.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_29" cx="777.5" cy="777.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
        </g>
        <g id="AnnualPlanning" opacity={selectedHeader === 'AnnualPlanning' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_4" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'AnnualPlanning' ? setSelectedHeader('AnnualPlanning') : setSelectedHeader(null)}}>
            <circle id="Ellipse 5" cx="1181" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
            <text id="Annual Planning" fill="#56ACC3" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="1146" y="57.28">Annual&#10;</tspan>
              <tspan x="1146" y="89.28">Planning</tspan>
            </text>
            <text id="4" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="1171.45" y="145.28">4</tspan>
            </text>
          </g>
          <g id="Connectors_4">
            <path id="Rectangle 34" d="M1181 171V216C1181 221.523 1185.48 226 1191 226H1207" stroke="#56ACC3" />
            <path id="Rectangle 35" d="M1181 302V424C1181 429.523 1185.48 434 1191 434H1207" stroke="#56ACC3" />
            <path id="Rectangle 37" d="M1181 388V510C1181 515.523 1185.48 520 1191 520H1207" stroke="#56ACC3" />
            <path id="Rectangle 38" d="M1181 171V320C1181 325.523 1185.48 330 1191 330H1207" stroke="#56ACC3" />
          </g>
          <g className="MinProjBoard Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_31" filter="url(#filter29_d_23:667)">
              <rect x="1214" y="208" width="234" height="84" rx="6" fill="white" />
              <rect x="1214.5" y="208.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1234" y="232.22">Minutes Project Board </tspan>
                <tspan x="1234" y="250.22">Kick-Off&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1234" y="278.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_30" cx="1214.5" cy="225.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_30" cx="1214.5" cy="225.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="AWP Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_32" filter="url(#filter30_d_23:667)">
              <rect x="1214" y="312" width="234" height="84" rx="6" fill="white" />
              <rect x="1214.5" y="312.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1234" y="336.22">AWP/Multi-Year Work </tspan>
                <tspan x="1234" y="354.22">Plan&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1234" y="382.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_31" cx="1214.5" cy="329.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_31" cx="1214.5" cy="329.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="Prompt SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_33" filter="url(#filter31_d_23:667)">
              <rect x="1214" y="416" width="234" height="66" rx="6" fill="white" />
              <rect x="1214.5" y="416.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1234" y="440.22">Prompt&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1234" y="468.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_32" cx="1214.5" cy="433.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_32" cx="1214.5" cy="433.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="HR Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_34" filter="url(#filter32_d_23:667)">
              <rect x="1214" y="502" width="234" height="66" rx="6" fill="white" />
              <rect x="1214.5" y="502.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1234" y="526.22">HR Recriutment Plan&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1234" y="554.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_33" cx="1214.5" cy="519.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_33" cx="1214.5" cy="519.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
        </g>
        <g id="DeliverResults" opacity={selectedHeader === 'DeliverResults' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_5" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'DeliverResults' ? setSelectedHeader('DeliverResults') : setSelectedHeader(null)}}>
            <circle id="Ellipse 6" cx="1505" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
            <text id="Deliver Results" fill="#56ACC3" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="1470" y="57.28">Deliver&#10;</tspan>
              <tspan x="1470" y="89.28">Results</tspan>
            </text>
            <text id="5" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="1495.27" y="145.28">5</tspan>
            </text>
          </g>
          <g id="Connetors">
            <path id="Rectangle 39" d="M1505 171V216C1505 221.523 1509.48 226 1515 226H1531" stroke="#56ACC3" />
            <path id="Rectangle 40" d="M1505 302V424C1505 429.523 1509.48 434 1515 434H1531" stroke="#56ACC3" />
            <path id="Rectangle 41" d="M1505 406V528C1505 533.523 1509.48 538 1515 538H1531" stroke="#56ACC3" />
            <path id="Rectangle 43" d="M1505 406V632C1505 637.523 1509.48 642 1515 642H1531" stroke="#56ACC3" />
            <path id="Rectangle 44" d="M1505 406V736C1505 741.523 1509.48 746 1515 746H1531" stroke="#56ACC3" />
            <path id="Rectangle 42" d="M1505 171V320C1505 325.523 1509.48 330 1515 330H1531" stroke="#56ACC3" />
          </g>
          <g className="MMB Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_35" filter="url(#filter33_d_23:667)">
              <rect x="1538" y="208" width="234" height="84" rx="6" fill="white" />
              <rect x="1538.5" y="208.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="232.22">Managing MYWP &#38; </tspan>
                <tspan x="1558" y="250.22">Budget&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1558" y="278.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_34" cx="1538.5" cy="225.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_34" cx="1538.5" cy="225.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="BTORFV Offline" opacity={(roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_36" filter="url(#filter34_d_23:667)">
              <rect x="1538" y="312" width="234" height="84" rx="6" fill="white" />
              <rect x="1538.5" y="312.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="336.22">BTOR Field Visit by </tspan>
                <tspan x="1558" y="354.22">Project Assurance&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1558" y="382.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_35" cx="1538.5" cy="329.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_35" cx="1538.5" cy="329.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="HACT SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_37" filter="url(#filter35_d_23:667)">
              <rect x="1538" y="416" width="234" height="84" rx="6" fill="white" />
              <rect x="1538.5" y="416.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="440.22">HACT Assurance </tspan>
                <tspan x="1558" y="458.22">Activities&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1558" y="486.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_36" cx="1538.5" cy="433.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_36" cx="1538.5" cy="433.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="MTFPE SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_38" filter="url(#filter36_d_23:667)">
              <rect x="1538" y="520" width="234" height="84" rx="6" fill="white" />
              <rect x="1538.5" y="520.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="544.22">Mid-Term/Final Project </tspan>
                <tspan x="1558" y="562.22">Evaluation&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1558" y="590.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_37" cx="1538.5" cy="537.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_37" cx="1538.5" cy="537.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="PBRM Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_39" filter="url(#filter37_d_23:667)">
              <rect x="1538" y="624" width="234" height="84" rx="6" fill="white" />
              <rect x="1538.5" y="624.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="648.22">Minutes: Project Board </tspan>
                <tspan x="1558" y="666.22">to Revise MYWP&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1558" y="694.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_38" cx="1538.5" cy="641.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_38" cx="1538.5" cy="641.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="MYWP Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_40" filter="url(#filter38_d_23:667)">
              <rect x="1538" y="728" width="234" height="66" rx="6" fill="white" />
              <rect x="1538.5" y="728.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1558" y="752.22">MYWP Revision&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1558" y="780.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_39" cx="1538.5" cy="745.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_39" cx="1538.5" cy="745.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
        </g>
        <g id="Monitor" opacity={selectedHeader === 'Monitor' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_6" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'Monitor' ? setSelectedHeader('Monitor') : setSelectedHeader(null)}}>
            <circle id="Ellipse 7" cx="1829" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
            <text id="Monitor_2" fill="#56ACC3" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="1794" y="89.28">Monitor</tspan>
            </text>
            <text id="6" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="1819.27" y="145.28">6</tspan>
            </text>
          </g>
          <g id="Connectors_5">
            <path id="Rectangle 45" d="M1829 171V216C1829 221.523 1833.48 226 1839 226H1855" stroke="#56ACC3" />
            <path id="Rectangle 46" d="M1829 302V424C1829 429.523 1833.48 434 1839 434H1855" stroke="#56ACC3" />
            <path id="Rectangle 47" d="M1829 388V510C1829 515.523 1833.48 520 1839 520H1855" stroke="#56ACC3" />
            <path id="Rectangle 48" d="M1829 388V614C1829 619.523 1833.48 624 1839 624H1855" stroke="#56ACC3" />
            <path id="Rectangle 49" d="M1829 388V718C1829 723.523 1833.48 728 1839 728H1855" stroke="#56ACC3" />
            <path id="Rectangle 50" d="M1829 171V320C1829 325.523 1833.48 330 1839 330H1855" stroke="#56ACC3" />
          </g>
          <g className="UREI Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1 || roles.indexOf("M&E Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_41" filter="url(#filter39_d_23:667)">
              <rect x="1862" y="208" width="234" height="84" rx="6" fill="white" />
              <rect x="1862.5" y="208.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="232.22">Update Results for Each </tspan>
                <tspan x="1882" y="250.22">Indicator&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1882" y="278.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_40" cx="1862.5" cy="225.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_40" cx="1862.5" cy="225.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="PQAI SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Quality Assessor") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_42" filter="url(#filter40_d_23:667)">
              <rect x="1862" y="312" width="234" height="84" rx="6" fill="white" />
              <rect x="1862.5" y="312.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="336.22">Project QA - </tspan>
                <tspan x="1882" y="354.22">Implementation&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1882" y="382.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_41" cx="1862.5" cy="329.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_41" cx="1862.5" cy="329.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="RiskRegister Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_43" filter="url(#filter41_d_23:667)">
              <rect x="1862" y="416" width="234" height="66" rx="6" fill="white" />
              <rect x="1862.5" y="416.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="440.22">Risk Register&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1882" y="468.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_42" cx="1862.5" cy="433.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_42" cx="1862.5" cy="433.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="BTORFV Offline" opacity={(roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_44" filter="url(#filter42_d_23:667)">
              <rect x="1862" y="502" width="234" height="84" rx="6" fill="white" />
              <rect x="1862.5" y="502.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="526.22">BTOR Field Visit by </tspan>
                <tspan x="1882" y="544.22">Project Assurance&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1882" y="572.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_43" cx="1862.5" cy="519.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_43" cx="1862.5" cy="519.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="LLR Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_45" filter="url(#filter43_d_23:667)">
              <rect x="1862" y="710" width="234" height="84" rx="6" fill="white" />
              <rect x="1862.5" y="710.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="734.22">Lessons Learned in </tspan>
                <tspan x="1882" y="752.22">ROAR&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1882" y="780.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_44" cx="1862.5" cy="727.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_44" cx="1862.5" cy="727.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="LLPR Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_46" filter="url(#filter44_d_23:667)">
              <rect x="1862" y="606" width="234" height="84" rx="6" fill="white" />
              <rect x="1862.5" y="606.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="1882" y="630.22">Lessons Learned in </tspan>
                <tspan x="1882" y="648.22">Project Report&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="1882" y="676.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_45" cx="1862.5" cy="623.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_45" cx="1862.5" cy="623.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
        </g>
        <g id="Oversight" opacity={selectedHeader === 'Oversight' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_7" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'Oversight' ? setSelectedHeader('Oversight') : setSelectedHeader(null)}}>
            <circle id="Ellipse 8" cx="2153" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
            <text id="Oversight_2" fill="#56ACC3" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="2118" y="89.28">Oversight</tspan>
            </text>
            <text id="7" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="2144.28" y="145.28">7</tspan>
            </text>
          </g>
          <path id="Connetors_2" d="M2153 171V216C2153 221.523 2157.48 226 2163 226H2179" stroke="#56ACC3" />
          <g className="MPBRM Offline" opacity={(roles.length === 0 || roles.indexOf("Project Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_47" filter="url(#filter45_d_23:667)">
              <rect x="2186" y="208" width="234" height="84" rx="6" fill="white" />
              <rect x="2186.5" y="208.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2206" y="232.22">Minutes Project Board </tspan>
                <tspan x="2206" y="250.22">Regular Meeting&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2206" y="278.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_46" cx="2186.5" cy="225.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_46" cx="2186.5" cy="225.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
        </g>
        <g id="MakeChange" opacity={selectedHeader === 'MakeChange' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_8" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'MakeChange' ? setSelectedHeader('MakeChange') : setSelectedHeader(null)}}>
            <circle id="Ellipse 9" cx="2477" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
            <text id="Make Change" fill="#56ACC3" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="2442" y="57.28">Make&#10;</tspan>
              <tspan x="2442" y="89.28">Change</tspan>
            </text>
            <text id="8" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="2467.3" y="145.28">8</tspan>
            </text>
          </g>
          <g id="Connectors_6">
            <path id="Rectangle 52" d="M2477 171V216C2477 221.523 2481.48 226 2487 226H2503" stroke="#56ACC3" />
            <path id="Rectangle 53" d="M2477 302V406C2477 411.523 2481.48 416 2487 416H2503" stroke="#56ACC3" />
            <path id="Rectangle 54" d="M2477 171V301C2477 306.523 2481.48 311 2487 311H2503" stroke="#56ACC3" />
          </g>
          <g className="RiskRegister Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_48" filter="url(#filter46_d_23:667)">
              <rect x="2510" y="208" width="234" height="66" rx="6" fill="white" />
              <rect x="2510.5" y="208.5" width="233" height="65" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2530" y="232.22">Risk Register&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2530" y="260.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_47" cx="2510.5" cy="225.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_47" cx="2510.5" cy="225.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="MPBRM Offline" opacity={(roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_49" filter="url(#filter47_d_23:667)">
              <rect x="2510" y="294" width="234" height="84" rx="6" fill="white" />
              <rect x="2510.5" y="294.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2530" y="318.22">Minutes Project Board </tspan>
                <tspan x="2530" y="336.22">Regular Meeting&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2530" y="364.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_48" cx="2510.5" cy="311.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_48" cx="2510.5" cy="311.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="PD SharePoint Website" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Project Developer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_50" filter="url(#filter48_d_23:667)">
              <rect x="2510" y="398" width="234" height="84" rx="6" fill="white" />
              <rect x="2510.5" y="398.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2530" y="422.22">Project Document&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2530" y="450.22">SharePoint</tspan>
              </text>
              <text fill="#BCBEC0" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2617.05" y="450.22"> &#38; Public </tspan>
                <tspan x="2530" y="468.22">Website</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_49" cx="2510.5" cy="415.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_49" cx="2510.5" cy="415.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
        </g>
        <g id="Report" opacity={selectedHeader === 'Report' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_9" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'Report' ? setSelectedHeader('Report') : setSelectedHeader(null)}}>
            <circle id="Ellipse 10" cx="2801" cy="136" r="31" fill="white" stroke="#56ACC3" strokeWidth="8" />
            <text id="Report_2" fill="#56ACC3" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="2766" y="89.28">Report</tspan>
            </text>
            <text id="9" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="2791.27" y="145.28">9</tspan>
            </text>
          </g>
          <g id="Connectors_7">
            <path id="Rectangle 55" d="M2801 171V216C2801 221.523 2805.48 226 2811 226H2827" stroke="#56ACC3" />
            <path id="Rectangle 56" d="M2801 284V406C2801 411.523 2805.48 416 2811 416H2827" stroke="#56ACC3" />
            <path id="Rectangle 57" d="M2801 388V510C2801 515.523 2805.48 520 2811 520H2827" stroke="#56ACC3" />
            <path id="Rectangle 58" d="M2801 171V302C2801 307.523 2805.48 312 2811 312H2827" stroke="#56ACC3" />
          </g>
          <g className="FACE Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_51" filter="url(#filter49_d_23:667)">
              <rect x="2834" y="208" width="234" height="66" rx="6" fill="white" />
              <rect x="2834.5" y="208.5" width="233" height="65" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2854" y="232.22">FACE Form&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2854" y="260.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_50" cx="2834.5" cy="225.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_50" cx="2834.5" cy="225.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="CDR Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Programme Manager") !== -1 || roles.indexOf("RR") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_52" filter="url(#filter50_d_23:667)">
              <rect x="2834" y="294" width="234" height="84" rx="6" fill="white" />
              <rect x="2834.5" y="294.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2854" y="318.22">Combined Delivery </tspan>
                <tspan x="2854" y="336.22">Report&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2854" y="364.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_51" cx="2834.5" cy="311.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_51" cx="2834.5" cy="311.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="DPPR Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_53" filter="url(#filter51_d_23:667)">
              <rect x="2834" y="398" width="234" height="84" rx="6" fill="white" />
              <rect x="2834.5" y="398.5" width="233" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2854" y="422.22">Donor/Project Progress </tspan>
                <tspan x="2854" y="440.22">Report&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2854" y="468.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_52" cx="2834.5" cy="415.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_52" cx="2834.5" cy="415.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="OREOI Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_54" filter="url(#filter52_d_23:667)">
              <rect x="2834" y="502" width="234" height="84" rx="6" fill="white" />
              <rect x="2834.5" y="502.5" width="233" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="2854" y="526.22">Output Result for Each </tspan>
                <tspan x="2854" y="544.22">Output Indicator&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="2854" y="572.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_53" cx="2834.5" cy="519.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_53" cx="2834.5" cy="519.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
        </g>
        <g id="Close" opacity={selectedHeader === 'Close' || selectedHeader === null ? 1 : 0.25}>
          <g id="Head_10" style={{cursor:"pointer"}}  onClick={() => {selectedHeader !== 'Close' ? setSelectedHeader('Close') : setSelectedHeader(null)}}>
            <circle id="Ellipse 11" cx="35" cy="1824" r="31" fill="white" stroke="#BCBEC0" strokeWidth="8" />
            <text id="10" fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="18.5" y="1833.28">10</tspan>
            </text>
            <text id="Close_2" fill="#BCBEC0" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="32" fontWeight="bold" letterSpacing="0em">
              <tspan x="35" y="2026.28">Close</tspan>
            </text>
          </g>
          <g id="Connectors_8">
            <path id="Rectangle 62" d="M70 1824L100.872 1824C106.395 1824 110.872 1828.48 110.872 1834L110.872 1865C110.872 1870.52 115.349 1875 120.872 1875L124 1875" stroke="#BCBEC0" />
            <path id="Rectangle 63" d="M70 1824L341.872 1824C347.395 1824 351.872 1828.48 351.872 1834L351.872 1865C351.872 1870.52 356.349 1875 361.872 1875L365 1875" stroke="#BCBEC0" />
            <path id="Rectangle 64" d="M70 1824L582.872 1824C588.395 1824 592.872 1828.48 592.872 1834L592.872 1865C592.872 1870.52 597.349 1875 602.872 1875L606 1875" stroke="#BCBEC0" />
            <path id="Rectangle 65" d="M70 1824L823.872 1824C829.395 1824 833.872 1828.48 833.872 1834L833.872 1865C833.872 1870.52 838.349 1875 843.872 1875L847 1875" stroke="#BCBEC0" />
          </g>
          <g className="FPR Offline" opacity={(roles.length === 0 || roles.indexOf("Project Manager") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_55" filter="url(#filter53_d_23:667)">
              <rect x="131" y="1857" width="194" height="84" rx="6" fill="white" />
              <rect x="131.5" y="1857.5" width="193" height="83" rx="5.5" stroke="#D52B1E" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="151" y="1881.22">Final Project </tspan>
                <tspan x="151" y="1899.22">Report&#10;</tspan>
              </text>
              <text fill="#D52B1E" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="151" y="1927.22">Offline</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_54" cx="131.5" cy="1874.5" r="7" fill="white" stroke="#D52B1E" />
            <circle id="Ellipse 13_54" cx="131.5" cy="1874.5" r="4" fill="#D52B1E" stroke="#D52B1E" />
          </g>
          <g className="PQAC SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Project Board") !== -1 || roles.indexOf("Programme Officer") !== -1 || roles.indexOf("Quality Assessor") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_56" filter="url(#filter54_d_23:667)">
              <rect x="613" y="1857" width="194" height="84" rx="6" fill="white" />
              <rect x="613.5" y="1857.5" width="193" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="633" y="1881.22">Project QA - </tspan>
                <tspan x="633" y="1899.22">Closure&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="633" y="1927.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_55" cx="613.5" cy="1874.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_55" cx="613.5" cy="1874.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="PCM Atlas" opacity={atlas && online && (roles.length === 0 || roles.indexOf("Programme Officer") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_57" filter="url(#filter55_d_23:667)">
              <rect x="854" y="1857" width="194" height="84" rx="6" fill="white" />
              <rect x="854.5" y="1857.5" width="193" height="83" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="874" y="1881.22">Project Closure </tspan>
                <tspan x="874" y="1899.22">Manager&#10;</tspan>
              </text>
              <text fill="#014B7A" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="874" y="1927.22">Atlas ERP</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_56" cx="854.5" cy="1874.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_56" cx="854.5" cy="1874.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
          <g className="ERC SharePoint" opacity={sharePoint && online && (roles.length === 0 || roles.indexOf("Programme Officer OAI") !== -1) ? 1 : 0.25}>
            <g id="Rectangle 6_58" filter="url(#filter56_d_23:667)">
              <rect x="372" y="1857" width="194" height="102" rx="6" fill="white" />
              <rect x="372.5" y="1857.5" width="193" height="101" rx="5.5" stroke="#0F8B79" />
            </g>
            <g>
              <text fill="black" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" letterSpacing="0em">
                <tspan x="392" y="1881.22">Mid-Term/Final </tspan>
                <tspan x="392" y="1899.22">Project Evaluation </tspan>
                <tspan x="392" y="1917.22">(ERC)&#10;</tspan>
              </text>
              <text fill="#028085" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Proxima Nova" fontSize="18" fontStyle="italic" letterSpacing="0em">
                <tspan x="392" y="1945.22">SharePoint</tspan>
              </text>
            </g>
            <circle id="Ellipse 12_57" cx="372.5" cy="1874.5" r="7" fill="white" stroke="#0F8B79" />
            <circle id="Ellipse 13_57" cx="372.5" cy="1874.5" r="4" fill="#0F8B79" stroke="#0F8B79" />
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_d_23:667" x="116" y="193" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter1_d_23:667" x="116" y="279" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter2_d_23:667" x="116" y="383" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter3_d_23:667" x="116" y="469" width="264" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter4_d_23:667" x="116" y="575" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter5_d_23:667" x="116" y="679" width="264" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter6_d_23:667" x="116" y="801" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter7_d_23:667" x="116" y="887" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter8_d_23:667" x="116" y="973" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter9_d_23:667" x="116" y="1059" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter10_d_23:667" x="116" y="1163" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter11_d_23:667" x="116" y="1267" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter12_d_23:667" x="116" y="1353" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter13_d_23:667" x="116" y="1439" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter14_d_23:667" x="116" y="1525" width="264" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter15_d_23:667" x="116" y="1647" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter16_d_23:667" x="439" y="193" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter17_d_23:667" x="439" y="297" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter18_d_23:667" x="439" y="401" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter19_d_23:667" x="439" y="591" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter20_d_23:667" x="439" y="487" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter21_d_23:667" x="439" y="677" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter22_d_23:667" x="762" y="193" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter23_d_23:667" x="762" y="279" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter24_d_23:667" x="762" y="365" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter25_d_23:667" x="762" y="469" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter26_d_23:667" x="762" y="555" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter27_d_23:667" x="762" y="641" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter28_d_23:667" x="762" y="745" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter29_d_23:667" x="1199" y="193" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter30_d_23:667" x="1199" y="297" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter31_d_23:667" x="1199" y="401" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter32_d_23:667" x="1199" y="487" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter33_d_23:667" x="1523" y="193" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter34_d_23:667" x="1523" y="297" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter35_d_23:667" x="1523" y="401" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter36_d_23:667" x="1523" y="505" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter37_d_23:667" x="1523" y="609" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter38_d_23:667" x="1523" y="713" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter39_d_23:667" x="1847" y="193" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter40_d_23:667" x="1847" y="297" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter41_d_23:667" x="1847" y="401" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter42_d_23:667" x="1847" y="487" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter43_d_23:667" x="1847" y="695" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter44_d_23:667" x="1847" y="591" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter45_d_23:667" x="2171" y="193" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter46_d_23:667" x="2495" y="193" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter47_d_23:667" x="2495" y="279" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter48_d_23:667" x="2495" y="383" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter49_d_23:667" x="2819" y="193" width="264" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter50_d_23:667" x="2819" y="279" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter51_d_23:667" x="2819" y="383" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter52_d_23:667" x="2819" y="487" width="264" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter53_d_23:667" x="116" y="1842" width="224" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter54_d_23:667" x="598" y="1842" width="224" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter55_d_23:667" x="839" y="1842" width="224" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
        <filter id="filter56_d_23:667" x="357" y="1842" width="224" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_23:667" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23:667" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23:667" result="shape" />
        </filter>
      </defs>
    </svg>
  </div>
)}