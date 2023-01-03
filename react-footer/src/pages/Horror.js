import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./Button";

export default function Horror() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid">
        <section class="p-2 p-md-2 text-center text-lg-start shadow-1-strong">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div class="card">
                <div class="card-body m-1">
                  <div class="row">
                    <div class="col-lg-4 d-flex justify-content-center align-items-center mb-2 mb-lg-0">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_.jpg"
                        class="img-fluid shadow-1"
                        alt="..."
                        width="200"
                        height="300"
                      />
                    </div>
                    <div class="col-lg-8">
                      <Button limit={160}>
                        In 1977, paranormal investigators Ed (Patrick Wilson)
                        and Lorraine Warren come out of a self-imposed
                        sabbatical to travel to Enfield, a borough in north
                        London. There, they meet Peggy Hodgson, an overwhelmed
                        single mother of four who tells the couple that
                        something evil is in her home. Ed and Lorraine believe
                        her story when the youngest daughter starts to show
                        signs of demonic possession. As the Warrens try to help
                        the besieged girl, they become the next targets of the
                        malicious spirit.
                      </Button>
                      <p class="fw-bold lead mb-2">
                        <strong>Conjuring 2 (2016)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="p-2 p-md-2 text-center text-lg-start shadow-1-strong">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div class="card">
                <div class="card-body m-1">
                  <div class="row">
                    <div class="col-lg-4 d-flex justify-content-center align-items-center mb-1 mb-lg-0">
                      <img
                        src="https://m.media-amazon.com/images/I/51wVhTD108L._AC_.jpg"
                        class="img-fluid shadow-1"
                        alt="..."
                        width="200"
                        height="300"
                      />
                    </div>
                    <div class="col-lg-8">
                      <Button limit={134}>
                        Jack Torrance (Jack Nicholson) becomes winter caretaker
                        at the isolated Overlook Hotel in Colorado, hoping to
                        cure his writer's block. He settles in along with his
                        wife, Wendy (Shelley Duvall), and his son, Danny (Danny
                        Lloyd), who is plagued by psychic premonitions. As
                        Jack's writing goes nowhere and Danny's visions become
                        more disturbing, Jack discovers the hotel's dark secrets
                        and begins to unravel into a homicidal maniac hell-bent
                        on terrorizing his family.
                      </Button>
                      <p class="fw-bold lead mb-2">
                        <strong>The Shining (1980)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="p-2 p-md-2 text-center text-lg-start shadow-1-strong">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div class="card">
                <div class="card-body m-1">
                  <div class="row">
                    <div class="col-lg-4 d-flex justify-content-center align-items-center mb-1 mb-lg-0">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg"
                        class="img-fluid shadow-1"
                        alt="..."
                        width="200"
                        height="300"
                      />
                    </div>
                    <div class="col-lg-8">
                      <Button limit={32}>
                        If they hear you, they hunt you. A family must live in
                        silence to avoid mysterious creatures that hunt by
                        sound. Knowing that even the sboldest whisper or
                        footstep can bring death, Evelyn and Lee are determined
                        to find a way to protect their children while
                        desperately searching for a way to fight back.
                      </Button>
                      <p class="fw-bold lead mb-2">
                        <strong>A Quiet Place (2018)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="p-2 p-md-2 text-center text-lg-start shadow-1-strong">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div class="card">
                <div class="card-body m-1">
                  <div class="row">
                    <div class="col-lg-4 d-flex justify-content-center align-items-center mb-1 mb-lg-0">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                        class="img-fluid shadow-1"
                        alt="..."
                        width="200"
                        height="300"
                      />
                    </div>
                    <div class="col-lg-8">
                      <Button limit={111}>
                        On a cold Halloween night in 1963, six year old Michael
                        Myers brutally murdered his 17-year-old sister, Judith.
                        He was sentenced and locked away for 15 years. But on
                        October 30, 1978, while being transferred for a court
                        date, a 21-year-old Michael Myers steals a car and
                        escapes Smith's Grove. He returns to his quiet hometown
                        of Haddonfield, Illinois, where he looks for his next
                        victims.
                      </Button>
                      <p class="fw-bold lead mb-2">
                        <strong>Halloween (1978)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}
