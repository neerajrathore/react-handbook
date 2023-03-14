

import React from 'react'
import { Column, Table, SortDirection, AutoSizer } from "react-virtualized";
import _ from "lodash";

let list = [];
for (let i = 0; i < 1000; i++) {
  list.push({ name: `${i} Brian Vaughn`, description: "Software engineer" });
}


class ReactVirtual extends React.Component {
    constructor(props) {
        super(props);

        const sortBy = "name";
        const sortDirection = SortDirection.ASC;
        const sortedList = this._sortList({ sortBy, sortDirection });

        this.state = {
            sortBy,
            sortDirection,
            sortedList
        };
    }
    render() {
        return (
            <div style={{ height: 400 }}>
                <AutoSizer>
                    {({ height, width }) => (
                        <Table
                            width={width}
                            height={height}
                            headerHeight={20}
                            rowHeight={30}
                            sort={this._sort}
                            sortBy={this.state.sortBy}
                            sortDirection={this.state.sortDirection}
                            rowCount={this.state.sortedList.length}
                            rowGetter={({ index }) => this.state.sortedList[index]}
                        >
                            <Column label="Name" dataKey="name" width={200} />
                            <Column width={300} label="Description" dataKey="description" />
                        </Table>
                    )}
                </AutoSizer>
            </div>
        )
    }
    _sortList = ({ sortBy, sortDirection }) => {
        let newList = _.sortBy(list, [sortBy]);
        if (sortDirection === SortDirection.DESC) {
            newList.reverse();
        }
        return newList;
    };

    _sort = ({ sortBy, sortDirection }) => {
        const sortedList = this._sortList({ sortBy, sortDirection });
        this.setState({ sortBy, sortDirection, sortedList });
    };
}

export default ReactVirtual