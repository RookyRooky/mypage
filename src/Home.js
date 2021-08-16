import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function Home()
{
    return(
        <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "3em" }}>Let't start 😀</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "3em" }}>I'm Nirmal ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "3em" }}>I'm Developer 🧑‍💻 </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div >
            <span style={{ fontSize: "3em" }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>Nice to meet you </Animator>
              <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}>Success is not final,</span>
          <span style={{ fontSize: "3em" }}>failure is not fatal</span>
          <span style={{ fontSize: "3em" }}>It is the courage to continue that counts</span>
          
          </Animator>
         
        </ScrollPage>
      </ScrollContainer>
    );
}
export default Home;