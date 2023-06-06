import React, { Component } from "react";
import CloudDataService from "../services/cloud.services";
import Cloud from "./cloud.component";
import Reactions from "./reactions.component";
import CommentBox from "./comments.component";

export default class CloudList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.onDataChange = this.onDataChange.bind(this);

        this.state = {
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,
        };

        this.unsubscribe = undefined;
    }

    componentDidMount() {
        this.unsubscribe = CloudDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onDataChange(items) {
        let tutorials = [];

        items.forEach((item) => {
            let id = item.id;
            let data = item.data();
            tutorials.push({
                id: id,
                title: data.title,
                description: data.description,
                published: data.published,
                url: data.url
            });
        });

        this.setState({
            tutorials: tutorials,
        });
    }

    refreshList() {
        this.setState({
            currentTutorial: null,
            currentIndex: -1,
        });
    }

    setActiveTutorial(tutorial, index) {
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index,
        });
    }


    render() {
        const { tutorials, currentTutorial, currentIndex } = this.state;

        return (
            <div className="list-row">
                <div className="col-md-6 bg-white">
                    <h4>Lista de jugadores</h4>

                    <ul className="list-group">
                        {tutorials &&
                            tutorials.map((tutorial, index) => (
                                <li
                                    className={"list-group-item" + (index === currentIndex ? "active" : "")}
                                    onClick={() => this.setActiveTutorial(tutorial, index)}
                                    key={index}
                                >
                                    {tutorial.title}
                                    <tr>
                                        {tutorial.description}
                                    </tr>
                                    <img src={tutorial.url} width="540" height="280" alt=""/>
                                    <tr>
                                        <Reactions id={tutorial.id}></Reactions>
                                    </tr>
                                    <tr>
                                        <CommentBox id={tutorial.id}></CommentBox>
                                    </tr>


                                </li>
                            ))}
                    </ul>
                </div>
                <div className="col-md-6 bg-white" >
                    {currentTutorial ? (
                        <Cloud
                            tutorial={currentTutorial}
                            refreshList={this.refreshList}
                        />
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Flower...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}