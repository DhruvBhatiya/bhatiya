import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
} from "@coreui/react";
import { DocsLink } from "src/reusable";
import { Data_LatestNews } from "../Data";


const LatestNews = () => {
  const [activeIndex] = useState(1);

  return (
    <>
      {/* <CCard>
          <CCardHeader>
            Carousel animation with autoSlide
          </CCardHeader>
          <CCardBody>
            <CCarousel animate autoSlide={3000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                  <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
          </CCardBody>
        </CCard> */}
      <CCard className="border-color-none bg-color-none">
        <CCarousel animate autoSlide={3000}>
          <CCarouselIndicators />
          <CCarouselInner>

          {Data_LatestNews.map((slider, index) => (

            <CCarouselItem>
              <img className="d-block w-100" src={slider.image} alt="slide 1" />
              <CCarouselCaption>
                <h3>{slider.title}</h3>
                {/* <p>{slider.title}</p> */}
              </CCarouselCaption>
            </CCarouselItem>

          ))}

             {/* <CCarouselItem>
               <img className="d-block w-100" src={slides[1]} alt="slide 2" />
               <CCarouselCaption>
                 <h3>Slide 2</h3>
                 <p>Slide 2</p>
               </CCarouselCaption>
             </CCarouselItem>
             <CCarouselItem>
               <img className="d-block w-100" src={slides[2]} alt="slide 3" />
               <CCarouselCaption>
                 <h3>Slide 3</h3>
                 <p>Slide 3</p>
               </CCarouselCaption>
             </CCarouselItem> */}

          </CCarouselInner>
          <CCarouselControl direction="prev" />
          <CCarouselControl direction="next" />
        </CCarousel>
      </CCard>
    </>
  );
};

export default LatestNews;
