import React from "react";
import "../App.css";

import Header from "../components/Header";

// TODO(vicki): there must be a better way to
// import images...
import fist from "../assets/fist.png";
import demand1 from "../assets/demand1.png";
import demand2 from "../assets/demand2.png";
import demand3 from "../assets/demand3.png";
import demand4 from "../assets/demand4.png";
import demand5 from "../assets/demand5.png";
import demand6 from "../assets/demand6.png";

// TODO(vicki): make more React-y
// Wrap different classNames in components nice cooooool
export const Home = () => {
    return (
        <>
            <Header highlighted="home" />
            <div className="homepage">
                <header>
                    <div className="abolish-heading">
                        <a href="/" style={{ textDecoration: "none" }}>
                            <img src={fist} />
                            <h1>ABOLISH THE NYPD</h1>
                        </a>
                    </div>
                    <p style={{ fontSize: "20px" }}>
                        A compilation of resources, information, and actions on
                        defunding (and abolishing) the NYPD.
                    </p>
                </header>

                <div className="container">
                    <div className="cta-header">
                        <h3>TAKE ACTION</h3>
                    </div>
                    <div className="card-cta-container">
                        <a href="/contact-reps">
                            <div className="card-cta">
                                <strong>Call Your Rep</strong>
                                <br />
                                Email and call your council member calling for
                                #DefundNYPD today!
                            </div>
                        </a>
                        <a href="/peoples-budget">
                            <div className="card-cta">
                                <strong>People's Budget</strong>
                                <br />
                                Where should we cut the NYPD? How should we
                                invest at least $1B in our communities?
                            </div>
                        </a>
                        <a href="/spread-the-word">
                            <div className="card-cta">
                                <strong>Spread the Word</strong>
                                <br />
                                Share the call to #DefundNYPD on social media!
                            </div>
                        </a>
                        <a href="http://eepurl.com/g7qPnn" target="_blank">
                            <div className="card-cta">
                                <strong>Subscribe </strong>
                                <br />
                                Join our email list to stay up to date on
                                resources, actions, and updates!
                            </div>
                        </a>
                    </div>
                    <div className="cta-header">
                        <h3>LEARN MORE</h3>
                    </div>
                    <div className="card-cta-container">
                        <a href="/resources#budget-explainer">
                            <div className="card-learn-more">
                                <strong>How the City budget works</strong>
                            </div>
                        </a>
                        <a href="/resources#abolish-police">
                            <div className="card-learn-more">
                                <strong>Why we must abolish the police</strong>
                            </div>
                        </a>
                        <a href="/resources#organizations">
                            <div className="card-learn-more">
                                <strong>
                                    Organizations that are doing the work
                                </strong>
                            </div>
                        </a>
                        <a
                            href="https://defund-nypd-reps.glitch.me/"
                            target="_blank"
                        >
                            <div className="card-learn-more">
                                <strong>Your Council Member's position</strong>
                            </div>
                        </a>
                    </div>
                    <div className="callout">
                        <h2>WHY DEFUND THE NYPD?</h2>
                        <p>
                            We know our communities are safe and can thrive when
                            we have housing, healthcare, living wages, high
                            quality education, and public transit, and the
                            resources and community-based services we need.
                            That’s what New York City should be spending its
                            money on — NOT the NYPD.
                        </p>
                        <p>
                            When we say we want to defund the NYPD, we don’t
                            want their funding to disappear into thin air — we
                            demand that it is re-invested into our communities.
                        </p>
                    </div>
                    <div className="callout highlight">
                        <h2>
                            HOW DOES DEFUNDING GET US TO ABOLITION? WHY SHOULD
                            WE ABOLISH THE NYPD?
                        </h2>
                        <blockquote>
                            <p className="quote">
                                As an abolitionist organizer working to end
                                policing, incarceration and surveillance, and to
                                create lasting alternatives, I know that “defund
                                the police” is not just a slogan- or even the
                                end goal. It is a strategic demand that gets us
                                even closer to our mission of abolishing police
                                and prisons. Yes, “defund the police” is a
                                rallying cry, reminding us that we are deserving
                                of a world without cops. But it is also a
                                concrete step towards abolition. It is up to us
                                to fight for that world every chance we get.
                            </p>
                            <p className="quote-source">
                                — K Agbebiyi,{" "}
                                <a href="https://twitter.com/sheabutterfemme">
                                    @sheabutterfemme
                                </a>
                            </p>
                        </blockquote>
                    </div>
                    <div className="callout">
                        <h2>WHERE DO THINGS STAND IN NYC?</h2>
                        <p>
                            Ending police violence starts with significant and
                            effective cuts to the NYPD's budget. Over the last
                            few weeks, thousands of New Yorkers have shown up in
                            the streets, called and emailed their Council
                            Members and demanded that we defund the NYPD and
                            invest in communities — by AT LEAST $1 billion this
                            year. Years of organizing by activists and advocates
                            have gotten us to this critical moment.
                        </p>
                        <p>
                            With mere days until the June 30th deadline for a
                            final budget,{" "}
                            <a
                                href="https://council.nyc.gov/press/2020/06/12/1983/"
                                target="_blank"
                            >
                                the City Council announced
                            </a>{" "}
                            that they “can and should work to get $1 billion in
                            cuts” to the NYPD this year. While this is a win,
                            and a step in the right direction, we are nowhere
                            near done with this fight yet. In fact, it is time
                            to fight harder for deeper, meaningful, and more
                            transparent cuts- and to ensure that money gets
                            invested back in New York’s communities.
                        </p>
                        <p>
                            We need to be clear on what we’re asking for, and
                            hold our electeds accountable for it. And we need to
                            ask them to vote no on a budget that doesn’t deliver
                            what the people demand.
                        </p>
                    </div>
                    <div className="callout">
                        <h2>
                            WHAT DO DEEPER, MEANINGFUL, TRANSPARENT CUTS MEAN?
                        </h2>
                        <div className="demands-grid">
                            <div className="demand-card img-right">
                                <h3>
                                    Release the Council's detailed NYPD cuts
                                    proposal
                                </h3>
                                <p>
                                    We demand that the Speaker release the
                                    Council’s proposed cuts immediately to allow
                                    for public review and complete transparency.
                                </p>
                                <img src={demand1} />
                            </div>
                            <div className="demand-card img-center">
                                <h3>
                                    Cut NYPD budget and officer headcount by
                                    half
                                </h3>
                                <p>
                                    We demand the police (operating) budget be
                                    cut by half ($3B) and the headcount of
                                    uniformed officers be cut by half to truly
                                    address police violence.
                                </p>
                                <img src={demand2} />
                            </div>
                            <div className="demand-card img-right">
                                <h3>
                                    Cops out of schools and issues that could be
                                    addressed by social services and community
                                    workers.
                                </h3>
                                <p>
                                    We demand an end to police response to
                                    issues that could be transitioned to
                                    community workers, and demand all officers
                                    and NYPD employees be removed from schools,
                                    mental health response and co-response
                                    teams, homeless outreach, neighborhood
                                    disputes, transit, and subways.
                                </p>
                                <img src={demand3} />
                            </div>
                            <div className="demand-card img-center">
                                <h3>Redirect funds to Black communities.</h3>
                                <p>
                                    We demand that the City redirect the
                                    billions that go to police departments
                                    toward providing health care, housing,
                                    social services, schools, childcare and
                                    eldercare, and programs that benefit Black
                                    people, that would create less need for
                                    police in the first place.
                                </p>
                                <img
                                    src={demand4}
                                    style={{ maxWidth: "300px" }}
                                />
                            </div>
                            <div className="demand-card img-right">
                                <h3>Fully transparent NYPD budget.</h3>
                                <p>
                                    We demand a fully transparent NYPD budget
                                    that is accessible to the public. It is
                                    unacceptable that there are large swaths of
                                    the NYPD budget unavailable to anyone.
                                </p>
                                <img src={demand5} />
                            </div>
                            <div className="demand-card img-center">
                                <h3>No rollbacks.</h3>
                                <p>
                                    We demand that these cuts remain in place
                                    for future fiscal years, and not just as a
                                    ‘austerity budget’ measure. These cuts to
                                    the NYPD are in the interest of community
                                    safety and the well being of Black people,
                                    not just savings for the City during this
                                    fiscal crisis.
                                </p>
                                <img
                                    src={demand6}
                                    style={{ height: "130px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="social-footer">
                    <p>Abolish the NYPD</p>
                    <div>
                        <a
                            href="https://www.instagram.com/AbolishtheNYPD/"
                            target="_blank"
                        >
                            <i className="fa fa-instagram fa-2x"></i>
                        </a>
                        <a
                            href="https://twitter.com/AbolishtheNYPD"
                            target="_blank"
                        >
                            <i className="fa fa-twitter fa-2x"></i>
                        </a>
                        <a href="http://eepurl.com/g7qPnn" target="_blank">
                            <i className="fa fa-envelope fa-2x"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};
