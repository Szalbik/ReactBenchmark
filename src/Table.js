import React, { Component } from "react";
import axios from 'axios';
import _ from 'lodash';
import jm from 'js-meter';
import './Table.css';

class Table extends Component {
  state = {
    data: { posts: [], comments: []},
    jsMeterOpt: {
      isPrint: true,
      isKb: true
    }
  }

  constructor(props) {
    super(props);

    this.add100Rows = this.add100Rows.bind(this)
    this.add1000Rows = this.add1000Rows.bind(this)
    this.clearRows = this.clearRows.bind(this)
    this.updateEveryRow = this.updateEveryRow.bind(this)
    this.swapRows = this.swapRows.bind(this)
  }
 
  componentWillUpdate() {
  }

  componentDidUpdate() {
    this.end = +new Date()
    console.log(`Execution Time: ${this.end - this.start} ms`)

  }

  componentWillMount() {
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({data: { ...this.state.data, tempPosts: res.data } }))
    // axios.get('https://jsonplaceholder.typicode.com/comments')
    //   .then(res => this.setState({data: { ...this.state.data, comments: res.data } }))
  }

  renderTable() {
    // const m = new jm(this.state.jsMeterOpt)
    if (this.state.data.posts) {
      return this.state.data.posts.map((row, idx) => (
        <tr key={idx}>
          <td>{row.title}</td>
          <td>{row.body}</td>
        </tr>
      ));
    }
    // const meter = m.stop()
  }

  add100Rows() {
    this.start = +new Date()
    let tempRows = [...this.state.data.posts, ...this.state.data.tempPosts];
    this.setState({ data: { ...this.state.data, posts: tempRows } })
  }

  add1000Rows() {
    this.start = +new Date()
    let tempRows = [
      ...this.state.data.posts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
      ...this.state.data.tempPosts,
    ];
    
    this.setState({ data: { ...this.state.data, posts: tempRows } })
  }

  clearRows() {
    this.start = +new Date()
    this.setState({data: { ...this.state.data, posts: []}})
  }

  updateEveryRow() {
    this.start = +new Date()
    const updatedRows = this.state.data.posts.map(row => {
      row.title += "!!!!"
      row.body += "!!!!"
      return row;
    })
    this.setState({ data: { ...this.state.data, posts: updatedRows } })
  }

  swapRows() {
    this.start = +new Date()
    const swapedRows = _.shuffle(this.state.data.posts)
    this.setState({ data: { ...this.state.data, posts: swapedRows } })
  }

  render() {
    return (
      <div>
        <button onClick={this.add100Rows}>Add 100 Rows</button>
        <button onClick={this.add1000Rows}>Add 1000 Rows</button>
        <button onClick={this.clearRows}>Clear Rows</button>
        <button onClick={this.updateEveryRow}>Update Rows</button>
        <button onClick={this.swapRows}>Swap Rows</button>
        <table>
          <thead>
            <tr><td>Title</td><td>Body</td></tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
