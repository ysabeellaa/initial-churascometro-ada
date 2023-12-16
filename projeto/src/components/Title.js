import SecondTitle from "./SecondTitle";
import { Component } from "react";
import PrincipalTitle from "./PrincipalTitle";

class Title extends Component {
    render() {
        return (
            <PrincipalTitle>
                <SecondTitle/>
            </PrincipalTitle>
        )
    }
}

export default Title;