import React from "react";
import "../App.css";

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
    geocodeByPlaceId,
} from "react-places-autocomplete";

// TODO(vicki): how to import many things
// TODO(vicki): how to not be an idiot haha !!! hoho
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Header from "../components/Header";

interface CouncilMemberSocial {
    facebook: string;
    instagram: string;
    twitter: string;
}

interface CouncilMember {
    full_name: string;
    district: string;
    party: string;
    photo_url: string;
    phones: string[];
    emails: string[];
    social: CouncilMemberSocial | null;
}

interface CouncilMemberProps {
    member: CouncilMember;
}

const CouncilMemberCard = (props: CouncilMemberProps) => {
    const member = props.member;
    return (
        <div className="council-member">
            <div className="council-member-info">
                <h2>{member.full_name.toUpperCase()}</h2>
                <p>
                    District {member.district}, {member.party}
                </p>
                {/* TODO(vicki): add an image */}
                <div className="council-member-contact">
                    {member.phones.map((phone: string) => {
                        return (
                            <p>
                                <a href={phone}>{phone}</a>
                            </p>
                        );
                    })}
                    {member.emails.map((email: string) => {
                        return (
                            <p>
                                <a href={`mailto:${email}`}>{email}</a>
                            </p>
                        );
                    })}
                    {member.social?.facebook && (
                        <p>
                            <a href={member.social.facebook}>Facebook</a>
                        </p>
                    )}
                    {member.social?.instagram && (
                        <p>
                            <a href={member.social.instagram}>Instagram</a>
                        </p>
                    )}
                    {member.social?.twitter && (
                        <p>
                            <a href={member.social.twitter}>Twitter</a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

interface AddressSearchState {
    value: string;
}

interface AddressSearchProps {
    handlePlaceSelect: (place: google.maps.GeocoderResult) => void;
}

// AddressSearchBar implements address search using Google Maps autocomplete
class AddressSearchBar extends React.Component<
    AddressSearchProps,
    AddressSearchState
> {
    autocompleteInput: React.RefObject<HTMLInputElement>;
    autocomplete: google.maps.places.Autocomplete | undefined;

    constructor(props: AddressSearchProps) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: "" };
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(
            this.autocompleteInput.current!,
            { types: ["geocode"] }
        );

        this.autocomplete.addListener("place_changed", this.handleChange);
    }

    handleChange(value: string) {
        this.setState({ value });
    }

    async handleSelect(address: string, placeID: string) {
        const geocodedAddress = await geocodeByAddress(address);
        this.props.handlePlaceSelect(geocodedAddress[0]);
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.value}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                    return (
                        <div className="Demo__search-bar-container">
                            <div className="Demo__search-input-container">
                                <input
                                    {...getInputProps({
                                        placeholder: "Search Places...",
                                        className: "Demo__search-input",
                                    })}
                                />
                                {this.state.value.length > 0 && (
                                    <button className="Demo__clear-button">
                                        x
                                    </button>
                                )}
                            </div>
                            {suggestions.length > 0 && (
                                <div className="Demo__autocomplete-container">
                                    {suggestions.map((suggestion) => {
                                        return <div>{suggestion}</div>;
                                    })}
                                </div>
                            )}
                        </div>
                    );
                }}
            </PlacesAutocomplete>
        );
    }
}

export interface Props {}

export interface ContactState {
    name: string;
    neighborhood: string;
    councilmember: CouncilMember | null;
}

