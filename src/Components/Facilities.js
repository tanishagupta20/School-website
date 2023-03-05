import React, { useEffect, useRef } from "react";
import './Facilities.css'

function Facilities() {


    let currentLocation = 1;
    let numOfPapers = 10;
    let maxLocation = numOfPapers + 1;

    useEffect(() => {
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        prevBtn.addEventListener("click", goPrevPage);
        nextBtn.addEventListener("click", goNextPage);
    }, []);

    function openBook() {
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");
        book.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }

    function closeBook(isAtBeginning) {
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");
        if (isAtBeginning) {
            book.style.transform = "translateX(0%)";
        } else {
            book.style.transform = "translateX(100%)";
        }

        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }

    function goNextPage() {

        const paper1 = document.querySelector("#flipPage1");
        const paper2 = document.querySelector("#flipPage2");
        const paper3 = document.querySelector("#flipPage3");
        const paper4 = document.querySelector("#flipPage4");
        const paper5 = document.querySelector("#flipPage5");
        const paper6 = document.querySelector("#flipPage6");
        const paper7 = document.querySelector("#flipPage7");
        const paper8 = document.querySelector("#flipPage8");
        const paper9 = document.querySelector("#flipPage9");
        const paper10 = document.querySelector("#flipPage10");
        if (currentLocation < maxLocation) {
            switch (currentLocation) {
                case 1:
                    openBook();
                    paper1.classList.add("flipped");
                    paper1.style.zIndex = 1;
                    break;
                case 2:
                    paper2.classList.add("flipped");
                    paper2.style.zIndex = 2;
                    break;
                case 3:
                    paper3.classList.add("flipped");
                    paper3.style.zIndex = 3;
                    break;
                case 4:
                    paper4.classList.add("flipped");
                    paper4.style.zIndex = 4;
                    break;
                case 5:
                    paper5.classList.add("flipped");
                    paper5.style.zIndex = 5;
                    break;
                case 6:
                    paper6.classList.add("flipped");
                    paper6.style.zIndex = 6;
                    break;
                case 7:
                    paper7.classList.add("flipped");
                    paper7.style.zIndex = 7;
                    break;
                case 8:
                    paper8.classList.add("flipped");
                    paper8.style.zIndex = 8;
                    break;
                case 9:
                    paper9.classList.add("flipped");
                    paper9.style.zIndex = 9;
                    break;
                case 10:
                    paper10.classList.add("flipped");
                    paper10.style.zIndex = 10;
                    closeBook(false);
                    break;


                default:
                    throw new Error("unkown state");
            }
            currentLocation++;
        }
    }

    function goPrevPage() {
        const paper1 = document.querySelector("#flipPage1");
        const paper2 = document.querySelector("#flipPage2");
        const paper3 = document.querySelector("#flipPage3");
        const paper4 = document.querySelector("#flipPage4");
        const paper5 = document.querySelector("#flipPage5");
        const paper6 = document.querySelector("#flipPage6");
        const paper7 = document.querySelector("#flipPage7");
        const paper8 = document.querySelector("#flipPage8");
        const paper9 = document.querySelector("#flipPage9");
        const paper10 = document.querySelector("#flipPage10");
        if (currentLocation > 1) {
            switch (currentLocation) {
                case 2:
                    closeBook(true);
                    paper1.classList.remove("flipped");
                    paper1.style.zIndex = 10;
                    break;
                case 3:
                    paper2.classList.remove("flipped");
                    paper2.style.zIndex = 9;
                    break;
                case 4:
                    paper3.classList.remove("flipped");
                    paper3.style.zIndex = 8;
                    break;
                case 5:
                    paper4.classList.remove("flipped");
                    paper4.style.zIndex = 7;
                    break;
                case 6:
                    paper5.classList.remove("flipped");
                    paper5.style.zIndex = 6;
                    break;
                case 7:
                    paper6.classList.remove("flipped");
                    paper6.style.zIndex = 5;
                    break;
                case 8:
                    paper7.classList.remove("flipped");
                    paper7.style.zIndex = 4;
                    break;
                case 9:
                    paper8.classList.remove("flipped");
                    paper8.style.zIndex = 3;
                    break;
                case 10:
                    paper9.classList.remove("flipped");
                    paper9.style.zIndex = 2;
                    break;
                case 11:
                    openBook()
                    paper10.classList.remove("flipped");
                    paper10.style.zIndex = 1;
                    break;

                default:
                    throw new Error("unkown state");
            }

            currentLocation--;
        }
    }


    return (

        <div className="book-container" id="events" >

            {/*  Previous Button  */}
            <button id="prev-btn" className="flip-btn">
                <i className="bi bi-arrow-left-circle-fill"></i>
            </button>


            {/*  Book  */}
            <div id="book" className="book">

                {/*  Paper 1  */}
                <div id="flipPage1" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h1 style={{ marginTop: 0 }}>FACILITIES</h1>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='students participating in a hackathon' />
                        </div>
                    </div>
                </div>

                {/*  Paper 2  */}
                <div id="flipPage2" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>Qualified, dedicated and inspiring faculty</h2>
                            <p>A knowledgeable faculty can offer specific knowledge and abilities, and commitment and motivation are crucial in creating a healthy learning environment and assisting students in achieving their full potential.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='students participating in a competitive programming event' />
                        </div>
                    </div>
                </div>

                {/*  Paper 3  */}
                <div id="flipPage3" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>Creating an English atmosphere</h2>
                            <p>The improvement of pupils' language abilities is given priority in our school that places a high priority on developing an English-speaking environment and delivering high-quality instruction.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='an esports event in progess' />
                        </div>
                    </div>
                </div>

                {/*  Paper 4  */}
                <div id="flipPage4" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>Yoga, Aerobics and P.T.</h2>
                            <p>Yoga, aerobics, and physical training programs are available at our school to assist students stay physically fit, manage stress, and improve their focus and mental alertness. A well-rounded education must include physical activities since they keep pupils fit and enable them to concentrate on their schoolwork.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='video editing' />
                        </div>
                    </div>
                </div>

                {/*  Paper 5  */}
                <div id="flipPage5" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>Stress Free Education and Healthy Environment</h2>
                            <p>Our institution offers students a stress-free educational experience and a positive environment that supports their mental and emotional well-being.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='a person delivering a talk' />
                        </div>
                    </div>
                </div>

                {/*  Paper 6  */}
                <div id="flipPage6" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>RO System and good Sanitation Facilities</h2>
                            <p>Our school guarantees that kids remain healthy and free from infections by providing a clean and hygienic environment with good sanitation facilities, including a RO system for safe drinking water.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='a person delivering a talk' />
                        </div>
                    </div>
                </div>

                {/* Paper 7 */}
                <div id="flipPage7" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>Well furnished Classrooms</h2>
                            <p>A school that provides well-furnished classrooms is equipped with modern teaching aids, such as interactive whiteboards, projectors, and comfortable seating arrangements. These resources help create an engaging and effective learning environment that helps students learn more effectively.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='a person delivering a talk' />
                        </div>
                    </div>
                </div>

                {/* Paper 8 */}
                <div id="flipPage8" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>Shaping the minds of tiny tots and setting new standards</h2>
                            <p>In order to give pupils a solid basis for both their academic and personal growth, our school lays a heavy emphasis on developing young children's minds and establishing new standards. This can entail giving kids the chance to explore and learn new things, motivating them to ask questions, and fostering the development of their critical thinking abilities.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='a person delivering a talk' />
                        </div>
                    </div>
                </div>

                {/* Paper 9 */}
                <div id="flipPage9" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>Conducting various competitions to inculcate in children a 'Seeking Spirit'</h2>
                            <p>Several competitions are held at our school to support pupils to cultivate an inquiry-based mindset and a thirst for knowledge. Teamwork and leadership abilities can be developed through competitions.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <img src="" alt='a person delivering a talk' />
                        </div>
                    </div>
                </div>

                {/* Paper 10 */}
                <div id="flipPage10" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h2>Audio, Visual (Video) Smart Playway Teaching Method for Play Way Section</h2>
                            <p>To engage students in their learning and make it more interesting and successful, our school combines audio, visual, and video-based teaching methods. Play way methods are child-centric and emphasize hands-on learning and exploration.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <h2>We'll see you there!</h2>
                        </div>
                    </div>
                </div>

            </div>

            {/*  Next Button  */}
            <button id="next-btn" className="flip-btn" >
                <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
        </div>
    );
}

export default Facilities;