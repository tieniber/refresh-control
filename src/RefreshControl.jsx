import { Component, createElement } from "react";
import { RefreshControl as RNRefreshControl, ScrollView } from "react-native";

export class RefreshControl extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { refreshing: false };
    }

    render() {
        return (
            // eslint-disable-next-line prettier/prettier
            <ScrollView
                refreshControl={
                    <RNRefreshControl
                        style={this.props.style}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh.bind(this)}
                    />
                }
            >
                {this.props.content}
            </ScrollView>
        );
    }

    setRefreshing(newState) {
        this.setState({ refreshing: newState });
    }

    onRefresh() {
        this.setRefreshing(true);
        if (this.props.action) {
            this.props.action.execute();
        }
        this.setRefreshing(false);
    }
}