export class Contact extends React.Component<Props, ContactState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "[name]",
            neighborhood: "[neighborhood]",
            councilmember: null,
        };
    }

    // what tf is going on here
    componentDidMount() {}

    onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
        let name = e.currentTarget.value.trim();
        this.setState({ name });
    };

    onChangeNeighborhood = (e: React.FormEvent<HTMLInputElement>) => {
        let neighborhood = e.currentTarget.value.trim();
        this.setState({ neighborhood });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, neighborhood } = this.state;
        console.log("Name: ", name);
        console.log("Neighborhood: ", neighborhood);
        const form = event.currentTarget;
        form.checkValidity();
    };

    handlePlaceSelect = async (result: google.maps.GeocoderResult) => {
        var body: any = {};
        result.address_components?.forEach((f) => {
            if (f.types.includes("street_number")) {
                body["housenumber"] = f.short_name;
            } else if (f.types.includes("route")) {
                body["street"] = f.short_name;
            } else if (f.types.includes("postal_code")) {
                body["zip"] = f.short_name;
            }
        });
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };
        const response = await fetch("", requestOptions);
        const data = await response.json();
        if (data.error) {
            console.log(data.error);
        }
        this.setState({
            councilmember: {
                full_name: data.full_name,
                district: data.district,
                party: data.party[0].toUpperCase() + data.party.slice(1),
                photo_url: data.photo_url,
                phones: data.phones,
                emails: data.emails,
                social: {
                    facebook: data.social.facebook_urls[0],
                    instagram: data.social.instagram_urls[0],
                    twitter: data.social.twitter_urls[0],
                },
            },
        });
    };

    render() {
        const { name, neighborhood, councilmember } = this.state;
        const councilmemberName = councilmember
            ? councilmember.full_name
            : "[Council Member X]";
        return (
            <>
                <Header highlighted="contact-reps" />
                <div className="homepage">
                    <div className="container">
                        <div className="callout">
                            {/* TODO(vicki): change change change */}
                            <h2>TAKE ACTION TODAY</h2>
                            <p>
                                <a href="https://www.politico.com/states/new-york/albany/story/2020/06/28/amid-nationwide-protests-de-blasio-council-near-budget-deal-that-would-slash-nypd-spending-1295811">
                                    Sources say
                                </a>{" "}
                                that the Mayor and City Council will be reaching
                                a handshake deal <strong>by 11 PM today</strong>
                                . From what we know, that deal is full of smoke
                                and mirrors that shift funds around really
                                defunding the NYPD.
                            </p>
                            <p>
                                It is critical that we put pressure on our City
                                Council members to{" "}
                                <strong>
                                    vote NO on any budget that doesn't get cops
                                    out of schools, out of homeless services,
                                    and reduce headcount
                                </strong>
                                .
                            </p>
                            <p>
                                Use this tool to call and email City Council,
                                pushing for #DefundNYPD.
                            </p>
                            <form
                                className="input-container"
                                onSubmit={this.handleSubmit}
                            >
                                <label>Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    onChange={this.onChangeName}
                                />
                                <label>Neighborhood / Borough</label>
                                <input
                                    id="neighbhorhood"
                                    type="text"
                                    required
                                    onChange={this.onChangeNeighborhood}
                                />
                                <AddressSearchBar
                                    handlePlaceSelect={this.handlePlaceSelect}
                                />
                                {/* TODO(vicki): look up CM */}
                                <button>something ...</button>
                            </form>
                        </div>
                        <div className="callout highlight">
                            <h2>1. CALL THEM</h2>
                            <p>
                                Call the council members who have committed to
                                defunding to make sure that they will vote no on
                                any budget that doesn't significally cut the
                                NYPD.
                            </p>
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle
                                            as={Button}
                                            variant="link"
                                            eventKey="0"
                                        >
                                            Show phone script
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            {councilmember && (
                                                <CouncilMemberCard
                                                    member={councilmember}
                                                />
                                            )}
                                            <div
                                                id="phone-script"
                                                className="phone-script"
                                            >
                                                <p>
                                                    My name is {name} and I live
                                                    in {neighborhood}. I am
                                                    calling to ask Council
                                                    Member {councilmemberName}{" "}
                                                    to vote no on a budget that
                                                    does not contain at least $1
                                                    billion in meaningful cuts
                                                    to the NYPD and reinvesting
                                                    those funds into communities
                                                    and human services.
                                                </p>
                                                <p>
                                                    We need at least $1 billion
                                                    in meaningful cuts that
                                                    targets the expense budget
                                                    and uniformed officer
                                                    headcount so we can actually
                                                    reduce policing in our
                                                    communities. Any attempts to
                                                    transfer officers from one
                                                    department to another, cap
                                                    overtime which cannot truly
                                                    be capped, or other
                                                    so-called cuts that don’t
                                                    actually reduce policing are
                                                    just shell games and fuzzy
                                                    math.
                                                </p>
                                                <p>
                                                    We must get cops out of our
                                                    schools, subways, homeless
                                                    and social services, and
                                                    reinvest that money in Black
                                                    communities, in youth
                                                    programs, education, and
                                                    human services.
                                                </p>
                                                <p>
                                                    Will Council Member{" "}
                                                    {councilmemberName} commit
                                                    to voting no on the budget
                                                    if it doesn’t do these
                                                    things?
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="callout">
                            <h2>2. EMAIL THEM</h2>
                            <p>
                                Send these council members an email, demanding
                                that we cut the NYPD budget meaningfully and
                                reject any budget not in line with the
                                #DefundNYPD demands.
                            </p>
                            <button
                                className="button"
                                // onclick="generateEmail()"
                            >
                                Generate email
                            </button>
                            <div id="preview"></div>
                        </div>
                        <div className="callout highlight">
                            <h2>3. TWEET THEM</h2>
                            <div className="tweet-box">
                                <p id="tweet-text">
                                    .@NYCCouncil — will you commit to VOTE NO on
                                    a budget UNLESS it cuts at least $1b in
                                    meaningful cuts - from expense budget and
                                    officer headcount, not just transfers to
                                    other departments - and reinvests in Black
                                    communities, youth, education, and human
                                    services?
                                </p>
                                <a
                                    id="tweet-button"
                                    href="twitter.com"
                                    target="_blank"
                                >
                                    <button className="button">Tweet</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;
