import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import {Button} from "reactstrap"
import "./certs.css"
import aws from "../certificates/1.JPG"
import bnb from "../certificates/2.JPG"
import awsc from "../certificates/3.JPG"
import ibm from "../certificates/4.JPG"
import leeds from "../certificates/5.JPG"
import cisco from "../certificates/cisco.jpg"
import jpmc from "../certificates/JPMC.jpg"




const CarouselPage = () => {
  return (
    <div className="certs" id="certs">
      <h1 >Achievements</h1>
      
    <MDBContainer className="cert-container">
      <MDBCarousel
      activeItem={1}
      length={7}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={aws}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption ><p style={{background:"rgb(17,27,51)"
            ,opacity:"0.5"
        
        }}>1/7</p></MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={bnb}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption ><p style={{background:"rgb(17,27,51)"
            ,opacity:"0.5"
        
        }}>2/7</p></MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={awsc}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption ><p style={{background:"rgb(17,27,51)"
            ,opacity:"0.5"
        
        }}>3/7</p></MDBCarouselCaption>
        </MDBCarouselItem>
                  

        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={ibm}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption ><p style={{background:"rgb(17,27,51)"
            ,opacity:"0.5"
        
        }}>4/7</p></MDBCarouselCaption>
        </MDBCarouselItem>
        
        <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src={leeds}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption ><p style={{background:"rgb(17,27,51)"
            ,opacity:"0.5"
        
        }}>5/7</p></MDBCarouselCaption>
        </MDBCarouselItem>

        
        <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src={cisco}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption ><p style={{background:"rgb(17,27,51)"
            ,opacity:"0.5"
        
        }}>6/7</p></MDBCarouselCaption>
        </MDBCarouselItem>       
        
         <MDBCarouselItem itemId="7">
          <MDBView>
            <img
              className="d-block w-100"
              src={jpmc}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption ><p style={{background:"rgb(17,27,51)"
            ,opacity:"0.5"
        
        }}>7/7</p></MDBCarouselCaption>
        </MDBCarouselItem>

      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    <div className="certs-button">
    <a href="https://www.linkedin.com/in/arjun-tarakesh/" target="_blank"><button class="button-one" >View Credentials</button></a>
    </div>
    
    </div>
  );
}

export default CarouselPage;