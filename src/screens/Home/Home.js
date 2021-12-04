import React, { lazy } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CWidgetDropdown,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetProgressIcon,
  CWidgetIcon
} from "@coreui/react";
import ChartLineSimple from "../../views/charts/ChartLineSimple";
import ChartBarSimple from "../../views/charts/ChartBarSimple";

import CIcon from "@coreui/icons-react";
import MainSlider from "src/componets/Sliders/MainSlider";
import { Link } from "react-router-dom";
import LatestNews from "src/componets/Sliders/LatestNews";

// import MainChartExample from "../charts/MainChartExample.js";

// const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
// const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const Home = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" xl="8">
          <MainSlider />
        </CCol>
        <CCol xs="12" xl="4">
          <CRow>
            <CCol sm="12" md="12">
              <Link to="/YuvaCommittee">
                <CWidgetProgressIcon
                  // className="mb-0"
                  header="100"
                  text="Yuva Committee Member"
                  color="gradient-success"
                  inverse
                >
                  <CIcon name="cil-people" height="36" />
                </CWidgetProgressIcon>
              </Link>
            </CCol>
            <CCol sm="12" md="12">
              <Link to="/PragatiMandal">
                <CWidgetProgressIcon
                  header="150"
                  text="Pragati Mandal Committee Member"
                  color="gradient-warning"
                  inverse
                >
                  <CIcon name="cil-people" height="36" />
                </CWidgetProgressIcon>
              </Link>
            </CCol>
            <CCol sm="12" md="12">
              <Link to="/BaresiCommittee">
                <CWidgetProgressIcon
                  header="350"
                  text="Baresi Committee Member"
                  color="gradient-info"
                  inverse
                >
                  <CIcon name="cil-people" height="36" />
                </CWidgetProgressIcon>
              </Link>
            </CCol>
            {/* <CCol sm="12" md="12">

              <CWidgetProgressIcon
                header="350"
                text="Committee Member"
                color="gradient-primary"
                inverse
              >
                <CIcon name="cil-people" height="36" />
              </CWidgetProgressIcon>

            </CCol> */}




          </CRow>

        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" xl="6">
          <CCard color="gradient-secondary">
            <CCardHeader>
              <h4 id="traffic" className="card-title mb-0">
                Notice Board
              </h4>
            </CCardHeader>
            <CCardBody>
              <div>
                <marquee
                  className="pt-15 pb-15"
                  behavior="scroll" direction="UP" scrolldelay="500"
                  height="195"

                >
                  Welcome You, BHATIYA YUVA COMMITTEE, MEHSANA WEBSITE{" "}
                </marquee>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" xl="6">
          <CCard color="gradient-secondary">
            <CCardHeader>
              <h4 id="traffic" className="card-title mb-0">
                Jobs
              </h4>
            </CCardHeader>
            <CCardBody>
              <div>
                <marquee
                  className="pt-15 pb-15"
                  behavior="scroll" direction="UP" scrolldelay="500"
                  height="195"
                >
                  Welcome You, BHATIYA YUVA COMMITTEE, MEHSANA WEBSITE{" "}
                </marquee>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* Events and News */}
      <CRow>
        <CCol xs="12" xl="6">
          <CCard>
            <CCardHeader>
              {" "}
              <h4 id="traffic" className="card-title mb-0">
                Events
              </h4>
            </CCardHeader>
            <CCardBody>
              <MainSlider />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" xl="6">
          <CCard>
            <CCardHeader>
              {" "}
              <h4 id="traffic" className="card-title mb-0">
                Latest News
              </h4>
            </CCardHeader>
            <CCardBody>
              <LatestNews />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* Metrimonial */}
      <CRow>
        <CCol xl="12">
          {/* <CCard> */}
          <CCardHeader>
            {" "}
            <h4 id="traffic" className="card-title mb-0">
              Metrimonial
            </h4>
          </CCardHeader>
          {/* </CCard> */}
        </CCol>
        <CCol xs="12" xl="6">
          <CCard>
            <CCardHeader>Boy's</CCardHeader>
            <CCardBody>
              <div>
                <marquee
                  className="pt-15 pb-15"
                  direction="up"
                  width="100%"
                  height="195"
                  behavior="scroll"  scrolldelay="200"
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                >
                  <ul>
                    <li>
                      <CCol lg="12">
                        <CWidgetIcon text="MCA" header="Xyz Bhatiya" color="info">
                          <CIcon width={24} name="cil-user" />
                        </CWidgetIcon>
                      </CCol>
                    </li>
                    <li>Boy's List</li>
                    <li>Boy's List</li>
                    <li>Boy's List</li>
                    <li>Boy's List</li>
                    <li>Boy's List</li>
                    <li>Boy's List</li>
                    <li>Boy's List</li>
                    <li>Boy's List</li>
                  </ul>
                </marquee>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" xl="6">
          <CCard>
            <CCardHeader>Girl's</CCardHeader>
            <CCardBody>
              <div>
                <marquee
                  className="pt-15 pb-15"
                  direction="up"
                  width="100%"
                  height="195"
                  behavior="scroll"  scrolldelay="200"
                 onmouseover="this.stop();"
           onmouseout="this.start();"
                >
                  <ul>
                    <li>Girl's List</li>
                    <li>Girl's List</li>
                    <li>Girl's List</li>
                    <li>Girl's List</li>
                    <li>Girl's List</li>
                    <li>Girl's List</li>
                    <li>Girl's List</li>
                    <li>Girl's List</li>
                    <li>Girl's List</li>
                  </ul>
                </marquee>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Home;
